// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecU8aFixed from './base/U8aFixed';

// Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and
// as a sane default for fixed-length hash representations.
export default class H256 extends CodecU8aFixed {
  constructor (value?: CodecU8aFixed | Uint8Array) {
    super(value, 256);
  }
}
