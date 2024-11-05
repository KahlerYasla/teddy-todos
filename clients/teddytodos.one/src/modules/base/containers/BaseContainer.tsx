interface BaseContainerProps {
    className?: string
}

export const BaseContainer: React.FC<BaseContainerProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1>BaseContainer</h1>
        </div>
    )
}
