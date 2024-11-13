// internal/kafka/auth_consumer.go
package kafka

import (
	"auth/internal/service"
	"context"
	"encoding/json"
	"log"

	"github.com/segmentio/kafka-go"
)

// AuthConsumer listens to Kafka topics for authentication requests
type AuthConsumer struct {
	reader      *kafka.Reader
	authService *service.AuthService
	producer    *AuthProducer // Adding producer to send responses
}

// NewAuthConsumer creates a new AuthConsumer
func NewAuthConsumer(brokers []string, topic string, authService *service.AuthService, producer *AuthProducer) *AuthConsumer {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: brokers,
		Topic:   topic,
		GroupID: "auth-service",
	})
	return &AuthConsumer{reader: reader, authService: authService, producer: producer}
}

// Start listens for messages and processes them
func (c *AuthConsumer) Start(ctx context.Context) error {
	for {
		m, err := c.reader.ReadMessage(ctx)
		if err != nil {
			log.Printf("error reading message: %v", err)
			continue
		}

		var request map[string]interface{}
		if err := json.Unmarshal(m.Value, &request); err != nil {
			log.Printf("error unmarshalling request: %v", err)
			continue
		}

		var response map[string]interface{}
		switch request["type"] {
		case "EvaluateLogin":
			username := request["username"].(string)
			password := request["password"].(string)
			success, err := c.authService.EvaluateLogin(ctx, username, password)
			response = map[string]interface{}{
				"type":    "EvaluateLoginResponse",
				"success": success,
				"error":   err,
			}
		case "GetUserByID":
			userID := request["userID"].(string)
			user, err := c.authService.GetUserByID(ctx, userID)
			response = map[string]interface{}{
				"type":  "GetUserByIDResponse",
				"user":  user,
				"error": err,
			}
		default:
			log.Printf("unknown request type: %v", request["type"])
			continue
		}

		// Send the response to Kafka
		if err := c.producer.SendResponse(ctx, response); err != nil {
			log.Printf("error sending response: %v", err)
		}
	}
}
