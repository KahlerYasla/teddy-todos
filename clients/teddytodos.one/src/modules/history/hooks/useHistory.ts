import * as grpc from "@grpc/grpc-js"

import { create } from "zustand"

// types
import { History } from "../types/history"

// grpc
import {
    GetHistoriesRequest,
    GetHistoriesResponse,
    GetHistoryRequest,
    GetHistoryResponse,
    PutHistoryRequest,
    PutHistoryResponse,
} from "../protos/generated/history_pb"
import client from "../tools/history.grpc.client"

interface HistoryState {
    histories: History[]
    getHistories: () => Promise<void>
    getHistory: (id: string) => Promise<void>
    putHistory: (history: History) => Promise<void>
}

export const useHistory = create<HistoryState>((set, get) => ({
    histories: [],
    getHistories: async () => {
        const request = new GetHistoriesRequest()
        client.getHistories(
            request,
            (
                error: grpc.ServiceError | null,
                response: GetHistoriesResponse
            ) => {
                if (error) {
                    console.error(error)
                    return
                }

                const histories = response.getHistoriesList().map(
                    (history) =>
                        ({
                            id: history.getId(),
                            title: history.getAction(),
                            description: history.getAction(),
                            action: history.getAction(),
                        } as History)
                )

                set({ histories: histories })
            }
        )
    },
    getHistory: async (id: string) => {
        const request = new GetHistoryRequest()
        request.setUserid(id)
        client.getHistory(
            request,
            (error: grpc.ServiceError | null, response: GetHistoryResponse) => {
                if (error) {
                    console.error(error)
                    return
                }

                const history = response.getHistory()!

                set({
                    histories: [
                        ...get().histories,
                        {
                            id: history.getId(),
                            title: history.getAction(),
                            description: history.getAction(),
                            action: history.getAction(),
                        },
                    ],
                })
            }
        )
    },
    putHistory: async (history: History) => {
        const request = new PutHistoryRequest()
        request.setUserid(history.id)
        request.setAction(history.action)
        client.putHistory(
            request,
            (error: grpc.ServiceError | null, response: PutHistoryResponse) => {
                if (error) {
                    console.error(error)
                    return
                }

                set({
                    histories: [
                        ...get().histories,
                        {
                            id: history.id,
                            title: history.action,
                            description: history.action,
                            action: history.action,
                        },
                    ],
                })
            }
        )
    },
}))
