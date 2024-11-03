interface NotFoundProps {
    className?: string
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1>404</h1>
            <p>Not Found</p>
        </div>
    )
}

export default NotFound
