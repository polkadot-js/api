// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyNumber, Registry } from '@polkadot/types/types';

import { assert } from '@polkadot/util';

import U32 from '@polkadot/types/primitive/U32';

export const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

export default class MagicNumber extends U32 {
  constructor (registry: Registry, value?: AnyNumber) {
    super(registry, value);

    if (!this.isEmpty) {
      const magic = registry.createType('u32', MAGIC_NUMBER);

      assert(this.eq(magic), `MagicNumber mismatch: expected ${magic.toHex()}, found ${this.toHex()}`);
    }
  }
}
