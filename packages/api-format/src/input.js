// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Params } from '@polkadot/params/types';

const bytesEncode = require('@polkadot/primitives-json/bytes/encode');
const hashEncode = require('@polkadot/primitives-json/hash/encode');

const format = require('./format');

const formatters = {
  'Bytes': bytesEncode,
  'Hash': hashEncode
};

module.exports = function formatInputs (params: Params, values: Array<mixed>): Array<mixed> {
  const types = Object.keys(params).map((name) => params[name].type);

  return format(formatters, types, values);
};
