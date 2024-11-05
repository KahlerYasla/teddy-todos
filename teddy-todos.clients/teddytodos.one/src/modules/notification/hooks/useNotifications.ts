import * as grpc from "@grpc/grpc-js"

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

export const useNotifications = create<NotificationState>((set) => ({
    notifications: [],
    getNotifications: async () => {
        const request = new GetNotificationsRequest()
        client.getNotifications(request, (error, response) => {
            if (error) {
                console.error("Error fetching notifications:", error)
                return
            }

            const notifications = response.getNotificationsList().map((n) => ({
                id: n.getId(),
                message: n.getMessage(),
                type: n.getType(),
                isRead: n.getIsread(),
                createdAt: new Date(),
            }))

            set({ notifications })
        })
    },
    setRead: (id) => {
        const request = new SetReadRequest()
        request.setId(id)
        request.setIsread(true)

        client.setRead(request, (error) => {
            if (error) {
                console.error("Error setting notification as read:", error)
                return
            }

            set((state) => ({
                notifications: state.notifications.map((n) =>
                    n.id === id ? { ...n, isRead: true } : n
                ),
            }))
        })
    },
}))
