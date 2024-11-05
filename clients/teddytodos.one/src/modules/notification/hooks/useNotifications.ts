import { create } from "zustand"

// types
import Notification from "../types/notification"

// grpc
import {
    GetNotificationsRequest,
    GetNotificationsResponse,
    SetReadRequest,
} from "../protos/generated/notification_pb"

import { stream, client } from "../tools/notification.grpc.client"

stream.on("data", (notification) => {
    // Handle each notification received from the server
    console.log(notification.getMessage())
    // Update React state or Redux store with the new notification
})

stream.on("error", (err) => {
    console.error("Stream error:", err)
    // Reconnect logic can be implemented here if necessary
})

stream.on("end", () => {
    console.log("Stream ended")
    // Optional reconnection or clean-up logic
})

interface NotificationState {
    notifications: Notification[]
    getNotifications: () => void
    setRead: (id: string) => void
}

export const useNotifications = create<NotificationState>((set, get) => ({
    notifications: [],
    getNotifications: () => {
        const request = new GetNotificationsRequest()
        client.getNotifications(
            request,
            {},
            (err, response: GetNotificationsResponse) => {
                if (err) {
                    console.error("Error getting notifications:", err)
                    return
                }

                const notifications = response
                    .getNotificationsList()
                    .map((notification) => {
                        return {
                            id: notification.getId(),
                            message: notification.getMessage(),
                            createdAt: new Date(),
                            isRead: notification.getIsread(),
                            type: notification.getType(),
                        } as Notification
                    })

                set({ notifications })
            }
        )
    },
    setRead: (id) => {
        const request = new SetReadRequest()
        request.setId(id)

        client.setRead(request, {}, (err, response) => {
            if (err) {
                console.error("Error setting notification as read:", err)
                return
            }

            console.log("Notification set as read:", response.toObject())
        })
    },
}))
