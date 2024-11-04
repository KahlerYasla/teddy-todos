import * as grpc from "@grpc/grpc-js"
import { NotificationServiceClient } from "../protos/generated/notification_grpc_pb"
import * as services from "../protos/generated/notification_pb"

interface NotificationServiceClientInterface {
    getNotification: (
        request: services.GetNotificationRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetNotificationResponse
        ) => void
    ) => grpc.ClientUnaryCall
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

const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") +
        "notification"

    const client = new NotificationServiceClient(
        url,
        grpc.credentials.createInsecure()
    )
    return client as NotificationServiceClientInterface
})()

export default client
