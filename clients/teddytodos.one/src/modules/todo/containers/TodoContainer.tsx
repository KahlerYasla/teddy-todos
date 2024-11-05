import TodoCard from "../components/TodoCard"
import { useTodo } from "../hooks/useTodo"

interface TodoContainerProps {
    className?: string
}

const TodoContainer: React.FC<TodoContainerProps> = ({ className }) => {
    const todoList = useTodo((state) => state.todos)

    return (
        <div className={` ${className}`}>
            {todoList.map((todo) => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoContainer
