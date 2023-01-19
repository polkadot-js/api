// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, AnyU8a, Inspect, IU8a, Registry } from '../types';

import { isAscii, isUndefined, isUtf8, u8aToHex, u8aToString, u8aToU8a } from '@polkadot/util';

import { warnGet } from '../utils';

/**
 * @name Raw
 * @description
 * A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
 * from other implementations where it will consume the full Uint8Array as passed to it.
 * As such it is meant to be subclassed where the wrapper takes care of the
 * actual lengths instead of used directly.
 * @noInheritDoc
 */
export class Raw extends Uint8Array implements IU8a {
  readonly registry: Registry;

  public $createdAtHash?: IU8a;
  public $initialU8aLength?: number;
  public $isStorageFallback?: boolean;

  /**
   * @description This ensures that operators such as clice, filter, map, etc. return
   * new Array instances (without this we need to apply overrides)
   */
  static get [Symbol.species] (): typeof Uint8Array {
    return Uint8Array;
  }

  constructor (registry: Registry, value?: AnyU8a, initialU8aLength?: number) {
    super(u8aToU8a(value));

    this.registry = registry;
    this.$initialU8aLength = initialU8aLength;
  }

  /** @deprecated Use $createdAtHash instead. This getter will be removed in a future version. */
  public get createdAtHash (): IU8a | undefined {
    return warnGet(this, 'createdAtHash');
  }

  /** @deprecated Use $initialU8aLength instead. This getter will be removed in a future version. */
  public get initialU8aLength (): number | undefined {
    return warnGet(this, 'initialU8aLength');
  }

  /** @deprecated Use $isEmpty instead. This getter will be removed in a future version */
  public get isEmpty (): boolean {
    return warnGet(this, 'isEmpty');
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.length;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Returns true if the wrapped value contains only ASCII printable characters
   */
  public get isAscii (): boolean {
    return isAscii(this);
  }

  /**
   * @description Returns true if the type wraps an empty/default all-0 value
   */
  public get $isEmpty (): boolean {
    return !this.length || isUndefined(this.find((b) => !!b));
  }

  /**
   * @description Returns true if the wrapped value contains only utf8 characters
   */
  public get isUtf8 (): boolean {
    return isUtf8(this);
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): number {
    return this.length * 8;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    if (other instanceof Uint8Array) {
      return (this.length === other.length) &&
        !this.some((b, index) => b !== other[index]);
    }

    return this.eq(u8aToU8a(other as string));
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspectU8a (): Inspect {
    return {
      outer: [this.toU8a()]
    };
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return u8aToHex(this);
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): AnyJson {
    return this.toPrimitive();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    return this.toHex();
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): AnyJson {
    if (this.isAscii) {
      const text = this.toUtf8();

      // ensure we didn't end up with multibyte codepoints
      if (isAscii(text)) {
        return text;
      }
    }

    return this.toJSON();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Raw';
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return this.toHex();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return Uint8Array.from(this);
  }

  /**
   * @description Returns the wrapped data as a UTF-8 string
   */
  public toUtf8 (): string {
    if (!this.isUtf8) {
      throw new Error('The character sequence is not a valid Utf8 string');
    }

    return u8aToString(this);
  }
}
