// internal/kafka/notification_producer.go
package kafka

import (
	"context"
	"encoding/json"

	"github.com/segmentio/kafka-go"
)

// NotificationProducer sends responses back to Kafka
type NotificationProducer struct {
	writer *kafka.Writer
}

// NewNotificationProducer creates a new NotificationProducer
func NewNotificationProducer(brokers []string, topic string) *NotificationProducer {
	writer := &kafka.Writer{
		Addr:     kafka.TCP(brokers...),
		Topic:    topic,
		Balancer: &kafka.LeastBytes{},
	}
	return &NotificationProducer{writer: writer}
}

// SendResponse sends a response to Kafka
func (p *NotificationProducer) SendResponse(ctx context.Context, response map[string]interface{}) error {
	message, err := json.Marshal(response)
	if err != nil {
		return err
	}
	return p.writer.WriteMessages(ctx, kafka.Message{
		Value: message,
	})
}
