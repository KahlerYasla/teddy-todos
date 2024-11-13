// internal/kafka/todo_consumer.go
package kafka

import (
	"context"
	"encoding/json"
	"log"

	"todo/internal/service"

	"github.com/segmentio/kafka-go"
)

// TodoConsumer listens to Kafka topics for todo requests
type TodoConsumer struct {
	reader      *kafka.Reader
	todoService *service.TodoService
	producer    *TodoProducer // Producer to send responses
}

// NewTodoConsumer creates a new TodoConsumer
func NewTodoConsumer(brokers []string, topic string, todoService *service.TodoService, producer *TodoProducer) *TodoConsumer {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers: brokers,
		Topic:   topic,
		GroupID: "todo-service",
	})
	return &TodoConsumer{reader: reader, todoService: todoService, producer: producer}
}

// Start listens for messages and processes them
func (c *TodoConsumer) Start(ctx context.Context) error {
	for {
		m, err := c.reader.ReadMessage(ctx)
		if err != nil {
			log.Printf("error reading message: %v", err)
			continue
		}

		var request map[string]interface{}
		if err := json.Unmarshal(m.Value, &request); err != nil {
			log.Printf("error unmarshalling request: %v", err)
			continue
		}

		var response map[string]interface{}
		switch request["type"] {
		case "CreateTodo":
			title := request["title"].(string)
			description := request["description"].(string)
			isCompleted := request["isCompleted"].(bool)
			dueDate := request["dueDate"].(string)
			todo, err := c.todoService.CreateTodo(ctx, title, description, isCompleted, dueDate)
			response = map[string]interface{}{
				"type":  "CreateTodoResponse",
				"todo":  todo,
				"error": err,
			}
		case "GetTodoByID":
			todoID := request["todoID"].(string)
			todo, err := c.todoService.GetTodoByID(ctx, todoID)
			response = map[string]interface{}{
				"type":  "GetTodoByIDResponse",
				"todo":  todo,
				"error": err,
			}
		case "UpdateTodo":
			todoID := request["todoID"].(string)
			updateData := request["updateData"].(map[string]interface{})
			updatedTodo, err := c.todoService.UpdateTodo(ctx, todoID, updateData)
			response = map[string]interface{}{
				"type":  "UpdateTodoResponse",
				"todo":  updatedTodo,
				"error": err,
			}
		default:
			log.Printf("unknown request type: %v", request["type"])
			continue
		}

		// Send the response to Kafka
		if err := c.producer.SendResponse(ctx, response); err != nil {
			log.Printf("error sending response: %v", err)
		}
	}
}
