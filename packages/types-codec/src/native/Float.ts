// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyFloat, CodecClass, IFloat, Inspect, IU8a, Registry } from '../types/index.js';

import { floatToU8a, isHex, isU8a, u8aToFloat, u8aToHex, u8aToU8a } from '@polkadot/util';

interface Options {
  bitLength?: 32 | 64;
}

/**
 * @name Float
 * @description
 * A Codec wrapper for F32 & F64 values. You generally don't want to be using
 * f32/f64 in your runtime, operations on fixed points numbers are preferable. This class
 * was explicitly added since scale-codec has a flag that enables this and it is available
 * in some eth_* RPCs
 */
export class Float extends Number implements IFloat {
  readonly encodedLength: number;
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public initialU8aLength?: number;
  public isStorageFallback?: boolean;

  readonly #bitLength: 32 | 64;

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

  /**
   * @description Returns true if the type wraps an empty/default all-0 value
   */
  get isEmpty (): boolean {
    return this.valueOf() === 0;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return this.valueOf() === Number(other);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {
      outer: [this.toU8a()]
    };
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): string {
    return this.toString();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    // Not sure if this is actually a hex or a string value
    // (would need to check against RPCs to see the result here)
    return this.toHex();
  }

  /**
   * @description Returns the number representation (Same as valueOf)
   */
  public toNumber (): number {
    return this.valueOf();
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): number {
    return this.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `f${this.#bitLength}`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (_isBare?: boolean): Uint8Array {
    return floatToU8a(this, {
      bitLength: this.#bitLength
    });
  }
}
