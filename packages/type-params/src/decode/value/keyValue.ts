// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import u8aToBn from '@polkadot/util/u8a/toBn';

export default function bytes (input: Uint8Array | null): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: {
        key: new Uint8Array(),
        value: new Uint8Array()
      }
    };
  }

  const keyLength = u8aToBn(input.subarray(0, 4), true).toNumber();
  const key = input.subarray(4, keyLength + 4);
  const valLength = u8aToBn(input.subarray(keyLength + 4, keyLength + 8), true).toNumber();
  const length = valLength + keyLength + 8;
  const value = input.subarray(keyLength + 8, length);

  return {
    length,
    value: {
      key,
      value
    }
  };
}
