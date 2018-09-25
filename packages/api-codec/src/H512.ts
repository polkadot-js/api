// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecU8a from './codec/U8a';
import CodecU8aFixed from './codec/U8aFixed';

// Hash containing 512 bits (64 bytes), typically used for signatures
export default class H512 extends CodecU8aFixed {
  constructor (value?: CodecU8a | string | Uint8Array) {
    super(value, 512);
  }
}
