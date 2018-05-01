// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const u8aConcat = require('@polkadot/util/u8a/concat');
const u8aFromString = require('@polkadot/util/u8a/fromString');
const u8aToHex = require('@polkadot/util/u8a/toHex');
const xxhash = require('@polkadot/util-crypto/xxhash/asU8a128');

// FIXME: Use @polkadot/storage/key

module.exports = function storageKey (prefix: string, key?: Uint8Array | string = new Uint8Array([])): string {
  return u8aToHex(
    xxhash(
      u8aConcat(
        u8aFromString(prefix),
        key
      )
    )
  );
};
