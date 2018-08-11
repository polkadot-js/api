// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

export default function passThrough (input: Uint8Array): Param$Decoded {
  return {
    length: input.length,
    value: input
  };
}
