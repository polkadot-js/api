// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../U32';
import { assert } from '@polkadot/util';

export const MAGIC_NUMBER = new U32(0x6174656d); // `meta`, reversed for LE encoding
export const MAGIC_ERROR = -61746;

export default class MagicNumber extends U32 {
  constructor (value?: any) {
    super(value);

    assert(this.eq(MAGIC_NUMBER), `MagicNumber: expected ${MAGIC_NUMBER.toHex()}, found ${this.toHex()}`, MAGIC_ERROR);
  }
}
