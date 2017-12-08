// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatOutputType, InterfaceOutputType } from '@polkadot/api-jsonrpc/types';
import type { FormatterFunction } from './types';

const headerFromJson = require('@polkadot/primitives-json/header/fromJson');

const formatNoop = require('./noop');
const util = require('./util');

const formatters: { [FormatOutputType]: FormatterFunction } = {
  'Header': headerFromJson,
  'OutData': formatNoop,
  'StorageData': formatNoop
};

module.exports = function formatOutput (output: InterfaceOutputType, value: any): any {
  return util.format(formatters, output.type, value);
};
