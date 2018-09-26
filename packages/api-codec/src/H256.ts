// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import U8aFixed from './codec/U8aFixed';

// Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and
// as a sane default for fixed-length hash representations.
export default class H256 extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 256);
  }
}
