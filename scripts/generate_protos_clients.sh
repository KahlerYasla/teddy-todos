#!/bin/bash

# Read proto directory and output directory from user
read -p "Enter module name: " MODULE_NAME
read -p "Enter proto file name (no extension): " PROTO_FILE_NAME

# Define paths
OUT_DIR=../clients/teddytodos.one/src/modules/$MODULE_NAME/protos/generated
PROTO_DIR=../clients/teddytodos.one/src/modules/$MODULE_NAME/protos
PROTO_FILE=$PROTO_DIR/$PROTO_FILE_NAME.proto
BIN_DIR=../clients/teddytodos.one/node_modules/.bin

# Check if output directory exists, if not, create it
mkdir -p $OUT_DIR

# Generate TypeScript definitions and gRPC client code
protoc -I $PROTO_DIR \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    $PROTO_FILE

if [ $? -ne 0 ]; then
    echo "🚩 error generating TypeScript definitions and gRPC client"
    exit 1
fi

echo "🍀 ts definitions & gRPC client generated in $OUT_DIR"
