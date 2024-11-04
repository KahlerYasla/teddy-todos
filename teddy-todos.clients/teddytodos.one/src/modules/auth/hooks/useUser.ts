import axios from "axios"
import { create } from "zustand"

interface useUserState {
    user: any
    setUser: (user: any) => void
    login: (email: string, password: string) => void
    logout: () => void
}

export const useUser = create<useUserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    login: async (email, password) => {
        try {
            const { data } = await axios.post("/api/auth/login", {
                email,
                password,
            })
            set({ user: data })
        } catch (error) {
            console.error("Failed to login:", error)
        }
    },
    logout: () => set({ user: null }),
}))
