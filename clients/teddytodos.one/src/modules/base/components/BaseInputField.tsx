import React from "react"

interface BaseInputFieldProps {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string
}

const BaseInputField: React.FC<BaseInputFieldProps> = ({
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
}) => {
    return (
        <div className="mb-4">
            <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                id={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
            />
        </div>
    )
}

export default BaseInputField
