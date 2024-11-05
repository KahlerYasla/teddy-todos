import * as grpc from "@grpc/grpc-js"
import { HistoryServiceClient } from "../protos/generated/history_grpc_pb"
import * as services from "../protos/generated/history_pb"

interface HistoryServiceClientInterface {
    getHistory: (
        request: services.GetHistoryRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetHistoryResponse
        ) => void
    ) => grpc.ClientUnaryCall
    getHistories: (
        request: services.GetHistoriesRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.GetHistoriesResponse
        ) => void
    ) => grpc.ClientUnaryCall
    putHistory: (
        request: services.PutHistoryRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.PutHistoryResponse
        ) => void
    ) => grpc.ClientUnaryCall
}

const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") + "history"

    const client = new HistoryServiceClient(
        url,
        grpc.credentials.createInsecure()
    )
    return client as HistoryServiceClientInterface
})()

export default client
