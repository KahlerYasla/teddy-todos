type Notification = {
    id: string
    message: string
    type: NotificationType
    isRead: boolean
    createdAt: Date
}

export default Notification

export enum NotificationType {
    REMINDER = "reminder",
    ERROR = "error",
    SUCCESS = "success",
}
