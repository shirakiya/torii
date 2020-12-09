#!/bin/sh
set -eux

echo -n $1 | gcloud kms encrypt --plaintext-file=- --ciphertext-file=- --location=global --keyring=main --key=app | base64
