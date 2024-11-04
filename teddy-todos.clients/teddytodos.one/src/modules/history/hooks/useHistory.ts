import * as grpc from '@grpc/grpc-js';

import { create } from "zustand"

// types
import { History } from "../types/history"

// grpc
import { GetHistoriesRequest, GetHistoriesResponse,GetHistoryRequest,GetHistoryResponse,PutHistoryRequest,PutHistoryResponse } from '../protos/generated/history_pb';
import client from '../tools/history.grpc.client';


interface HistoryState {
    histories: History[]
    
}
