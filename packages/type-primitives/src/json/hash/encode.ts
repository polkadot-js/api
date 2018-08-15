// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Hash } from '../../base';
import { JsonHash } from '../types';

import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

export default function hashEncode (value: Hash | string, bitLength: number = -1): JsonHash {
  return u8aToHex(
    toU8a(value)
  );
}
