// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var history_pb = require('./history_pb.js');

function serialize_teddy_todos_history_GetHistoriesRequest(arg) {
  if (!(arg instanceof history_pb.GetHistoriesRequest)) {
    throw new Error('Expected argument of type teddy.todos.history.GetHistoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_history_GetHistoriesRequest(buffer_arg) {
  return history_pb.GetHistoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_history_GetHistoriesResponse(arg) {
  if (!(arg instanceof history_pb.GetHistoriesResponse)) {
    throw new Error('Expected argument of type teddy.todos.history.GetHistoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_history_GetHistoriesResponse(buffer_arg) {
  return history_pb.GetHistoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_history_GetHistoryRequest(arg) {
  if (!(arg instanceof history_pb.GetHistoryRequest)) {
    throw new Error('Expected argument of type teddy.todos.history.GetHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_history_GetHistoryRequest(buffer_arg) {
  return history_pb.GetHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_history_GetHistoryResponse(arg) {
  if (!(arg instanceof history_pb.GetHistoryResponse)) {
    throw new Error('Expected argument of type teddy.todos.history.GetHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_history_GetHistoryResponse(buffer_arg) {
  return history_pb.GetHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_history_PutHistoryRequest(arg) {
  if (!(arg instanceof history_pb.PutHistoryRequest)) {
    throw new Error('Expected argument of type teddy.todos.history.PutHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_history_PutHistoryRequest(buffer_arg) {
  return history_pb.PutHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_history_PutHistoryResponse(arg) {
  if (!(arg instanceof history_pb.PutHistoryResponse)) {
    throw new Error('Expected argument of type teddy.todos.history.PutHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_history_PutHistoryResponse(buffer_arg) {
  return history_pb.PutHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// services: --------------------------------------------------------------------
var HistoryServiceService = exports.HistoryServiceService = {
  getHistory: {
    path: '/teddy.todos.history.HistoryService/GetHistory',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.GetHistoryRequest,
    responseType: history_pb.GetHistoryResponse,
    requestSerialize: serialize_teddy_todos_history_GetHistoryRequest,
    requestDeserialize: deserialize_teddy_todos_history_GetHistoryRequest,
    responseSerialize: serialize_teddy_todos_history_GetHistoryResponse,
    responseDeserialize: deserialize_teddy_todos_history_GetHistoryResponse,
  },
  getHistories: {
    path: '/teddy.todos.history.HistoryService/GetHistories',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.GetHistoriesRequest,
    responseType: history_pb.GetHistoriesResponse,
    requestSerialize: serialize_teddy_todos_history_GetHistoriesRequest,
    requestDeserialize: deserialize_teddy_todos_history_GetHistoriesRequest,
    responseSerialize: serialize_teddy_todos_history_GetHistoriesResponse,
    responseDeserialize: deserialize_teddy_todos_history_GetHistoriesResponse,
  },
  putHistory: {
    path: '/teddy.todos.history.HistoryService/PutHistory',
    requestStream: false,
    responseStream: false,
    requestType: history_pb.PutHistoryRequest,
    responseType: history_pb.PutHistoryResponse,
    requestSerialize: serialize_teddy_todos_history_PutHistoryRequest,
    requestDeserialize: deserialize_teddy_todos_history_PutHistoryRequest,
    responseSerialize: serialize_teddy_todos_history_PutHistoryResponse,
    responseDeserialize: deserialize_teddy_todos_history_PutHistoryResponse,
  },
};

exports.HistoryServiceClient = grpc.makeGenericClientConstructor(HistoryServiceService);
