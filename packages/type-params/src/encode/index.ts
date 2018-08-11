// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Params } from '../types';

import assert from '@polkadot/util/assert';
import u8aConcat from '@polkadot/util/u8a/concat';

import encodeParam from './param';

export default function encodeParams (params: Params, values: Array<any>, version: EncodingVersions): Uint8Array {
  assert(params.length === values.length, `Expected values to have ${params.length} items, found ${values.length} instead`);

  return u8aConcat.apply(null, params.map((param, index) =>
    encodeParam(param, values[index], version)
  ));
}
