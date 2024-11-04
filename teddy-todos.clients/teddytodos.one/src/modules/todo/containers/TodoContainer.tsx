interface TodoContainerProps {
    className?: string
}

const TodoContainer: React.FC<TodoContainerProps> = ({ className }) => {
    return (
        <div className={className}>
            <h2>TodoContainer</h2>
        </div>
    )
}

export default TodoContainer
