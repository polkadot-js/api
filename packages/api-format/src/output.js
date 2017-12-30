// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatOutputType, InterfaceOutputType } from '@polkadot/api-jsonrpc/types';
import type { FormatterFunction } from './types';

const headerDecode = require('@polkadot/primitives-json/header/decode');

const echo = require('./echo');
const util = require('./util');

const formatters: { [FormatOutputType]: FormatterFunction } = {
  'Header': headerDecode,
  'OutData': echo,
  'StorageData': echo
};

module.exports = function formatOutput (output: InterfaceOutputType, value: mixed): mixed {
  return util.format(formatters, output.type, value);
};
