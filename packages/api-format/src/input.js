// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceInputType } from '@polkadot/api-jsonrpc/types';
import type { Hash } from '@polkadot/primitives/base';

const accountIdEncode = require('@polkadot/primitives-json/accountId/encode');
const hashEncode = require('@polkadot/primitives-json/hash/encode');

const echo = require('./echo');
const util = require('./util');

const formatters = {
  'Address': accountIdEncode,
  'CallData': hashEncode,
  'H256': (value: Hash) => hashEncode(value, 256),
  'HeaderHash': hashEncode,
  'String': echo
};

module.exports = function formatInputs (inputs: Array<InterfaceInputType>, values: Array<mixed>): Array<mixed> {
  const types = inputs.map(({ type }) => type);

  return util.formatArray(formatters, types, values);
};
