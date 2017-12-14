// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatInputType, InterfaceInputType } from '@polkadot/api-jsonrpc/types';
import type { FormatterFunction } from './types';

const accountIdEncode = require('@polkadot/primitives-json/accountId/encode');
const h256Encode = require('@polkadot/primitives-json/h256/encode');
const hashEncode = require('@polkadot/primitives-json/hash/encode');
const headerHashEncode = require('@polkadot/primitives-json/headerHash/encode');

const echo = require('./echo');
const util = require('./util');

const formatters: { [FormatInputType]: FormatterFunction } = {
  'Address': accountIdEncode,
  'CallData': hashEncode,
  'H256': h256Encode,
  'HeaderHash': headerHashEncode,
  'String': echo
};

module.exports = function formatInputs (inputs: Array<InterfaceInputType>, values: Array<any>): Array<any> {
  const types = inputs.map(({ type }) => type);

  return util.formatArray(formatters, types, values);
};
