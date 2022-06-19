// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyFloat, CodecClass, IFloat, Inspect, IU8a, Registry } from '../types';

import { isHex, isU8a, u8aToHex, u8aToU8a } from '@polkadot/util';

interface Options {
  bitLength?: 32 | 64;
}

export class Float extends Number implements IFloat {
  readonly #bitLength: 32 | 64;

  readonly encodedLength: number;

  readonly initialU8aLength?: number;

  readonly registry: Registry;

  constructor (registry: Registry, value?: AnyFloat, { bitLength = 32 }: Options = {}) {
    super(
      isU8a(value) || isHex(value)
        ? value.length === 0
          ? 0
          : u8aToFloat(u8aToU8a(value), { bitLength })
        : (value || 0)
    );

    this.#bitLength = bitLength;
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

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  get isEmpty (): boolean {
    return Number(this) === 0;
  }

  public eq (other?: unknown): boolean {
    return Number(this) === Number(other);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {
      outer: [this.toU8a()]
    };
  }

  public toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  public toHuman (): string {
    return this.toString();
  }

  public toJSON (): string {
    return this.toHex();
  }

  public toNumber (): number {
    return Number(this);
  }

  public toRawType (): string {
    return `f${this.#bitLength}`;
  }

  public toU8a (): Uint8Array {
    return floatToU8a(Number(this), { bitLength: this.#bitLength });
  }
}
