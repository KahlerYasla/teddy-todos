import { create } from "zustand"

// types
import Todo from "../types/todo"

// hooks
import { useUser } from "../../auth/hooks/useUser"

// grpc
import client from "../tools/todo.grpc.client"
import {
    GetTodosRequest,
    GetTodoRequest,
    PutTodoRequest,
    SetIsCompletedRequest,
} from "../protos/generated/todo_pb"

interface TodoState {
    todos: Todo[]
    getTodos: () => void
    getTodo: (id: string) => void
    putTodo: (todo: Todo) => void
    setIsCompleted: (id: string, isCompleted: boolean) => void
}

export const useTodo = create<TodoState>((set) => ({
    todos: [],
    getTodos: async () => {
        const request = new GetTodosRequest()
        const user = useUser((state) => state.user)
        request.setUserid(user?.id || "")
        client.getTodos(request, (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            set((): any => {
                const todos = response
                    .getTodosList()
                    .map((todo) => todo.toObject())
                return { todos }
            })
        })
    },
    getTodo: async (id: string) => {
        const request = new GetTodoRequest()
        request.setId(id)
        client.getTodo(request, (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            set((state): any => {
                const todo = response.getTodo()?.toObject()
                return { todos: [...state.todos, todo] }
            })
        })
    },
    putTodo: async (todo: Todo) => {
        const request = new PutTodoRequest()
        request.setDescription(todo.description)
        request.setIscompleted(todo.isCompleted)
        request.setDuedate(todo.dueDate.toISOString())
        request.setTitle(todo.title)

        client.putTodo(request, (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            set((state) => {
                const todos = state.todos.map((t) =>
                    t.id === todo.id ? todo : t
                )
                return { todos }
            })
        })
    },
    setIsCompleted: async (id: string, isCompleted: boolean) => {
        const request = new SetIsCompletedRequest()
        request.setId(id)
        request.setIscompleted(isCompleted)
        client.setIsCompleted(request, (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            set((state) => {
                const todos = state.todos.map((t) =>
                    t.id === id ? { ...t, isCompleted } : t
                )
                return { todos }
            })
        })
    },
}))
