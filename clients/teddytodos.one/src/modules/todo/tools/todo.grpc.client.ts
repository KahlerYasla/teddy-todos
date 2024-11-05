import * as services from "../protos/generated/todo_pb"
import { TodoServiceClient } from "../protos/generated/TodoServiceClientPb"

export const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") + "todo"

    const client = new TodoServiceClient(url)
    return client
})()
