// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceOutputType } from '@polkadot/api-jsonrpc/types';

const bnDecode = require('@polkadot/primitives-json/bn/decode');
const bytesDecode = require('@polkadot/primitives-json/bytes/decode');
const headerDecode = require('@polkadot/primitives-json/header/decode');
const isNull = require('@polkadot/util/is/null');
const isUndefined = require('@polkadot/util/is/undefined');
const blake2Asu8a256 = require('@polkadot/util-crypto/blake2/asU8a256');

const format = require('./format');

const formatters = {
  'BlockNumber': bnDecode,
  'Bytes': bytesDecode,
  'Header': headerDecode,
  'U64': bnDecode
};

module.exports = function formatOutput ({ type, withHash }: InterfaceOutputType, value?: mixed): ?mixed {
  if (isUndefined(value) || isNull(value)) {
    return value;
  }

  const decoded = format(formatters, [type], [value])[0];

  // flowlint-next-line sketchy-null-bool:off
  if (!withHash) {
    return decoded;
  }

  // flowlint-next-line unclear-type:off
  const hash = blake2Asu8a256(((value: any): Uint8Array));

  return {
    [type.toLowerCase()]: decoded,
    hash
  };
};
