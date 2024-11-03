const historyIdToDelete = readInput("Enter the history id to delete: ")

db.activities.deleteOne({ _id: ObjectId(historyIdToDelete) })
print("history deleted successfully")
