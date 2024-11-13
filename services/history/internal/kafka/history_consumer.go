// internal/kafka/history_consumer.go
package kafka

import (
	"context"
	"encoding/json"
	"log"

	"history/internal/service"

	"github.com/segmentio/kafka-go"
)

// HistoryConsumer listens to Kafka topics for history requests
type HistoryConsumer struct {
	reader         *kafka.Reader
	historyService *service.HistoryService
	producer       *HistoryProducer // Producer to send responses
}

// NewHistoryConsumer creates a new HistoryConsumer
func NewHistoryConsumer(brokers []string, topic string, historyService *service.HistoryService, producer *HistoryProducer) *HistoryConsumer {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: brokers,
		Topic:   topic,
		GroupID: "history-service",
	})
	return &HistoryConsumer{reader: reader, historyService: historyService, producer: producer}
}

// Start listens for messages and processes them
func (c *HistoryConsumer) Start(ctx context.Context) error {
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
		case "CreateHistory":
			title := request["title"].(string)
			action := request["action"].(string)
			description := request["description"].(string)
			history, err := c.historyService.CreateHistory(ctx, title, action, description)
			response = map[string]interface{}{
				"type":    "CreateHistoryResponse",
				"history": history,
				"error":   err,
			}
		case "GetHistoryByID":
			historyID := request["historyID"].(string)
			history, err := c.historyService.GetHistoryByID(ctx, historyID)
			response = map[string]interface{}{
				"type":    "GetHistoryByIDResponse",
				"history": history,
				"error":   err,
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
