// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceInputType } from '@polkadot/jsonrpc/types';

const bytesEncode = require('@polkadot/primitives-json/bytes/encode');
const hashEncode = require('@polkadot/primitives-json/hash/encode');

const format = require('./format');

const formatters = {
  'Bytes': bytesEncode,
  'H256': hashEncode,
  'HeaderHash': hashEncode
};

module.exports = function formatInputs (inputs: Array<InterfaceInputType>, values: Array<mixed>): Array<mixed> {
  const types = inputs.map(({ type }) => type);

  return format(formatters, types, values);
};
