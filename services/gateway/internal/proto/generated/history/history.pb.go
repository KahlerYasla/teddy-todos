// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        v5.28.3
// source: history.proto

package history

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// types: -----------------------------------------------------------------------
type History struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Title     string `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Action    string `protobuf:"bytes,3,opt,name=action,proto3" json:"action,omitempty"`
	CreatedAt string `protobuf:"bytes,4,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
}

func (x *History) Reset() {
	*x = History{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *History) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*History) ProtoMessage() {}

func (x *History) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use History.ProtoReflect.Descriptor instead.
func (*History) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{0}
}

func (x *History) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *History) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *History) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (x *History) GetCreatedAt() string {
	if x != nil {
		return x.CreatedAt
	}
	return ""
}

// messages: --------------------------------------------------------------------
type GetHistoryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (x *GetHistoryRequest) Reset() {
	*x = GetHistoryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHistoryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHistoryRequest) ProtoMessage() {}

func (x *GetHistoryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHistoryRequest.ProtoReflect.Descriptor instead.
func (*GetHistoryRequest) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{1}
}

func (x *GetHistoryRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type GetHistoryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	History *History `protobuf:"bytes,1,opt,name=history,proto3" json:"history,omitempty"`
}

func (x *GetHistoryResponse) Reset() {
	*x = GetHistoryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHistoryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHistoryResponse) ProtoMessage() {}

func (x *GetHistoryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHistoryResponse.ProtoReflect.Descriptor instead.
func (*GetHistoryResponse) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{2}
}

func (x *GetHistoryResponse) GetHistory() *History {
	if x != nil {
		return x.History
	}
	return nil
}

type GetHistoriesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (x *GetHistoriesRequest) Reset() {
	*x = GetHistoriesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHistoriesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHistoriesRequest) ProtoMessage() {}

func (x *GetHistoriesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHistoriesRequest.ProtoReflect.Descriptor instead.
func (*GetHistoriesRequest) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{3}
}

func (x *GetHistoriesRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type GetHistoriesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Histories []*History `protobuf:"bytes,5,rep,name=histories,proto3" json:"histories,omitempty"`
}

func (x *GetHistoriesResponse) Reset() {
	*x = GetHistoriesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHistoriesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHistoriesResponse) ProtoMessage() {}

func (x *GetHistoriesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHistoriesResponse.ProtoReflect.Descriptor instead.
func (*GetHistoriesResponse) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{4}
}

func (x *GetHistoriesResponse) GetHistories() []*History {
	if x != nil {
		return x.Histories
	}
	return nil
}

type PutHistoryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
	Action string `protobuf:"bytes,2,opt,name=action,proto3" json:"action,omitempty"`
}

func (x *PutHistoryRequest) Reset() {
	*x = PutHistoryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PutHistoryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PutHistoryRequest) ProtoMessage() {}

func (x *PutHistoryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PutHistoryRequest.ProtoReflect.Descriptor instead.
func (*PutHistoryRequest) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{5}
}

func (x *PutHistoryRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *PutHistoryRequest) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

type PutHistoryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	History *History `protobuf:"bytes,1,opt,name=history,proto3" json:"history,omitempty"`
}

func (x *PutHistoryResponse) Reset() {
	*x = PutHistoryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_history_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PutHistoryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PutHistoryResponse) ProtoMessage() {}

