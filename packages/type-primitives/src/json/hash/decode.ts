// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Hash } from '../../base';
import { JsonHash } from '../types';

import hexToU8a from '@polkadot/util/hex/toU8a';

export default function hashDecode (value: JsonHash, bitLength: number = -1): Hash {
  return hexToU8a(value, bitLength);
}
