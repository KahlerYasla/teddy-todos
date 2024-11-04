import React from "react"

interface BaseButtonProps {
    label: string
    onClick: () => void
    disabled?: boolean
}

const BaseButton: React.FC<BaseButtonProps> = ({
    label,
    onClick,
    disabled,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {label}
        </button>
    )
}

export default BaseButton
