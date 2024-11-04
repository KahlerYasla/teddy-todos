// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var notification_pb = require('./notification_pb.js');

function serialize_teddy_todos_notification_GetNotificationsRequest(arg) {
  if (!(arg instanceof notification_pb.GetNotificationsRequest)) {
    throw new Error('Expected argument of type teddy.todos.notification.GetNotificationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_notification_GetNotificationsRequest(buffer_arg) {
  return notification_pb.GetNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_notification_GetNotificationsResponse(arg) {
  if (!(arg instanceof notification_pb.GetNotificationsResponse)) {
    throw new Error('Expected argument of type teddy.todos.notification.GetNotificationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_notification_GetNotificationsResponse(buffer_arg) {
  return notification_pb.GetNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_notification_Notification(arg) {
  if (!(arg instanceof notification_pb.Notification)) {
    throw new Error('Expected argument of type teddy.todos.notification.Notification');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_notification_Notification(buffer_arg) {
  return notification_pb.Notification.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_notification_NotificationRequest(arg) {
  if (!(arg instanceof notification_pb.NotificationRequest)) {
    throw new Error('Expected argument of type teddy.todos.notification.NotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_notification_NotificationRequest(buffer_arg) {
  return notification_pb.NotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_notification_NotificationResponse(arg) {
  if (!(arg instanceof notification_pb.NotificationResponse)) {
    throw new Error('Expected argument of type teddy.todos.notification.NotificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_notification_NotificationResponse(buffer_arg) {
  return notification_pb.NotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_teddy_todos_notification_SetReadRequest(arg) {
  if (!(arg instanceof notification_pb.SetReadRequest)) {
    throw new Error('Expected argument of type teddy.todos.notification.SetReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_teddy_todos_notification_SetReadRequest(buffer_arg) {
  return notification_pb.SetReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// services: --------------------------------------------------------------------
var NotificationServiceService = exports.NotificationServiceService = {
  subscribeToNotifications: {
    path: '/teddy.todos.notification.NotificationService/SubscribeToNotifications',
    requestStream: false,
    responseStream: true,
    requestType: notification_pb.NotificationRequest,
    responseType: notification_pb.NotificationResponse,
    requestSerialize: serialize_teddy_todos_notification_NotificationRequest,
    requestDeserialize: deserialize_teddy_todos_notification_NotificationRequest,
    responseSerialize: serialize_teddy_todos_notification_NotificationResponse,
    responseDeserialize: deserialize_teddy_todos_notification_NotificationResponse,
  },
  getNotifications: {
    path: '/teddy.todos.notification.NotificationService/GetNotifications',
    requestStream: false,
    responseStream: false,
    requestType: notification_pb.GetNotificationsRequest,
    responseType: notification_pb.GetNotificationsResponse,
    requestSerialize: serialize_teddy_todos_notification_GetNotificationsRequest,
    requestDeserialize: deserialize_teddy_todos_notification_GetNotificationsRequest,
    responseSerialize: serialize_teddy_todos_notification_GetNotificationsResponse,
    responseDeserialize: deserialize_teddy_todos_notification_GetNotificationsResponse,
  },
  setRead: {
    path: '/teddy.todos.notification.NotificationService/SetRead',
    requestStream: false,
    responseStream: false,
    requestType: notification_pb.SetReadRequest,
    responseType: notification_pb.Notification,
    requestSerialize: serialize_teddy_todos_notification_SetReadRequest,
    requestDeserialize: deserialize_teddy_todos_notification_SetReadRequest,
    responseSerialize: serialize_teddy_todos_notification_Notification,
    responseDeserialize: deserialize_teddy_todos_notification_Notification,
  },
};

exports.NotificationServiceClient = grpc.makeGenericClientConstructor(NotificationServiceService);
