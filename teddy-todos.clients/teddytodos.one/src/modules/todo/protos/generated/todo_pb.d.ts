// package: teddy.todos.todo
// file: todo.proto

import * as jspb from "google-protobuf";

export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): void;

  getDuedate(): string;
  setDuedate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    iscompleted: boolean,
    duedate: string,
  }
}

export class GetTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoRequest): GetTodoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoRequest;
  static deserializeBinaryFromReader(message: GetTodoRequest, reader: jspb.BinaryReader): GetTodoRequest;
}

export namespace GetTodoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTodoResponse extends jspb.Message {
  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoResponse): GetTodoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoResponse;
  static deserializeBinaryFromReader(message: GetTodoResponse, reader: jspb.BinaryReader): GetTodoResponse;
}

export namespace GetTodoResponse {
  export type AsObject = {
    todo?: Todo.AsObject,
  }
}

export class GetTodosRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosRequest;
  static deserializeBinaryFromReader(message: GetTodosRequest, reader: jspb.BinaryReader): GetTodosRequest;
}

export namespace GetTodosRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetTodosResponse extends jspb.Message {
  clearTodosList(): void;
  getTodosList(): Array<Todo>;
  setTodosList(value: Array<Todo>): void;
  addTodos(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosResponse): GetTodosResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosResponse;
  static deserializeBinaryFromReader(message: GetTodosResponse, reader: jspb.BinaryReader): GetTodosResponse;
}

export namespace GetTodosResponse {
  export type AsObject = {
    todosList: Array<Todo.AsObject>,
  }
}

export class PutTodoRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDuedate(): string;
  setDuedate(value: string): void;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoRequest): PutTodoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutTodoRequest;
  static deserializeBinaryFromReader(message: PutTodoRequest, reader: jspb.BinaryReader): PutTodoRequest;
}

export namespace PutTodoRequest {
  export type AsObject = {
    title: string,
    description: string,
    duedate: string,
    iscompleted: boolean,
  }
}

export class PutTodoResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoResponse): PutTodoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutTodoResponse;
  static deserializeBinaryFromReader(message: PutTodoResponse, reader: jspb.BinaryReader): PutTodoResponse;
}

export namespace PutTodoResponse {
  export type AsObject = {
    status: number,
  }
}

export class SetIsCompletedRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetIsCompletedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetIsCompletedRequest): SetIsCompletedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetIsCompletedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetIsCompletedRequest;
  static deserializeBinaryFromReader(message: SetIsCompletedRequest, reader: jspb.BinaryReader): SetIsCompletedRequest;
}

export namespace SetIsCompletedRequest {
  export type AsObject = {
    id: string,
    iscompleted: boolean,
  }
}

