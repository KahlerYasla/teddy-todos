// package: teddy.todos.notification
// file: notification.proto

import * as jspb from "google-protobuf";

export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getType(): string;
  setType(value: string): void;

  getIsread(): string;
  setIsread(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: string,
    message: string,
    type: string,
    isread: string,
  }
}

export class SubscribeToNotificationsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToNotificationsRequest): SubscribeToNotificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeToNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToNotificationsRequest;
  static deserializeBinaryFromReader(message: SubscribeToNotificationsRequest, reader: jspb.BinaryReader): SubscribeToNotificationsRequest;
}

export namespace SubscribeToNotificationsRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetNotificationsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsRequest): GetNotificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationsRequest;
  static deserializeBinaryFromReader(message: GetNotificationsRequest, reader: jspb.BinaryReader): GetNotificationsRequest;
}

export namespace GetNotificationsRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetNotificationsResponse extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): void;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsResponse): GetNotificationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationsResponse;
  static deserializeBinaryFromReader(message: GetNotificationsResponse, reader: jspb.BinaryReader): GetNotificationsResponse;
}

export namespace GetNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class SetReadRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIsread(): boolean;
  setIsread(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetReadRequest): SetReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReadRequest;
  static deserializeBinaryFromReader(message: SetReadRequest, reader: jspb.BinaryReader): SetReadRequest;
}

export namespace SetReadRequest {
  export type AsObject = {
    id: string,
    isread: boolean,
  }
}

