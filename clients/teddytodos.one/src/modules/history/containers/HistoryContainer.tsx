import React from "react"
import { useHistory } from "../hooks/useHistory"

const HistoryContainer: React.FC = () => {
    const histories = useHistory((state) => state.histories)

    return (
        <div className="bg-gray-900 text-white min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4">History</h1>
            <div className="space-y-4">
                {histories.map((val) => (
                    <div
                        key={val.id}
                        className="bg-gray-800 p-4 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-semibold">{val.title}</h2>
                        <p className="text-gray-400">{val.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HistoryContainer
