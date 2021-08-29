#!/bin/sh

# Build the maven project and package it
mvn package

# Extract the jar
mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# Build it with the dockerfile for x86
docker buildx build -t christopher876/splatter-backend:latest-amd64 --platform linux/amd64 .