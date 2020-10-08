#!/usr/bin/env bash
# Copyright 2017-2020 @polkadot/api authors & contributors
# SPDX-License-Identifier: Apache-2.0

function copy_folder () {
  SRC="packages/$1/build"
  DST="../test/js-test/node_modules/@polkadot/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

copy_folder "api"
copy_folder "api-contract"
copy_folder "api-derive"
copy_folder "metadata"
copy_folder "rpc-core"
copy_folder "rpc-provider"
copy_folder "types"
copy_folder "types-known"
copy_folder "typegen"
