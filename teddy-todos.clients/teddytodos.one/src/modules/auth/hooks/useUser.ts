import axios from "axios"
import { create } from "zustand"

// types
import { User } from "../types/user"

// dtos
import { UserRequest } from "../types/dtos/user.req"
import { UserResponse } from "../types/dtos/user.res"

interface useUserState {
    user: User | null
    setUser: (user: any) => void
    login: (request: UserRequest) => void
    logout: () => void
}

export const useUser = create<useUserState>((set, get) => ({
    user: null,
    setUser: (user) => set({ user }),
    login: async (request: UserRequest) => {
        try {
            const { data } = await axios.post<UserResponse>("/auth/login", {
                email: request.email,
                password: request.password,
            })
            set({
                user: {
                    ...get().user!,
                    token: data.token,
                    role: data.role,
                },
            })
        } catch (error) {
            console.error("Failed to login:", error)
        }
    },
    logout: () => set({ user: null }),
}))