func (x *PutHistoryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_history_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PutHistoryResponse.ProtoReflect.Descriptor instead.
func (*PutHistoryResponse) Descriptor() ([]byte, []int) {
	return file_history_proto_rawDescGZIP(), []int{6}
}

func (x *PutHistoryResponse) GetHistory() *History {
	if x != nil {
		return x.History
	}
	return nil
}

var File_history_proto protoreflect.FileDescriptor

var file_history_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x07, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x22, 0x65, 0x0a, 0x07, 0x48, 0x69, 0x73, 0x74,
	0x6f, 0x72, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22,
	0x2b, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0x40, 0x0a, 0x12,
	0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x2a, 0x0a, 0x07, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x48, 0x69,
	0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x07, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x22, 0x2d,
	0x0a, 0x13, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0x46, 0x0a,
	0x14, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x09, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69,
	0x65, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x68, 0x69, 0x73, 0x74, 0x6f,
	0x72, 0x79, 0x2e, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x09, 0x68, 0x69, 0x73, 0x74,
	0x6f, 0x72, 0x69, 0x65, 0x73, 0x22, 0x43, 0x0a, 0x11, 0x50, 0x75, 0x74, 0x48, 0x69, 0x73, 0x74,
	0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x40, 0x0a, 0x12, 0x50, 0x75,
	0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x2a, 0x0a, 0x07, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x10, 0x2e, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x48, 0x69, 0x73, 0x74,
	0x6f, 0x72, 0x79, 0x52, 0x07, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x32, 0xeb, 0x01, 0x0a,
	0x0e, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x45, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x1a, 0x2e,
	0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f,
	0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x68, 0x69, 0x73, 0x74,
	0x6f, 0x72, 0x79, 0x2e, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4b, 0x0a, 0x0c, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73,
	0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x12, 0x1c, 0x2e, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79,
	0x2e, 0x47, 0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x47,
	0x65, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x0a, 0x50, 0x75, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72,
	0x79, 0x12, 0x1a, 0x2e, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x50, 0x75, 0x74, 0x48,
	0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e,
	0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x2e, 0x50, 0x75, 0x74, 0x48, 0x69, 0x73, 0x74, 0x6f,
	0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x0b, 0x5a, 0x09, 0x2e, 0x2f,
	0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_history_proto_rawDescOnce sync.Once
	file_history_proto_rawDescData = file_history_proto_rawDesc
)

func file_history_proto_rawDescGZIP() []byte {
	file_history_proto_rawDescOnce.Do(func() {
		file_history_proto_rawDescData = protoimpl.X.CompressGZIP(file_history_proto_rawDescData)
	})
	return file_history_proto_rawDescData
}

var file_history_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_history_proto_goTypes = []any{
	(*History)(nil),              // 0: history.History
	(*GetHistoryRequest)(nil),    // 1: history.GetHistoryRequest
	(*GetHistoryResponse)(nil),   // 2: history.GetHistoryResponse
	(*GetHistoriesRequest)(nil),  // 3: history.GetHistoriesRequest
	(*GetHistoriesResponse)(nil), // 4: history.GetHistoriesResponse
	(*PutHistoryRequest)(nil),    // 5: history.PutHistoryRequest
	(*PutHistoryResponse)(nil),   // 6: history.PutHistoryResponse
}
var file_history_proto_depIdxs = []int32{
	0, // 0: history.GetHistoryResponse.history:type_name -> history.History
	0, // 1: history.GetHistoriesResponse.histories:type_name -> history.History
	0, // 2: history.PutHistoryResponse.history:type_name -> history.History
	1, // 3: history.HistoryService.GetHistory:input_type -> history.GetHistoryRequest
	3, // 4: history.HistoryService.GetHistories:input_type -> history.GetHistoriesRequest
	5, // 5: history.HistoryService.PutHistory:input_type -> history.PutHistoryRequest
	2, // 6: history.HistoryService.GetHistory:output_type -> history.GetHistoryResponse
	4, // 7: history.HistoryService.GetHistories:output_type -> history.GetHistoriesResponse
	6, // 8: history.HistoryService.PutHistory:output_type -> history.PutHistoryResponse
	6, // [6:9] is the sub-list for method output_type
	3, // [3:6] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_history_proto_init() }
func file_history_proto_init() {
	if File_history_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_history_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*History); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_history_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*GetHistoryRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_history_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*GetHistoryResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_history_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*GetHistoriesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_history_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*GetHistoriesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_history_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*PutHistoryRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_history_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*PutHistoryResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_history_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_history_proto_goTypes,
		DependencyIndexes: file_history_proto_depIdxs,
		MessageInfos:      file_history_proto_msgTypes,
	}.Build()
	File_history_proto = out.File
	file_history_proto_rawDesc = nil
	file_history_proto_goTypes = nil
	file_history_proto_depIdxs = nil
}
