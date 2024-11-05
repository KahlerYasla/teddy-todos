import * as grpc from "@grpc/grpc-js"
import { TodoServiceClient } from "../protos/generated/todo_grpc_pb"
import * as services from "../protos/generated/todo_pb"

interface TodoServiceClientInterface {
    getTodo: (
        request: services.GetTodoRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetTodoResponse
        ) => void
    ) => grpc.ClientUnaryCall
    getTodos: (
        request: services.GetTodosRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetTodosResponse
        ) => void
    ) => grpc.ClientUnaryCall
    createTodo: (
        request: services.GetTodosRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetTodosResponse
        ) => void
    ) => grpc.ClientUnaryCall
    putTodo: (
        request: services.PutTodoRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.PutTodoResponse
        ) => void
    ) => grpc.ClientUnaryCall
    setIsCompleted: (
        request: services.SetIsCompletedRequest,
        callback: (error: grpc.ServiceError | null, response: null) => void
    ) => grpc.ClientUnaryCall
}

const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") + "todo"
    const client = new TodoServiceClient(url, grpc.credentials.createInsecure())
    return client as TodoServiceClientInterface
})()

export default client
