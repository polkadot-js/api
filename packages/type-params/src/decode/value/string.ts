// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import u8aToBn from '@polkadot/util/u8a/toBn';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import isNull from '@polkadot/util/is/null';
import isUndefined from '@polkadot/util/is/undefined';

export default function string (input: Uint8Array | null | undefined): Param$Decoded {
  if (isUndefined(input) || isNull(input)) {
    return {
      length: 0,
      value: input
    } as Param$Decoded;
  }

  const length = u8aToBn(input.subarray(0, 4), true).toNumber();

  return {
    length: length + 4,
    value: u8aToUtf8(
      input.subarray(4, length + 4)
    )
  };
}
