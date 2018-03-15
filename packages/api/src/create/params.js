// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceInputType } from '@polkadot/api-jsonrpc/types';

const formatInputs = require('@polkadot/api-format/input');
const assert = require('@polkadot/util/assert');

module.exports = function createParams (rpcName: string, params: Array<mixed>, inputs: Array<InterfaceInputType>): Array<mixed> {
  assert(inputs.length === params.length, `${rpcName}: ${inputs.length} params expected, found ${params.length} instead`);

  return formatInputs(inputs, params);
};
