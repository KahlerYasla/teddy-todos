import useForm from "../hooks/useForm"
import authFormValues from "../types/authFormValues"

interface AuthFormProps {
    className?: string
}

const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
    const { values, errors, handleChange, handleSubmit } =
        useForm<authFormValues>(
            {
                email: "",
                password: "",
            },
            (values) => {
                const errors: Partial<Record<keyof authFormValues, string>> = {}
                if (!values.email) {
                    errors.email = "Email is required"
                }
                if (!values.password) {
                    errors.password = "Password is required"
                }
                return errors
            }
        )

    const onSubmit = () => {
        // Handle successful submission here, e.g., API call
        console.log("Form submitted successfully with values:", values)
    }

    return (
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                )}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && (
                    <span style={{ color: "red" }}>{errors.password}</span>
                )}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AuthForm
