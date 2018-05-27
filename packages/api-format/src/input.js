// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Params, Param$Types } from '@polkadot/params/types';

const addressDecode = require('@polkadot/util-keyring/address/decode');
const bytesEncode = require('@polkadot/primitives-json/bytes/encode');
const hashEncode = require('@polkadot/primitives-json/hash/encode');

const format = require('./format');

const formatters = {
  // funnily named, goes from address -> u8a
  'AccountId': addressDecode,
  'Bytes': bytesEncode,
  'Hash': hashEncode
};

// flowlint-next-line unclear-type:off
module.exports = function formatInputs (params: Params, values: Array<any>): Array<any> {
  const types: Array<Param$Types> = Object.keys(params).map((name) => params[name].type);

  return format(formatters, types, values);
};
