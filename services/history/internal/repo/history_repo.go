// internal/repo/history_repo.go
package repo

import (
	"context"
	"history/internal/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// HistoryRepository handles MongoDB operations for history records
type HistoryRepository struct {
	db             *mongo.Database
	collectionName string
}

// NewHistoryRepository creates a new HistoryRepository
func NewHistoryRepository(db *mongo.Database, collectionName string) *HistoryRepository {
	return &HistoryRepository{db: db, collectionName: collectionName}
}

// CreateHistory creates a new history record
func (repo *HistoryRepository) CreateHistory(ctx context.Context, history *model.History) (*model.History, error) {
	collection := repo.db.Collection(repo.collectionName)
	result, err := collection.InsertOne(ctx, history)
	if err != nil {
		return nil, err
	}
	history.ID = result.InsertedID.(primitive.ObjectID)
	return history, nil
}

// GetHistoryByID retrieves a history record by ID
func (repo *HistoryRepository) GetHistoryByID(ctx context.Context, historyID primitive.ObjectID) (*model.History, error) {
	var history model.History
	collection := repo.db.Collection(repo.collectionName)
	filter := bson.M{"_id": historyID}

	err := collection.FindOne(ctx, filter).Decode(&history)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	} else if err != nil {
		return nil, err
	}
	return &history, nil
}
