// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { JsonBnType } from '../types';

import BN from 'bn.js';
import hexFixLength from '@polkadot/util/hex/fixLength';
import isHex from '@polkadot/util/is/hex';
import hexToBn from '@polkadot/util/hex/toBn';

export default function bnDecode (value: JsonBnType, bitLength: number = -1): BN {
  if (isHex(value)) {
    return hexToBn(
      hexFixLength(value, bitLength)
    );
  }

  return new BN(value);
}
