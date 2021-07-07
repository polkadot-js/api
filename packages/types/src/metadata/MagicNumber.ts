// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, Registry } from '../types';

import { assert } from '@polkadot/util';

import { U32 } from '../primitive';

export const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

export class MagicNumber extends U32 {
  constructor (registry: Registry, value?: AnyNumber) {
    super(registry, value);

    if (!this.isEmpty) {
      assert(this.eq(MAGIC_NUMBER), () => `MagicNumber mismatch: expected ${registry.createType('u32', MAGIC_NUMBER).toHex()}, found ${this.toHex()}`);
    }
  }
}
