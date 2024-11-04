interface TodoCardProps {
    className?: string
}

const TodoCard: React.FC<TodoCardProps> = ({ className }) => {
    return (
        <div className={className}>
            <h2>TodoCard</h2>
        </div>
    )
}

export default TodoCard
