import * as grpc from "@grpc/grpc-js"
import { AuthServiceClient } from "../protos/generated/user_grpc_pb"
import * as services from "../protos/generated/user_pb"

interface AuthServiceClientInterface {
    login: (
        request: services.LoginRequest,
        callback: (
            error: grpc.ServiceError | null,
            response: services.LoginResponse
        ) => void
    ) => grpc.ClientUnaryCall
}

const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") + "user"

    const client = new AuthServiceClient(url, grpc.credentials.createInsecure())
    return client as AuthServiceClientInterface
})()

export default client
