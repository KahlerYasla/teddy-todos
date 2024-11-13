// internal/repo/todo_repo.go
package repo

import (
	"context"
	"todo/internal/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// TodoRepository handles MongoDB operations for todo items
type TodoRepository struct {
	db             *mongo.Database
	collectionName string
}

// NewTodoRepository creates a new TodoRepository
func NewTodoRepository(db *mongo.Database, collectionName string) *TodoRepository {
	return &TodoRepository{db: db, collectionName: collectionName}
}

// CreateTodo creates a new todo item
func (repo *TodoRepository) CreateTodo(ctx context.Context, todo *model.Todo) (*model.Todo, error) {
	collection := repo.db.Collection(repo.collectionName)
	result, err := collection.InsertOne(ctx, todo)
	if err != nil {
		return nil, err
	}
	todo.ID = result.InsertedID.(primitive.ObjectID)
	return todo, nil
}

// GetTodoByID retrieves a todo item by ID
func (repo *TodoRepository) GetTodoByID(ctx context.Context, todoID primitive.ObjectID) (*model.Todo, error) {
	var todo model.Todo
	collection := repo.db.Collection(repo.collectionName)
	filter := bson.M{"_id": todoID}

	err := collection.FindOne(ctx, filter).Decode(&todo)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	} else if err != nil {
		return nil, err
	}
	return &todo, nil
}

// UpdateTodo updates the status of a todo item by ID
func (repo *TodoRepository) UpdateTodo(ctx context.Context, todoID primitive.ObjectID, updateData bson.M) (*model.Todo, error) {
	collection := repo.db.Collection(repo.collectionName)
	filter := bson.M{"_id": todoID}
	update := bson.M{
		"$set": updateData,
	}

	var updatedTodo model.Todo
	err := collection.FindOneAndUpdate(ctx, filter, update).Decode(&updatedTodo)
	if err != nil {
		return nil, err
	}
	return &updatedTodo, nil
}
