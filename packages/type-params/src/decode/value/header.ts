// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import decodeHeader from '@polkadot/primitives/codec/header/decode';

export default function header (input: Uint8Array | null): Param$Decoded {
  // FIXME We don't have a way to determine the length atm
  const length = input
    ? input.length
    : 0;
  const value = decodeHeader(input);

  return {
    length,
    value
  };
}
