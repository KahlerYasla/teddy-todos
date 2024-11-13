// cmd/notification/main.go
package main

import (
	"context"
	"log"
	"notification/internal/kafka"
	"notification/internal/repo"
	"notification/internal/service"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	brokers := []string{"localhost:9092"}
	requestTopic := "notification-requests"
	responseTopic := "notification-responses"

	// Set up MongoDB client and repository
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatalf("could not connect to MongoDB: %v", err)
	}
	db := client.Database("notificationDB")
	collectionName := "notifications"
	notificationRepo := repo.NewNotificationRepository(db, collectionName)

	// Set up service and Kafka components
	notificationService := service.NewNotificationService(*notificationRepo)
	producer := kafka.NewNotificationProducer(brokers, responseTopic)
	consumer := kafka.NewNotificationConsumer(brokers, requestTopic, notificationService, producer)

	// Start the consumer
	ctx := context.Background()
	go func() {
		if err := consumer.Start(ctx); err != nil {
			log.Fatalf("error starting consumer: %v", err)
		}
	}()

	<-ctx.Done() // Keep the service running
	log.Println("Shutting down service")
}
