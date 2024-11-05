// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_teddy_todos_auth_LoginRequest(arg) {
  if (!(arg instanceof user_pb.LoginRequest)) {
    throw new Error('Expected argument of type teddy.todos.auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_auth_LoginRequest(buffer_arg) {
  return user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_auth_LoginResponse(arg) {
  if (!(arg instanceof user_pb.LoginResponse)) {
    throw new Error('Expected argument of type teddy.todos.auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_auth_LoginResponse(buffer_arg) {
  return user_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// services: --------------------------------------------------------------------
var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/teddy.todos.auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginRequest,
    responseType: user_pb.LoginResponse,
    requestSerialize: serialize_teddy_todos_auth_LoginRequest,
    requestDeserialize: deserialize_teddy_todos_auth_LoginRequest,
    responseSerialize: serialize_teddy_todos_auth_LoginResponse,
    responseDeserialize: deserialize_teddy_todos_auth_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
