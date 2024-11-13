// internal/service/history_service.go
package service

import (
	"context"
	"history/internal/model"
	"history/internal/repo"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// HistoryService handles history record operations
type HistoryService struct {
	repo repo.HistoryRepository
}

// NewHistoryService creates a new HistoryService
func NewHistoryService(repo repo.HistoryRepository) *HistoryService {
	return &HistoryService{repo: repo}
}

// CreateHistory creates a new history record
func (s *HistoryService) CreateHistory(ctx context.Context, title, action, description string) (*model.History, error) {
	history := &model.History{
		Title:       title,
		Action:      action,
		Description: description,
	}
	return s.repo.CreateHistory(ctx, history)
}

// GetHistoryByID retrieves a history record by its ID
func (s *HistoryService) GetHistoryByID(ctx context.Context, historyID string) (*model.History, error) {
	id, err := primitive.ObjectIDFromHex(historyID)
	if err != nil {
		return nil, err
	}
	return s.repo.GetHistoryByID(ctx, id)
}
