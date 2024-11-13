// cmd/auth/main.go
package main

import (
	"auth/internal/kafka"
	"auth/internal/repo"
	"auth/internal/service"

	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	brokers := []string{"localhost:9092"} // Kafka broker addresses
	requestTopic := "auth-requests"
	responseTopic := "auth-responses"
	mongoURI := "mongodb://localhost:27017" // Update as needed
	dbName := "authDB"                      // Database name
	collectionName := "users"               // Collection for users

	// Connect to MongoDB
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		log.Fatalf("error connecting to MongoDB: %v", err)
	}
	db := client.Database(dbName)

	// Initialize repository, service, producer, and consumer
	authRepo := repo.NewUserRepository(db, collectionName)
	authService := service.NewAuthService(authRepo)

	producer := kafka.NewAuthProducer(brokers, responseTopic)
	consumer := kafka.NewAuthConsumer(brokers, requestTopic, authService, producer) // Pass producer to consumer

	// Start Kafka consumer
	go func() {
		if err := consumer.Start(ctx); err != nil {
			log.Fatalf("error starting consumer: %v", err)
		}
	}()

	<-ctx.Done() // Keep the service running
	log.Println("Shutting down service")
}
