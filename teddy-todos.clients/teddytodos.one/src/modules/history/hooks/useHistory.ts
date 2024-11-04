import axios from "axios"
import { create } from "zustand"

interface HistoryState {
    histories: History[]
    addHistory: (history: History) => void
}
