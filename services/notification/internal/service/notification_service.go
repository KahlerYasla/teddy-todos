// internal/service/notification_service.go
package service

import (
	"context"
	"notification/internal/model"
	"notification/internal/repo"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// NotificationService handles notification operations
type NotificationService struct {
	repo repo.NotificationRepository
}

// NewNotificationService creates a new NotificationService
func NewNotificationService(repo repo.NotificationRepository) *NotificationService {
	return &NotificationService{repo: repo}
}

// CreateNotification creates a new notification item
func (s *NotificationService) CreateNotification(ctx context.Context, message, notificationType string) (*model.Notification, error) {
	notification := &model.Notification{
		Message:   message,
		Type:      notificationType,
		IsRead:    false,
		CreatedAt: time.Now(),
	}
	return s.repo.CreateNotification(ctx, notification)
}

// GetNotificationByID retrieves a notification item by its ID
func (s *NotificationService) GetNotificationByID(ctx context.Context, notificationID string) (*model.Notification, error) {
	id, err := primitive.ObjectIDFromHex(notificationID)
	if err != nil {
		return nil, err
	}
	return s.repo.GetNotificationByID(ctx, id)
}

// UpdateNotification updates the notification status (isRead)
func (s *NotificationService) UpdateNotification(ctx context.Context, notificationID string, isRead bool) (*model.Notification, error) {
	id, err := primitive.ObjectIDFromHex(notificationID)
	if err != nil {
		return nil, err
	}

	update := bson.M{
		"isRead": isRead,
	}

	return s.repo.UpdateNotification(ctx, id, update)
}
