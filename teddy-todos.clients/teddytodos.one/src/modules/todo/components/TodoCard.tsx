import Todo from "../types/todo"

interface TodoCardProps {
    className?: string
    todo: Todo
}

const TodoCard: React.FC<TodoCardProps> = ({ className, todo }) => {
    return (
        <div className={` ${className}`}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.isCompleted}</p>
            <p>{todo.dueDate.toString()}</p>
        </div>
    )
}

export default TodoCard
