#!/bin/bash

# Set service name directly for testing (uncomment to read from input)
# read -p "Enter service name: " SERVICE_NAME
SERVICE_NAME="gateway"

PROTO_DIR="../services/$SERVICE_NAME/internal/protos"

# Check if the proto directory exists
if [[ ! -d "$PROTO_DIR" ]]; then
    echo "🚩 error: Directory $PROTO_DIR does not exist"
    exit 1
fi

# Generate gRPC code
protoc --go_out="$PROTO_DIR/generated" \
    --go-grpc_out="$PROTO_DIR/generated" \
    --proto_path="$PROTO_DIR"/ \
    "$PROTO_DIR"/*.proto

if [ $? -ne 0 ]; then
    echo "🚩 error generating gRPC server"
    exit 1
fi

echo "🍀 RPCs generated successfully"
