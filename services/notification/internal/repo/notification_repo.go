// internal/repo/notification_repo.go
package repo

import (
	"context"
	"notification/internal/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// NotificationRepository handles MongoDB operations for notifications
type NotificationRepository struct {
	db             *mongo.Database
	collectionName string
}

// NewNotificationRepository creates a new NotificationRepository
func NewNotificationRepository(db *mongo.Database, collectionName string) *NotificationRepository {
	return &NotificationRepository{db: db, collectionName: collectionName}
}

// CreateNotification creates a new notification item
func (repo *NotificationRepository) CreateNotification(ctx context.Context, notification *model.Notification) (*model.Notification, error) {
	collection := repo.db.Collection(repo.collectionName)
	result, err := collection.InsertOne(ctx, notification)
	if err != nil {
		return nil, err
	}
	notification.ID = result.InsertedID.(primitive.ObjectID)
	return notification, nil
}

// GetNotificationByID retrieves a notification item by ID
func (repo *NotificationRepository) GetNotificationByID(ctx context.Context, notificationID primitive.ObjectID) (*model.Notification, error) {
	var notification model.Notification
	collection := repo.db.Collection(repo.collectionName)
	filter := bson.M{"_id": notificationID}

	err := collection.FindOne(ctx, filter).Decode(&notification)
	if err == mongo.ErrNoDocuments {
		return nil, nil
	} else if err != nil {
		return nil, err
	}
	return &notification, nil
}

// UpdateNotification updates the status (isRead) of a notification
func (repo *NotificationRepository) UpdateNotification(ctx context.Context, notificationID primitive.ObjectID, updateData bson.M) (*model.Notification, error) {
	collection := repo.db.Collection(repo.collectionName)
	filter := bson.M{"_id": notificationID}
	update := bson.M{
		"$set": updateData,
	}

	var updatedNotification model.Notification
	err := collection.FindOneAndUpdate(ctx, filter, update).Decode(&updatedNotification)
	if err != nil {
		return nil, err
	}
	return &updatedNotification, nil
}
