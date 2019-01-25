// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../U32';

export const MAGIC_NUMBER = new U32(0x6174656d); // `meta`, reversed for LE encoding

export default class MagicNumber extends U32 {
  /**
   * @description true is the magic number is valid
   */
  get isValid (): boolean {
    return this.eq(MAGIC_NUMBER);
  }
}
