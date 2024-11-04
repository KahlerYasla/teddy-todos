// package: teddy.todos.history
// file: history.proto

import * as jspb from "google-protobuf";

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
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

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
    id: string,
    userid: string,
    action: string,
    createdat: string,
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
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  clearHistoriesList(): void;
  getHistoriesList(): Array<GetHistoriesResponse>;
  setHistoriesList(value: Array<GetHistoriesResponse>): void;
  addHistories(value?: GetHistoriesResponse, index?: number): GetHistoriesResponse;

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
    id: string,
    userid: string,
    action: string,
    createdat: string,
    historiesList: Array<GetHistoriesResponse.AsObject>,
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
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getAction(): string;
  setAction(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

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
    id: string,
    userid: string,
    action: string,
    createdat: string,
  }
}

