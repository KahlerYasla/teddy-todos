package kafka

import (
	"log"

	"github.com/confluentinc/confluent-kafka-go/kafka"
)

type Consumer struct {
	kafkaConsumer *kafka.Consumer
}

func NewConsumer(broker string, groupID string, topics []string) (*Consumer, error) {
	c, err := kafka.NewConsumer(&kafka.ConfigMap{
		"bootstrap.servers":        broker,     // Kafka brokers
		"group.id":                 groupID,    // Consumer group ID
		"auto.offset.reset":        "earliest", // Start at beginning if no offsets are committed
		"enable.auto.commit":       false,      // Disable auto-commit to manually control commits
		"session.timeout.ms":       6000,       // Timeout for session expiration
		"max.poll.interval.ms":     300000,     // Max time between poll calls to prevent rebalancing
		"enable.partition.eof":     true,       // Notify when the consumer reaches end of a partition
		"allow.auto.create.topics": false,      // Avoid creating topics accidentally
	})
	if err != nil {
		return nil, err
	}

	err = c.SubscribeTopics(topics, nil)
	if err != nil {
		return nil, err
	}

	return &Consumer{kafkaConsumer: c}, nil
}

func (c *Consumer) Consume() {
	for {
		msg, err := c.kafkaConsumer.ReadMessage(-1)
		if err == nil {
			log.Printf("Message on %s: %s\n", msg.TopicPartition, string(msg.Value))
			// Handle the message (e.g., process login event)
		} else {
			log.Printf("Consumer error: %v (%v)\n", err, msg)
		}
	}
}
