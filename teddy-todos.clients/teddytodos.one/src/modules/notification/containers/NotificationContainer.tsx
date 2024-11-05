import React from "react"

const NotificationContainer: React.FC = () => {
    return (
        <div className="fixed top-0 right-0 mt-4 mr-4 w-80">
            <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
                <p className="font-bold">Notification Title</p>
                <p className="mt-2">This is a notification message.</p>
            </div>
        </div>
    )
}

export default NotificationContainer
