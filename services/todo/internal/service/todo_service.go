// internal/service/todo_service.go
package service

import (
	"context"
	"time"

	"todo/internal/model"
	"todo/internal/repo"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// TodoService handles todo item operations
type TodoService struct {
	repo repo.TodoRepository
}

// NewTodoService creates a new TodoService
func NewTodoService(repo repo.TodoRepository) *TodoService {
	return &TodoService{repo: repo}
}

// CreateTodo creates a new todo item
func (s *TodoService) CreateTodo(ctx context.Context, title, description string, isCompleted bool, dueDate string) (*model.Todo, error) {
	dueDateTime, err := time.Parse(time.RFC3339, dueDate)
	if err != nil {
		return nil, err
	}

	todo := &model.Todo{
		Title:       title,
		Description: description,
		IsCompleted: isCompleted,
		DueDate:     dueDateTime,
	}
	return s.repo.CreateTodo(ctx, todo)
}

// GetTodoByID retrieves a todo item by its ID
func (s *TodoService) GetTodoByID(ctx context.Context, todoID string) (*model.Todo, error) {
	id, err := primitive.ObjectIDFromHex(todoID)
	if err != nil {
		return nil, err
	}
	return s.repo.GetTodoByID(ctx, id)
}

// UpdateTodo updates the todo item status or other fields by ID
func (s *TodoService) UpdateTodo(ctx context.Context, todoID string, updateData map[string]interface{}) (*model.Todo, error) {
	id, err := primitive.ObjectIDFromHex(todoID)
	if err != nil {
		return nil, err
	}

	update := make(bson.M)
	if updateData["isCompleted"] != nil {
		update["isCompleted"] = updateData["isCompleted"]
	}
	if updateData["title"] != nil {
		update["title"] = updateData["title"]
	}
	if updateData["description"] != nil {
		update["description"] = updateData["description"]
	}
	if updateData["dueDate"] != nil {
		update["dueDate"] = updateData["dueDate"]
	}

	return s.repo.UpdateTodo(ctx, id, update)
}
