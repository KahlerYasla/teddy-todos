#!/bin/bash

# Read proto directory and output directory from user
read -p "Enter module name: " MODULE_NAME
read -p "Enter proto file name (no extension): " PROTO_FILE_NAME

# Define paths
OUT_DIR=../src/modules/$MODULE_NAME/protos/generated
PROTO_DIR=../src/modules/$MODULE_NAME/protos
PROTO_FILE=$PROTO_DIR/$PROTO_FILE_NAME.proto
BIN_DIR=../node_modules/.bin

# Check if output directory exists, if not, create it
mkdir -p $OUT_DIR

# Generate TypeScript definitions and gRPC client code
npx protoc --proto_path=$PROTO_DIR \
    --plugin=protoc-gen-ts=$BIN_DIR/protoc-gen-ts \
    --ts_out=$OUT_DIR \
    --grpc_out=$OUT_DIR \
    --plugin=protoc-gen-grpc=$BIN_DIR/grpc_tools_node_protoc_plugin \
    $PROTO_FILE

if [ $? -ne 0 ]; then
    echo "🚩 error generating TypeScript definitions and gRPC client"
    exit 1
fi

echo "🍀 ts definitions & gRPC client generated in $OUT_DIR"
