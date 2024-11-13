package service

import (
	// internal
	"auth/internal/model"
	"auth/internal/repo"
	"auth/pkg/auth/token"

	"context"
	"errors"
)

type AuthService struct {
	userRepo repo.UserRepository
}

func NewAuthService(userRepo *repo.UserRepository) *AuthService {
	return &AuthService{
		userRepo: *userRepo,
	}
}

func (s *AuthService) GetUserByID(ctx context.Context, userId string) (*model.User, error) {
	user, err := s.userRepo.GetUserByID(ctx, userId)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (s *AuthService) EvaluateLogin(ctx context.Context, username, password string) (*model.User, error) {
	user, err := s.userRepo.GetUserByUsername(ctx, username)
	if err != nil {
		return nil, err
	}

	if user == nil {
		return nil, errors.New("user not found")
	}

	err = token.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return nil, errors.New("invalid password")
	}

	return user, nil
}
