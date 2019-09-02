#!/bin/bash

function copy_folder () {
  SRC="packages/$1/build"
  DST="../apps/node_modules/@polkadot/$2"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

copy_folder "api" "api"
copy_folder "api-contract" "api-contract"
copy_folder "api-derive" "api-derive"
copy_folder "api-metadata" "api-metadata"
copy_folder "rpc-core" "rpc-core"
copy_folder "rpc-provider" "rpc-provider"
copy_folder "type-jsonrpc" "jsonrpc"
copy_folder "types" "types"
