// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, CodecRegistry } from '@polkadot/types-codec/types';

import { U32 } from '@polkadot/types-codec';
import { assert } from '@polkadot/util';

export const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

export class MagicNumber extends U32 {
  constructor (registry: CodecRegistry, value?: AnyNumber) {
    super(registry, value);

    if (!this.isEmpty) {
      assert(this.eq(MAGIC_NUMBER), () => `MagicNumber mismatch: expected ${registry.createTypeUnsafe('u32', [MAGIC_NUMBER]).toHex()}, found ${this.toHex()}`);
    }
  }
}
