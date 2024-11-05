import * as grpc from "@grpc/grpc-js"
import { NotificationServiceClient } from "../protos/generated/notification_grpc_pb"
import * as services from "../protos/generated/notification_pb"

interface NotificationServiceClientInterface {
    subscribeToNotifications: (
        request: services.SubscribeToNotificationsRequest
    ) => grpc.ClientReadableStream<services.Notification>
    getNotifications: (
        request: services.GetNotificationsRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetNotificationsResponse
        ) => void
    ) => grpc.ClientUnaryCall
    setRead: (
        request: services.SetReadRequest,
        callback: (error: grpc.ServiceError | null, response: null) => void
    ) => grpc.ClientUnaryCall
}

export const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") +
        "notification"

    const client = new NotificationServiceClient(
        url,
        grpc.credentials.createInsecure()
    )
    return client as NotificationServiceClientInterface
})()

export const stream = client.subscribeToNotifications(
    new services.SubscribeToNotificationsRequest()
)
