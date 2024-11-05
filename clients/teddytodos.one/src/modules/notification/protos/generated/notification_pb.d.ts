import * as jspb from 'google-protobuf'



export class Notification extends jspb.Message {
  getId(): string;
  setId(value: string): Notification;

  getMessage(): string;
  setMessage(value: string): Notification;

  getType(): string;
  setType(value: string): Notification;

  getIsread(): boolean;
  setIsread(value: boolean): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    id: string,
    message: string,
    type: string,
    isread: boolean,
  }
}

export class SubscribeToNotificationsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): SubscribeToNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToNotificationsRequest): SubscribeToNotificationsRequest.AsObject;
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
  setUserid(value: string): GetNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsRequest): GetNotificationsRequest.AsObject;
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
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): GetNotificationsResponse;
  clearNotificationsList(): GetNotificationsResponse;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationsResponse): GetNotificationsResponse.AsObject;
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
  setId(value: string): SetReadRequest;

  getIsread(): boolean;
  setIsread(value: boolean): SetReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetReadRequest): SetReadRequest.AsObject;
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

