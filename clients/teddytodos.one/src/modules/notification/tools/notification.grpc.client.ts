import { NotificationServiceClient } from "../protos/generated/NotificationServiceClientPb"
import * as services from "../protos/generated/notification_pb"

export const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") +
        "notification"

    const client = new NotificationServiceClient(url)
    return client
})()

export const stream = client.subscribeToNotifications(
    new services.SubscribeToNotificationsRequest()
)
