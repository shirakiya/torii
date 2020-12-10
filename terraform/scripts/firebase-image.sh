#!/bin/sh
set -eux

# Ref. https://cloud.google.com/cloud-build/docs/deploying-builds/deploy-firebase

git clone --depth 1 https://github.com/GoogleCloudPlatform/cloud-builders-community.git
cd cloud-builders-community/firebase
gcloud builds submit .
cd ../..
rm -rf cloud-builders-community/
