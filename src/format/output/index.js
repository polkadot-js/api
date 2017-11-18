// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatOutputType, InterfaceOutputType } from '@polkadot/jsonrpc/src/types';
import type { FormatterFunction } from '../types';

const formatNoop = require('../noop');
const util = require('../util');

const formatters: { [FormatOutputType]: FormatterFunction } = {
  'Header': formatNoop,
  'OutData': formatNoop,
  'StorageData': formatNoop
};

module.exports = function format (output: InterfaceOutputType, value: any): any {
  return util.format(formatters, output.type, value);
};
