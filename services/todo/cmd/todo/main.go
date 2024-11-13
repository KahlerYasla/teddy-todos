// cmd/todo/main.go
package main

import (
	"context"
	"log"
	"todo/internal/kafka"
	"todo/internal/repo"
	"todo/internal/service"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	brokers := []string{"localhost:9092"}
	requestTopic := "todo-requests"
	responseTopic := "todo-responses"

	// Set up MongoDB client and repository
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Fatalf("could not connect to MongoDB: %v", err)
	}
	db := client.Database("todoDB")
	collectionName := "todos"
	todoRepo := repo.NewTodoRepository(db, collectionName)

	// Set up service and Kafka components
	todoService := service.NewTodoService(*todoRepo)
	producer := kafka.NewTodoProducer(brokers, responseTopic)
	consumer := kafka.NewTodoConsumer(brokers, requestTopic, todoService, producer)

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
