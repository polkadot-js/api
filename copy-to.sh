#!/usr/bin/env bash

function copy_folder () {
  SRC="packages/$1/build"
  DST="../$2/node_modules/@polkadot/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

if [ $# -eq 2 ]
  then
    copy_folder $2 $1
else
  copy_folder "api" $1
  copy_folder "api-contract" $1
  copy_folder "api-derive" $1
  copy_folder "metadata" $1
  copy_folder "rpc-core" $1
  copy_folder "rpc-provider" $1
  copy_folder "types" $1
  copy_folder "types-known" $1
  copy_folder "typegen" $1
fi
