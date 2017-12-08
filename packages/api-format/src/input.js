// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatInputType, InterfaceInputType } from '@polkadot/api-jsonrpc/types';
import type { FormatterFunction } from './types';

const accountIdToJson = require('@polkadot/primitives-json/accountId/toJson');
const h256ToJson = require('@polkadot/primitives-json/h256/toJson');
const hashToJson = require('@polkadot/primitives-json/hash/toJson');

const formatNoop = require('./noop');
const util = require('./util');

const formatters: { [FormatInputType]: FormatterFunction } = {
  'Address': accountIdToJson,
  'CallData': hashToJson,
  'H256': h256ToJson,
  'HeaderHash': h256ToJson,
  'String': formatNoop
};

module.exports = function formatInputs (inputs: Array<InterfaceInputType>, values: Array<any>): Array<any> {
  const types = inputs.map(({ type }) => type);

  return util.formatArray(formatters, types, values);
};
