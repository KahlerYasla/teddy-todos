import axios from "axios"
import { create } from "zustand"

interface TodoState {
    todos: Todo[]
    fetchTodos: () => Promise<void>
}

const useTodo = create<TodoState>((set) => ({
    todos: [],
    fetchTodos: async () => {
        const response = await axios.get<>(
            "https://jsonplaceholder.typicode.com/todos"
        )
        set({ todos: response.data })
    },
}))
