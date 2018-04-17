// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceInputType } from '@polkadot/api-jsonrpc/types';

const formatInputs = require('@polkadot/api-format/input');
const assert = require('@polkadot/util/assert');

module.exports = function createParams (params: Array<mixed>, inputs: Array<InterfaceInputType>): Array<mixed> {
  const required = inputs.filter(({ isOptional }) => !isOptional);
  const optionalText = inputs.length
    ? ` (${(inputs.length - required.length) || 'none'} optional)`
    : '';

  assert(params.length >= required.length && params.length <= inputs.length, `${inputs.length || 'no'} params expected${optionalText}, found ${params.length} instead`);

  return formatInputs(inputs, params);
};
