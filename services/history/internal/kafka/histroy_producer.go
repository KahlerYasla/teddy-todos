// internal/kafka/history_producer.go
package kafka

import (
	"context"
	"encoding/json"
	"log"

	"github.com/segmentio/kafka-go"
)

// HistoryProducer sends responses to Kafka
type HistoryProducer struct {
	writer *kafka.Writer
}

// NewHistoryProducer creates a new HistoryProducer
func NewHistoryProducer(brokers []string, topic string) *HistoryProducer {
	writer := kafka.NewWriter(kafka.WriterConfig{
		Brokers: brokers,
		Topic:   topic,
	})
	return &HistoryProducer{writer: writer}
}

// SendResponse sends a response message to Kafka
func (p *HistoryProducer) SendResponse(ctx context.Context, response interface{}) error {
	value, err := json.Marshal(response)
	if err != nil {
		return err
	}

	err = p.writer.WriteMessages(ctx, kafka.Message{
		Value: value,
	})
	if err != nil {
		log.Printf("error sending message: %v", err)
	}
	return err
}
