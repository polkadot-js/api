// Copyright 2017-2018 @polkadot/api authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Params } from '@polkadot/params/types';

const formatInputs = require('@polkadot/api-format/input');
const assert = require('@polkadot/util/assert');

module.exports = function createParams (params: Params, values: Array<mixed>): Array<mixed> {
  const required = params.filter(({ isOptional }) => !isOptional);
  const optionalText = params.length
    ? ` (${(params.length - required.length) || 'none'} optional)`
    : '';

  assert(values.length >= required.length && values.length <= params.length, `${params.length || 'no'} params expected${optionalText}, found ${values.length} instead`);

  return formatInputs(params, values);
};
