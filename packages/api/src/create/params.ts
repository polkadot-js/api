// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Params } from '@polkadot/params/types';

import formatInputs from '@polkadot/api-format/input';
import assert from '@polkadot/util/assert';

export default function createParams (params: Params, values: Array<any>): Array<any> {
  const required = params.filter(({ isOptional }) => !isOptional);
  const optionalText = params.length
    ? ` (${(params.length - required.length) || 'none'} optional)`
    : '';

  assert(values.length >= required.length && values.length <= params.length, `${params.length || 'no'} params expected${optionalText}, found ${values.length} instead`);

  return formatInputs(params, values);
}
