import React from "react"

const HistoryContainer: React.FC = () => {
    const historyItems = [
        { id: 1, title: "Task 1", description: "Completed task 1" },
        { id: 2, title: "Task 2", description: "Completed task 2" },
        { id: 3, title: "Task 3", description: "Completed task 3" },
    ]

    return (
        <div className="bg-gray-900 text-white min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4">History</h1>
            <div className="space-y-4">
                {historyItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-800 p-4 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HistoryContainer
