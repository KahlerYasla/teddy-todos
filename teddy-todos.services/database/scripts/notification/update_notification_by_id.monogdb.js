const targetNotificationId = readInput("Enter the notification id: ")

db.notifications.updateOne(
    { _id: ObjectId(targetNotificationId) },
    {
        $set: {
            message: "Notification updated",
            timestamp: new Date(),
        },
    }
)
