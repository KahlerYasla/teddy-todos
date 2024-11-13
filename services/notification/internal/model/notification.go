// internal/model/notification.go
package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Notification represents a notification item
type Notification struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	Message   string             `bson:"message"`
	Type      string             `bson:"type"`
	IsRead    bool               `bson:"isRead"`
	CreatedAt time.Time          `bson:"createdAt"`
}
