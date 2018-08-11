// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import u8aToBn from '@polkadot/util/u8a/toBn';

export default function time (input: Uint8Array | null): Param$Decoded {
  return {
    length: 8,
    value: input
      ? new Date(
        u8aToBn(input.subarray(0, 8), true)
          .imuln(1000)
          .toNumber()
      )
      : new Date(0)
  };
}
