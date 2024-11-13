// cmd/history/main.go
package main

import (
	"context"
	"log"
	"time"

	"history/internal/kafka"
	"history/internal/repo"
	"history/internal/service"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	brokers := []string{"localhost:9092"} // Kafka broker addresses
	requestTopic := "history-requests"
	responseTopic := "history-responses"
	mongoURI := "mongodb://localhost:27017" // MongoDB URI
	dbName := "historyDB"                   // Database name
	collectionName := "history"             // Collection name for history records

	// Connect to MongoDB
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		log.Fatalf("error connecting to MongoDB: %v", err)
	}
	db := client.Database(dbName)

	// Initialize repository, service, producer, and consumer
	historyRepo := repo.NewHistoryRepository(db, collectionName)
	historyService := service.NewHistoryService(*historyRepo)

	producer := kafka.NewHistoryProducer(brokers, responseTopic)
	consumer := kafka.NewHistoryConsumer(brokers, requestTopic, historyService, producer)

	// Start Kafka consumer
	go func() {
		if err := consumer.Start(ctx); err != nil {
			log.Fatalf("error starting consumer: %v", err)
		}
	}()

	<-ctx.Done() // Keep the service running
	log.Println("Shutting down service")
}
