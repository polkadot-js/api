// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Param$Types } from '@polkadot/params/types';

const addressEncode = require('@polkadot/util-keyring/address/encode');
const bnDecode = require('@polkadot/primitives-json/bn/decode');
const bytesDecode = require('@polkadot/primitives-json/bytes/decode');
const headerDecode = require('@polkadot/primitives-json/header/decode');
const isNull = require('@polkadot/util/is/null');
const isUndefined = require('@polkadot/util/is/undefined');

const format = require('./format');

const formatters = {
  // publicKey -> address
  'AccountId': addressEncode,
  'BlockNumber': bnDecode,
  'Bytes': bytesDecode,
  'Header': headerDecode,
  'u64': bnDecode
};

module.exports = function formatOutput (type: Param$Types, value?: mixed): ?mixed {
  if (isUndefined(value) || isNull(value)) {
    return value;
  }

  return format(formatters, [type], [value])[0];
};
