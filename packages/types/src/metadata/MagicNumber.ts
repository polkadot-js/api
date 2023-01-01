// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, Registry } from '@polkadot/types-codec/types';

import { U32 } from '@polkadot/types-codec';

export const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

export class MagicNumber extends U32 {
  constructor (registry: Registry, value?: AnyNumber) {
    super(registry, value);

    if (!this.isEmpty && !this.eq(MAGIC_NUMBER)) {
      throw new Error(`MagicNumber mismatch: expected ${registry.createTypeUnsafe('u32', [MAGIC_NUMBER]).toHex()}, found ${this.toHex()}`);
    }
  }
}
