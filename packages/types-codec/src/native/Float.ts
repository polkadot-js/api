// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFloat, Codec, CodecClass, Registry } from '../types';

import { isHex, isU8a, u8aToU8a } from '@polkadot/util';

interface Options {
  bitLength?: 32 | 64;
}

export class Float extends Number implements Codec {
  readonly bitLength: 32 | 64;

  readonly encodedLength: number;

  readonly initialU8aLength?: number;

  readonly registry: Registry;

  constructor (registry: Registry, value?: AnyFloat, { bitLength = 32 }: Options = {}) {
    super(
      isU8a(value) || isHex(value)
        ? u8aToFloat(u8aToU8a(value), { bitLength })
        : value
    );

    this.bitLength = bitLength;
    this.encodedLength = bitLength / 8;
    this.initialU8aLength = this.encodedLength;
    this.registry = registry;
  }

  public static with (bitLength: 32 | 64): CodecClass<Float> {
    return class extends Float {
      constructor (registry: Registry, value?: AnyFloat) {
        super(registry, value, { bitLength });
      }
    };
  }

  public toNumber (): number {
    return 0 + this;
  }

  public toRawType (): string {
    return `f${this.bitLength}`;
  }

  public toU8a (): Uint8Array {
    return floatToU8a(this.toNumber(), { bitLength: this.bitLength });
  }
}
