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

const useHistory = create<HistoryState>((set) => ({
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
                set({ histories: response.getHistoriesList() })
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
                set({ histories: [response.getHistory()] })
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
                set({ histories: [response.getHistory()] })
            }
        )
    },
}))
