// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

export default function byte (input: Uint8Array | null | undefined): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: 0
    };
  }

  return {
    length: 1,
    value: input[0]
  };
}
