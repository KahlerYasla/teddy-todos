import AuthForm from "../components/AuthForm"

interface AuthContainerProps {
    className?: string
}

const AuthContainer: React.FC<AuthContainerProps> = ({ className }) => {
    return (
        <div className={className}>
            <AuthForm />
        </div>
    )
}

export default AuthContainer
