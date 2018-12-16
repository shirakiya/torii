#!/bin/bash

set -u -e -o pipefail

export FLASK_ENV=test

XUNIT_DIR=dist/

mkdir -p $XUNIT_DIR

nosetests \
  -v \
  -s \
  --nologcapture \
  --with-xunit \
  --xunit-file=${XUNIT_DIR}/result.xml \
  $@
