package main

import (
	"context"
	"log"
	"net"

	// generated RPCs
	pb_hs "gateway/internal/protos/generated/history"
	pb_ns "gateway/internal/protos/generated/notification"
	pb_ts "gateway/internal/protos/generated/todo"
	pb_us "gateway/internal/protos/generated/user"

	// router services
	auth "gateway/internal/routers/auth"
	history "gateway/internal/routers/history"
	notification "gateway/internal/routers/notification"
	todo "gateway/internal/routers/todo"

	"github.com/confluentinc/confluent-kafka-go/kafka"
	"google.golang.org/grpc"
)

type server struct {
	pb_us.UnimplementedAuthServiceServer
	pb_hs.UnimplementedHistoryServiceServer
	pb_ns.UnimplementedNotificationServiceServer
	pb_ts.UnimplementedTodoServiceServer
}

func main() {
	lis, err := net.Listen("tcp", ":8500")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// create a new grpc server
	s := grpc.NewServer()

	// initialize kafka
	kafka.NewConsumer("localhost:9092", "groupID", []string{"topic"})

	// register the services
	pb_us.RegisterAuthServiceServer(s, &server{})
	pb_hs.RegisterHistoryServiceServer(s, &server{})
	pb_ns.RegisterNotificationServiceServer(s, &server{})
	pb_ts.RegisterTodoServiceServer(s, &server{})

	// start the grpc server
	log.Println("starting gateway on port 8080...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to start gateway Server: %v", err)
	}
}

// services: --------------------------------------------------------------------

func (s *server) Login(ctx context.Context, in *pb_us.LoginRequest) (*pb_us.LoginResponse, error) {
	return auth.Login(ctx, in)
}

// --------------------------------------------------------------------

func (s *server) GetHistory(ctx context.Context, in *pb_hs.GetHistoryRequest) (*pb_hs.GetHistoryResponse, error) {
	return history.GetHistory(ctx, in)
}

func (s *server) GetHistories(ctx context.Context, in *pb_hs.GetHistoriesRequest) (*pb_hs.GetHistoriesResponse, error) {
	return history.GetHistories(ctx, in)
}

func (s *server) PutHistory(ctx context.Context, in *pb_hs.PutHistoryRequest) (*pb_hs.PutHistoryResponse, error) {
	return history.PutHistory(ctx, in)
}

// --------------------------------------------------------------------

func (s *server) SubscribeToNotifications(in *pb_ns.SubscribeToNotificationsRequest, stream pb_ns.NotificationService_SubscribeToNotificationsServer) error {
	return notification.SubscribeToNotifications(in, stream)
}

func (s *server) GetNotifications(ctx context.Context, in *pb_ns.GetNotificationsRequest) (*pb_ns.GetNotificationsResponse, error) {
	return notification.GetNotifications(ctx, in)
}

func (s *server) SetRead(ctx context.Context, in *pb_ns.SetReadRequest) (*pb_ns.Notification, error) {
	return notification.SetRead(ctx, in)
}

// --------------------------------------------------------------------

func (s *server) GetTodos(ctx context.Context, in *pb_ts.GetTodosRequest) (*pb_ts.GetTodosResponse, error) {

	return todo.GetTodos(ctx, in)
}

func (s *server) GetTodo(ctx context.Context, in *pb_ts.GetTodoRequest) (*pb_ts.GetTodoResponse, error) {

	return todo.GetTodo(ctx, in)
}

func (s *server) PutTodo(ctx context.Context, in *pb_ts.PutTodoRequest) (*pb_ts.PutTodoResponse, error) {

	return todo.PutTodo(ctx, in)
}

func (s *server) SetIsCompleted(ctx context.Context, in *pb_ts.SetIsCompletedRequest) (*pb_ts.Todo, error) {
	return todo.SetIsCompleted(ctx, in)
}
