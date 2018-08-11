// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import BN from 'bn.js';
import u8aToBn from '@polkadot/util/u8a/toBn';

export default function bn (input: Uint8Array | null, bitLength: 32 | 64 | 128): Param$Decoded {
  const length = bitLength / 8;

  return {
    length,
    value: input
      ? u8aToBn(input.subarray(0, length), true)
      : new BN(0)
  };
}
