// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Params, Param$Types } from '@polkadot/params/types';
import { FormatterFunction } from './types';

import addressDecode from '@polkadot/util-keyring/address/decode';
import bytesEncode from '@polkadot/primitives/json/bytes/encode';
import hashEncode from '@polkadot/primitives/json/hash/encode';

import format from './format';

const formatters = new Map<Param$Types, FormatterFunction>([
  // funnily named, goes from address -> u8a
  ['AccountId', addressDecode],
  ['Bytes', bytesEncode],
  ['Hash', hashEncode],
  ['StorageKey', () => null]
]);

export default function formatInputs (params: Params, values: Array<any>): Array<any> {
  const types = params.map(({ type }) => type);

  return format(formatters, types, values);
}
