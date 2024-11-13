package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type History struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Title       string             `bson:"title"`
	Action      string             `bson:"action"`
	Description string             `bson:"description"`
}
