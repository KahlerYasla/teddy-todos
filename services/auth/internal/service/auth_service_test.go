// internal/service/auth_service_test.go
package service

import (
	"auth/internal/model"
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// MockUserRepository is a mock of UserRepository interface
type MockUserRepository struct {
	mock.Mock
}

// Implementing the methods of UserRepository interface

func (m *MockUserRepository) GetUserByUsername(ctx context.Context, username string) (*model.User, error) {
	args := m.Called(ctx, username)
	return args.Get(0).(*model.User), args.Error(1)
}

func (m *MockUserRepository) GetUserByID(ctx context.Context, userID string) (*model.User, error) {
	args := m.Called(ctx, userID)
	return args.Get(0).(*model.User), args.Error(1)
}

func (m *MockUserRepository) GetHashedPasswordByUserID(ctx context.Context, userID string) (string, error) {
	args := m.Called(ctx, userID)
	return args.String(0), args.Error(1)
}

// TestEvaluateLogin tests the EvaluateLogin function in AuthService
func TestEvaluateLogin(t *testing.T) {
	repo := new(MockUserRepository)
	service := NewAuthService(repo)
	ctx := context.Background()

	// Setup mock behavior
	user := &model.User{Username: "testuser", Password: "testpass"}
	repo.On("GetUserByUsername", ctx, "testuser").Return(user, nil)

	// Test correct login
	success, err := service.EvaluateLogin(ctx, "testuser", "testpass")
	assert.NoError(t, err)
	assert.True(t, success)

	// Test incorrect password
	success, err = service.EvaluateLogin(ctx, "testuser", "wrongpass")
	assert.Error(t, err)
	assert.False(t, success)
}

// TestGetUserByID tests the GetUserByID function in AuthService
func TestGetUserByID(t *testing.T) {
	repo := new(MockUserRepository)
	service := NewAuthService(repo)
	ctx := context.Background()

	// Setup mock behavior
	user := &model.User{ID: primitive.NewObjectID(), Username: "testuser"}
	repo.On("GetUserByID", ctx, "123").Return(user, nil)

	// Test GetUserByID
	result, err := service.GetUserByID(ctx, "123")
	assert.NoError(t, err)
	assert.Equal(t, user, result)
}
