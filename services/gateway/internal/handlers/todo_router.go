// FetchTodo handles the FetchTodo RPC
func (s *server) FetchTodo(ctx context.Context, req *pb.FetchTodoRequest) (*pb.FetchTodoResponse, error) {
	// Logic to fetch todo from the database or cache
	// For demonstration, we'll return a mock response
	return &pb.FetchTodoResponse{
		Id:          req.Id,
		Title:       "🧸 teddy-todos",
		Description: "This is a sample todo item.",
	}, nil
}
