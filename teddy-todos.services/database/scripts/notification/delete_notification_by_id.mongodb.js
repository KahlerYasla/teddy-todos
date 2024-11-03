const ObjectId = readInput("Enter the notification id to delete: ")

db.notifications.deleteOne({ _id: ObjectId(notificationIdToDelete) })
