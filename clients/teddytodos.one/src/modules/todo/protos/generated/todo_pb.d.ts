import * as jspb from 'google-protobuf'



export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): Todo;

  getTitle(): string;
  setTitle(value: string): Todo;

  getDescription(): string;
  setDescription(value: string): Todo;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): Todo;

  getDuedate(): string;
  setDuedate(value: string): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
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
  setId(value: string): GetTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoRequest): GetTodoRequest.AsObject;
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
  getTodo(): Todo | undefined;
  setTodo(value?: Todo): GetTodoResponse;
  hasTodo(): boolean;
  clearTodo(): GetTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoResponse): GetTodoResponse.AsObject;
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
  setUserid(value: string): GetTodosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
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
  getTodosList(): Array<Todo>;
  setTodosList(value: Array<Todo>): GetTodosResponse;
  clearTodosList(): GetTodosResponse;
  addTodos(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosResponse): GetTodosResponse.AsObject;
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
  setTitle(value: string): PutTodoRequest;

  getDescription(): string;
  setDescription(value: string): PutTodoRequest;

  getDuedate(): string;
  setDuedate(value: string): PutTodoRequest;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): PutTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoRequest): PutTodoRequest.AsObject;
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
  setStatus(value: number): PutTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutTodoResponse): PutTodoResponse.AsObject;
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
  setId(value: string): SetIsCompletedRequest;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): SetIsCompletedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetIsCompletedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetIsCompletedRequest): SetIsCompletedRequest.AsObject;
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

