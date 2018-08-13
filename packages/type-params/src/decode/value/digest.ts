// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Digest } from '@polkadot/primitives/digest';
import { Param$Decoded } from '../../types';

import u8aToBn from '@polkadot/util/u8a/toBn';

import bytes from './bytes';

export default function digest (input: Uint8Array | null | undefined): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: input
    } as Param$Decoded;
  }

  const logLength = input
    ? u8aToBn(input.subarray(0, 4), true).toNumber()
    : 0;
  const value: Digest = {
    logs: []
  };

  let length = 4;

  for (let index = 0; index < logLength; index++) {
    const decoded = bytes(input.subarray(length));

    length += decoded.length;
    value.logs.push((decoded.value as Uint8Array));
  }

  return {
    length,
    value
  };
}
