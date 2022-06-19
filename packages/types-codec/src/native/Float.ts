// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyFloat, Codec, CodecClass, Registry } from '../types';

interface Options {
  bitLength?: 32 | 64;
}

export class Float extends Number implements Codec {
  readonly bitLength: 32 | 64;

  readonly encodedLength: number;

  readonly registry: Registry;

  constructor (registry: Registry, value?: AnyFloat, { bitLength = 32 }: Options = {}) {
    super(value);

    this.bitLength = bitLength;
    this.encodedLength = bitLength / 8;
    this.registry = registry;
  }

  public static with (bitLength: 32 | 64): CodecClass<Float> {
    return class extends Float {
      constructor (registry: Registry, value?: AnyFloat) {
        super(registry, value, { bitLength });
      }
    };
  }

  public toRawType (): string {
    return `f${this.bitLength}`;
  }
}
