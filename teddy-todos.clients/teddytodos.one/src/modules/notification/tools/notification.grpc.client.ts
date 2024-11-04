import * as grpc from "@grpc/grpc-js"
import { NotificationServiceClient } from "../protos/generated/notification_grpc_pb"

interface NotificationServiceClientInterface {}

const client = (() => {
    const url = process.env.REACT_APP_API_URL || "localhost:80500/"
    const client = new NotificationServiceClient(
        url,
        grpc.credentials.createInsecure()
    )
    return client as NotificationServiceClientInterface
})()

export default client
