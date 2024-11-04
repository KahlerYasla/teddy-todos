import * as grpc from "@grpc/grpc-js"
import { TodoServiceClient } from "../protos/generated/todo_grpc_pb"

interface TodoServiceClientInterface {}

const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") + "todo"
    const client = new TodoServiceClient(url, grpc.credentials.createInsecure())
    return client as TodoServiceClientInterface
})()

export default client
