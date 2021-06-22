# Minio Guide

Minio is a self-hosted S3-compatible media storage server.
It can be run as a Docker container, or as a Kubernetes service.

In this demo, it was chosen because in a production scenario we expect many of our users will be using S3 object storage (and hence, already familiar with those API's). Minio offers an easy way to provide an S3 backend for this demo without requiring our users to sign up for more services and accounts -- Just run the Docker Compose stack and it'll work.

You will notice in the code that we use AWS's `s3` driver and NPM library for instance. This is perfectly compatible with Minio.

You would simply keep the existing code, and replace the S3 bucket environment variable with the info for your actual S3 bucket (whether it be AWS, DO, Azure, or self-hosted like you see here). Any S3-compatible storage backend can be swapped in/out seamlessly.
