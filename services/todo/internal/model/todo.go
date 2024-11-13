// internal/model/todo.go
package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Todo represents a todo item
type Todo struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Title       string             `bson:"title"`
	Description string             `bson:"description"`
	IsCompleted bool               `bson:"isCompleted"`
	DueDate     time.Time          `bson:"dueDate"`
}
