// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatInputType, InterfaceInputType } from '@polkadot/jsonrpc/types';
import type { FormatterFunction } from '../types';

const formatAddress = require('./address');
const { formatH256 } = require('./hex');
const formatNoop = require('../noop');
const util = require('../util');

const formatters: { [FormatInputType]: FormatterFunction } = {
  'Address': formatAddress,
  'CallData': formatNoop,
  'H256': formatH256,
  'HeaderHash': formatH256,
  'String': formatNoop
};

module.exports = function format (inputs: Array<InterfaceInputType>, values: Array<any>): Array<any> {
  const types = inputs.map(({ type }) => type);

  return util.formatArray(formatters, types, values);
};
