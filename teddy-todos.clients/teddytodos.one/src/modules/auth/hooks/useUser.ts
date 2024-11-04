import * as grpc from '@grpc/grpc-js';

import { create } from "zustand"

// types
import { User } from "../types/user"

// grpc
import {LoginRequest,LoginResponse} from '../protos/generated/user_pb';
import client from '../tools/user.grpc.client'

interface useUserState {
    user: User | null
    setUser: (user: any) => void

    login: (request: LoginRequest) => void
    logout: () => void

    isCached: boolean
    cacheUser: () => void
    getUserFromCache: () => User | null
}

export const useUser = create<useUserState>((set, get) => ({
    user: null,
    setUser: (user) => set({ user }),
    login: async (request: LoginRequest) => {
        const response = await new Promise<LoginResponse>((resolve, reject) => {
            client.login(request, (
                err: grpc.ServiceError | null
                , response: LoginResponse) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(response)
                }
            })
        })

        const user = {
            ...get().user!,
            token: response.getToken(),
            role: response.getRole(),
        }

        set({ user })
        localStorage.setItem("user", JSON.stringify(user))
    },
    logout: () => set({ user: null }),
    cacheUser: () => {
        const user = localStorage.getItem("user")
        if (user) {
            set({ user: JSON.parse(user) })
        }
    },
    getUserFromCache: () => JSON.parse(localStorage.getItem("user") || "{}"),
    isCached: !!localStorage.getItem("user"),
}))
