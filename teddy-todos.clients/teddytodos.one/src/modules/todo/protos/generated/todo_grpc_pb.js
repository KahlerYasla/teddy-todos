// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_teddy_todos_todo_GetTodoRequest(arg) {
  if (!(arg instanceof todo_pb.GetTodoRequest)) {
    throw new Error('Expected argument of type teddy.todos.todo.GetTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_GetTodoRequest(buffer_arg) {
  return todo_pb.GetTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_GetTodoResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodoResponse)) {
    throw new Error('Expected argument of type teddy.todos.todo.GetTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_GetTodoResponse(buffer_arg) {
  return todo_pb.GetTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_GetTodosRequest(arg) {
  if (!(arg instanceof todo_pb.GetTodosRequest)) {
    throw new Error('Expected argument of type teddy.todos.todo.GetTodosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_GetTodosRequest(buffer_arg) {
  return todo_pb.GetTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_GetTodosResponse(arg) {
  if (!(arg instanceof todo_pb.GetTodosResponse)) {
    throw new Error('Expected argument of type teddy.todos.todo.GetTodosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_GetTodosResponse(buffer_arg) {
  return todo_pb.GetTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_PutTodoRequest(arg) {
  if (!(arg instanceof todo_pb.PutTodoRequest)) {
    throw new Error('Expected argument of type teddy.todos.todo.PutTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_PutTodoRequest(buffer_arg) {
  return todo_pb.PutTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_PutTodoResponse(arg) {
  if (!(arg instanceof todo_pb.PutTodoResponse)) {
    throw new Error('Expected argument of type teddy.todos.todo.PutTodoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_PutTodoResponse(buffer_arg) {
  return todo_pb.PutTodoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_SetIsCompletedRequest(arg) {
  if (!(arg instanceof todo_pb.SetIsCompletedRequest)) {
    throw new Error('Expected argument of type teddy.todos.todo.SetIsCompletedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_SetIsCompletedRequest(buffer_arg) {
  return todo_pb.SetIsCompletedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_todo_Todo(arg) {
  if (!(arg instanceof todo_pb.Todo)) {
    throw new Error('Expected argument of type teddy.todos.todo.Todo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_todo_Todo(buffer_arg) {
  return todo_pb.Todo.deserializeBinary(new Uint8Array(buffer_arg));
}


// services: --------------------------------------------------------------------
var TodoServiceService = exports.TodoServiceService = {
  getTodo: {
    path: '/teddy.todos.todo.TodoService/GetTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodoRequest,
    responseType: todo_pb.GetTodoResponse,
    requestSerialize: serialize_teddy_todos_todo_GetTodoRequest,
    requestDeserialize: deserialize_teddy_todos_todo_GetTodoRequest,
    responseSerialize: serialize_teddy_todos_todo_GetTodoResponse,
    responseDeserialize: deserialize_teddy_todos_todo_GetTodoResponse,
  },
  getTodos: {
    path: '/teddy.todos.todo.TodoService/GetTodos',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.GetTodosRequest,
    responseType: todo_pb.GetTodosResponse,
    requestSerialize: serialize_teddy_todos_todo_GetTodosRequest,
    requestDeserialize: deserialize_teddy_todos_todo_GetTodosRequest,
    responseSerialize: serialize_teddy_todos_todo_GetTodosResponse,
    responseDeserialize: deserialize_teddy_todos_todo_GetTodosResponse,
  },
  putTodo: {
    path: '/teddy.todos.todo.TodoService/PutTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.PutTodoRequest,
    responseType: todo_pb.PutTodoResponse,
    requestSerialize: serialize_teddy_todos_todo_PutTodoRequest,
    requestDeserialize: deserialize_teddy_todos_todo_PutTodoRequest,
    responseSerialize: serialize_teddy_todos_todo_PutTodoResponse,
    responseDeserialize: deserialize_teddy_todos_todo_PutTodoResponse,
  },
  setIsCompleted: {
    path: '/teddy.todos.todo.TodoService/SetIsCompleted',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.SetIsCompletedRequest,
    responseType: todo_pb.Todo,
    requestSerialize: serialize_teddy_todos_todo_SetIsCompletedRequest,
    requestDeserialize: deserialize_teddy_todos_todo_SetIsCompletedRequest,
    responseSerialize: serialize_teddy_todos_todo_Todo,
    responseDeserialize: deserialize_teddy_todos_todo_Todo,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
