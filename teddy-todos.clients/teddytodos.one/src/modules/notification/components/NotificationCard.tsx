import React from "react"

interface NotificationCardProps {
    title: string
    message: string
    type: "success" | "error" | "info"
}

const NotificationCard: React.FC<NotificationCardProps> = ({
    title,
    message,
    type,
}) => {
    const getTypeStyles = () => {
        switch (type) {
            case "success":
                return "bg-green-100 border-green-500 text-green-700"
            case "error":
                return "bg-red-100 border-red-500 text-red-700"
            case "info":
                return "bg-blue-100 border-blue-500 text-blue-700"
            default:
                return ""
        }
    }

    return (
        <div className={`border-l-4 p-4 ${getTypeStyles()}`}>
            <div className="font-bold">{title}</div>
            <div>{message}</div>
        </div>
    )
}

export default NotificationCard
