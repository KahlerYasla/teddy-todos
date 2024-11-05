import React from "react"

interface HistoryCardProps {
    title: string
    description: string
    date: string
}

const HistoryCard: React.FC<HistoryCardProps> = ({
    title,
    description,
    date,
}) => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span className="text-sm text-gray-400">{date}</span>
            </div>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}

export default HistoryCard
