import { useState } from "react"

interface FormState<T> {
    values: T
    errors: Partial<Record<keyof T, string>>
}

type Validator<T> = (values: T) => Partial<Record<keyof T, string>>

function useForm<T>(initialValues: T, validate: Validator<T>) {
    const [formState, setFormState] = useState<FormState<T>>({
        values: initialValues,
        errors: {},
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: value,
            },
        }))
    }

    const handleSubmit =
        (callback: () => void) => (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const errors = validate(formState.values)
            if (Object.keys(errors).length === 0) {
                callback()
            } else {
                setFormState((prevState) => ({
                    ...prevState,
                    errors,
                }))
            }
        }

    return {
        values: formState.values,
        errors: formState.errors,
        handleChange,
        handleSubmit,
    }
}

export default useForm
