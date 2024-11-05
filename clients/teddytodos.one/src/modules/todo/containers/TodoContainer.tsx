import TodoCard from "../components/TodoCard"
import { useTodo } from "../hooks/useTodo"

interface TodoContainerProps {
    className?: string
}

const TodoContainer: React.FC<TodoContainerProps> = ({ className }) => {
    const todoList = useTodo((state) => state.todos)

    return (
        <div className={` ${className}`}>
            <h1>Todo List</h1>
            {todoList.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoContainer
