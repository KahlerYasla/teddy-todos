// internal/kafka/todo_producer.go
package kafka

import (
	"context"
	"encoding/json"

	"github.com/segmentio/kafka-go"
)

// TodoProducer sends responses back to Kafka
type TodoProducer struct {
	writer *kafka.Writer
}

// NewTodoProducer creates a new TodoProducer
func NewTodoProducer(brokers []string, topic string) *TodoProducer {
	writer := &kafka.Writer{
		Addr:     kafka.TCP(brokers...),
		Topic:    topic,
		Balancer: &kafka.LeastBytes{},
	}
	return &TodoProducer{writer: writer}
}

// SendResponse sends a response to Kafka
func (p *TodoProducer) SendResponse(ctx context.Context, response map[string]interface{}) error {
	message, err := json.Marshal(response)
	if err != nil {
		return err
	}
	return p.writer.WriteMessages(ctx, kafka.Message{
		Value: message,
	})
}
