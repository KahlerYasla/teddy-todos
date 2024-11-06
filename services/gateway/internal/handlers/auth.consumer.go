package main

import (
	"log"

	"github.com/confluentinc/confluent-kafka-go/kafka"
)

func main() {
	// Kafka broker address
	broker := "localhost:9092"
	// Topic to which login events will be published
	topic := "login_events"

	// Create a new producer instance
	producer, err := kafka.NewProducer(&kafka.ConfigMap{"bootstrap.servers": broker})
	if err != nil {
		log.Fatalf("Failed to create producer: %s", err)
	}
	defer producer.Close()

	// Produce a login event
	loginEvent := `{"username": "john_doe", "timestamp": "2024-11-05T12:00:00Z", "success": true}`

	// Create a new message
	message := &kafka.Message{
		TopicPartition: kafka.TopicPartition{Topic: &topic, Partition: kafka.PartitionAny},
		Value:          []byte(loginEvent),
	}

	// Produce the message
	err = producer.Produce(message, nil)
	if err != nil {
		log.Fatalf("Failed to produce message: %s", err)
	}

	// Wait for all messages to be delivered
	producer.Flush(15 * 1000)

	log.Println("Login event published successfully!")
}
