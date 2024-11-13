// internal/kafka/auth_producer.go
package kafka

import (
	"context"
	"encoding/json"
	"log"

	"github.com/segmentio/kafka-go"
)

// AuthProducer sends responses to Kafka
type AuthProducer struct {
	writer *kafka.Writer
}

// NewAuthProducer creates a new AuthProducer
func NewAuthProducer(brokers []string, topic string) *AuthProducer {
	writer := kafka.NewWriter(kafka.WriterConfig{
		Brokers: brokers,
		Topic:   topic,
	})
	return &AuthProducer{writer: writer}
}

// SendResponse sends a response message to Kafka
func (p *AuthProducer) SendResponse(ctx context.Context, response interface{}) error {
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
