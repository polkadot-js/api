// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import decodeHeader from '@polkadot/primitives/codec/header/decode';

export default function header (input: Uint8Array | null | undefined): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: input
    } as Param$Decoded;
  }

  // FIXME We don't have a way to determine the length atm
  const length = input.length;
  const value = decodeHeader(input);

  return {
    length,
    value
  };
}
