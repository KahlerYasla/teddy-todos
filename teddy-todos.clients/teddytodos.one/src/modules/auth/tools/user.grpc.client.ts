import * as grpc from "@grpc/grpc-js"
import { AuthServiceClient } from "../protos/generated/user_grpc_pb"

interface AuthServiceClientInterface {
    login: (request: any, callback: any) => any
}

const client = (() => {
    const url = process.env.REACT_APP_API_URL || "localhost:80500"
    const client = new AuthServiceClient(url, grpc.credentials.createInsecure())
    return client as AuthServiceClientInterface
})()

export default client
