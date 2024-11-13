// internal/kafka/notification_consumer.go
package kafka

import (
	"context"
	"encoding/json"
	"log"
	"notification/internal/service"

	"github.com/segmentio/kafka-go"
)

// NotificationConsumer listens to Kafka topics for notification requests
type NotificationConsumer struct {
	reader              *kafka.Reader
	notificationService *service.NotificationService
	producer            *NotificationProducer // Producer to send responses
}

// NewNotificationConsumer creates a new NotificationConsumer
func NewNotificationConsumer(brokers []string, topic string, notificationService *service.NotificationService, producer *NotificationProducer) *NotificationConsumer {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: brokers,
		Topic:   topic,
		GroupID: "notification-service",
	})
	return &NotificationConsumer{reader: reader, notificationService: notificationService, producer: producer}
}

// Start listens for messages and processes them
func (c *NotificationConsumer) Start(ctx context.Context) error {
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
		case "CreateNotification":
			message := request["message"].(string)
			notificationType := request["type"].(string)
			notification, err := c.notificationService.CreateNotification(ctx, message, notificationType)
			response = map[string]interface{}{
				"type":         "CreateNotificationResponse",
				"notification": notification,
				"error":        err,
			}
		case "GetNotificationByID":
			notificationID := request["notificationID"].(string)
			notification, err := c.notificationService.GetNotificationByID(ctx, notificationID)
			response = map[string]interface{}{
				"type":         "GetNotificationByIDResponse",
				"notification": notification,
				"error":        err,
			}
		case "UpdateNotification":
			notificationID := request["notificationID"].(string)
			isRead := request["isRead"].(bool)
			updatedNotification, err := c.notificationService.UpdateNotification(ctx, notificationID, isRead)
			response = map[string]interface{}{
				"type":         "UpdateNotificationResponse",
				"notification": updatedNotification,
				"error":        err,
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
