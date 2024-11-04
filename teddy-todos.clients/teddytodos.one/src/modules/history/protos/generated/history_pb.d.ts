// package: teddy.todos.history
// file: history.proto

import * as jspb from "google-protobuf";

export class History extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): History.AsObject;
  static toObject(includeInstance: boolean, msg: History): History.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): History;
  static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
}

export namespace History {
  export type AsObject = {
    id: string,
    title: string,
    action: string,
    createdat: string,
  }
}

export class GetHistoryRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryRequest): GetHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryRequest;
  static deserializeBinaryFromReader(message: GetHistoryRequest, reader: jspb.BinaryReader): GetHistoryRequest;
}

export namespace GetHistoryRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetHistoryResponse extends jspb.Message {
  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): History | undefined;
  setHistory(value?: History): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryResponse): GetHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryResponse;
  static deserializeBinaryFromReader(message: GetHistoryResponse, reader: jspb.BinaryReader): GetHistoryResponse;
}

export namespace GetHistoryResponse {
  export type AsObject = {
    history?: History.AsObject,
  }
}

export class GetHistoriesRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoriesRequest): GetHistoriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoriesRequest;
  static deserializeBinaryFromReader(message: GetHistoriesRequest, reader: jspb.BinaryReader): GetHistoriesRequest;
}

export namespace GetHistoriesRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetHistoriesResponse extends jspb.Message {
  clearHistoriesList(): void;
  getHistoriesList(): Array<History>;
  setHistoriesList(value: Array<History>): void;
  addHistories(value?: History, index?: number): History;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoriesResponse): GetHistoriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoriesResponse;
  static deserializeBinaryFromReader(message: GetHistoriesResponse, reader: jspb.BinaryReader): GetHistoriesResponse;
}

export namespace GetHistoriesResponse {
  export type AsObject = {
    historiesList: Array<History.AsObject>,
  }
}

export class PutHistoryRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutHistoryRequest): PutHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutHistoryRequest;
  static deserializeBinaryFromReader(message: PutHistoryRequest, reader: jspb.BinaryReader): PutHistoryRequest;
}

export namespace PutHistoryRequest {
  export type AsObject = {
    userid: string,
    action: string,
  }
}

export class PutHistoryResponse extends jspb.Message {
  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): History | undefined;
  setHistory(value?: History): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutHistoryResponse): PutHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutHistoryResponse;
  static deserializeBinaryFromReader(message: PutHistoryResponse, reader: jspb.BinaryReader): PutHistoryResponse;
}

export namespace PutHistoryResponse {
  export type AsObject = {
    history?: History.AsObject,
  }
}

