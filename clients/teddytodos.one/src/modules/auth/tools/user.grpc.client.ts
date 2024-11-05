import { AuthServiceClient } from "../protos/generated/UserServiceClientPb"

export const client = (() => {
    const url =
        (process.env.REACT_APP_API_URL || "localhost:80500/api/") + "auth"

    const client = new AuthServiceClient(url)
    return client
})()
