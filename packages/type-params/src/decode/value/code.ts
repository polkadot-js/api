// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import u8aToBn from '@polkadot/util/u8a/toBn';

export default function code (input: Uint8Array | null): Param$Decoded {
  if (input === null) {
    return {
      length: 0
    } as Param$Decoded;
  }

  const length = u8aToBn(input.subarray(0, 4), true).toNumber() + 4;
  const value = input.subarray(4, length);

  return {
    length,
    value
  };
}
