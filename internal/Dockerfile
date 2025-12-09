# Use the Go 1.22.4 base image
FROM golang:1.22.4 AS builder

# Install system dependencies
RUN apt-get update && apt-get install -y \
    pkg-config \
    libaio1 \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Download Oracle Instant Client
RUN curl -L https://download.oracle.com/otn/instantclient/21/instantclient-basic-linux.aarch64.zip -o instantclient-basic-linux.aarch64.zip && \
    ls -lh instantclient-basic-linux.aarch64.zip

# Set up the Oracle Instant Client
COPY instantclient-basic-linux.aarch64.zip /opt/oracle/
RUN mkdir -p /opt/oracle && \
    unzip /opt/oracle/instantclient-basic-linux.aarch64.zip -d /opt/oracle && \
    rm /opt/oracle/instantclient-basic-linux.aarch64.zip && \
    ln -s /opt/oracle/instantclient_21_5 /opt/oracle/instantclient

# Set environment variables for the Oracle Instant Client
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient
ENV PATH=/opt/oracle/instantclient:$PATH

WORKDIR /app

# Copy go.mod and go.sum files first for better caching
COPY go.mod go.sum ./

# Download dependencies
RUN go mod tidy

# Copy the rest of the application files
COPY . .

# Build the application
RUN go build -o db-benchmark .

# Final stage: create a smaller image
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /app

COPY --from=builder /app/db-benchmark .

CMD ["./db-benchmark"]