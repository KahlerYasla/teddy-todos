import * as grpc from "@grpc/grpc-js"
import { HistoryServiceClient } from "../protos/generated/history_grpc_pb"

interface HistoryServiceClientInterface {}

const client = (() => {
    ;(process.env.REACT_APP_API_URL || "localhost:80500/api/") + "history"

    const client = new HistoryServiceClient(
        url,
        grpc.credentials.createInsecure()
    )
    return client as HistoryServiceClientInterface
})()

export default client
