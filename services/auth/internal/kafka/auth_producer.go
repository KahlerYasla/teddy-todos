package kafka

import (
	"log"

	"github.com/confluentinc/confluent-kafka-go/kafka"
)

type Producer struct {
	kafkaProducer *kafka.Producer
}

func NewProducer(broker string) (*Producer, error) {
	p, err := kafka.NewProducer(&kafka.ConfigMap{"bootstrap.servers": broker})
	if err != nil {
		return nil, err
	}
	return &Producer{kafkaProducer: p}, nil
}

func (p *Producer) Produce(topic string, message []byte) {
	deliveryChan := make(chan kafka.Event)

	err := p.kafkaProducer.Produce(&kafka.Message{
		TopicPartition: kafka.TopicPartition{Topic: &topic, Partition: kafka.PartitionAny},
		Value:          message,
	}, deliveryChan)

	if err != nil {
		log.Printf("Failed to produce message: %s", err)
	}

	// Wait for delivery report
	go func() {
		ev := <-deliveryChan
		switch e := ev.(type) {
		case *kafka.Message:
			if e.TopicPartition.Error != nil {
				log.Printf("Delivery failed: %v\n", e.TopicPartition.Error)
			} else {
				log.Printf("Delivered message to %v\n", e.TopicPartition)
			}
		}
	}()
}
