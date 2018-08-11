// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { JsonBnType } from '../types';

import hexFixLength from '@polkadot/util/hex/fixLength';
import bnToHex from '@polkadot/util/bn/toHex';

export default function bnEncode (value: BN | number, bitLength: number = -1): JsonBnType {
  return hexFixLength(
    bnToHex(value),
    bitLength
  );
}
