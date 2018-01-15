// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceOutputType } from '@polkadot/api-jsonrpc/types';

const headerDecode = require('@polkadot/primitives-json/header/decode');

const echo = require('./echo');
const util = require('./util');

const formatters = {
  'Header': headerDecode,
  'OutData': echo,
  'StorageData': echo
};

module.exports = function formatOutput (output: InterfaceOutputType, value: mixed): mixed {
  return util.format(formatters, output.type, value);
};
