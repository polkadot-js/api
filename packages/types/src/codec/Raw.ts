// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecHash, Hash } from '../interfaces/runtime';
import type { AnyJson, AnyU8a, IU8a, Registry } from '../types';

import { assert, isAscii, isUndefined, isUtf8, u8aToHex, u8aToString, u8aToU8a } from '@polkadot/util';

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
  public readonly registry: Registry;

  public createdAtHash?: Hash;

  constructor (registry: Registry, value?: AnyU8a) {
    super(u8aToU8a(value));

    this.registry = registry;
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
  public get hash (): CodecHash {
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
  public get isEmpty (): boolean {
    return !this.length || isUndefined(this.find((value) => !!value));
  }

  /**
   * @description Returns true if the wrapped value contains only utf8 characters
   */
  public get isUtf8 (): boolean {
    return isUtf8(this);
  }

  /**
   * @description The length of the value
   */
  public get length (): number {
    // only included here since we ignore inherited docs
    return super.length;
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
        !this.some((value, index) => value !== other[index]);
    }

    return this.eq(u8aToU8a(other as any));
  }

  /**
   * @description Create a new slice from the actual buffer. (compat)
   * @param start The position to start at
   * @param end The position to end at
   */
  public slice (start?: number, end?: number): Uint8Array {
    // Like subarray below, we have to follow this approach since we are extending the TypeArray.
    // This happens especially when it comes to further extensions, the length may be an override
    return Uint8Array.from(this).slice(start, end);
  }

  /**
   * @description Create a new subarray from the actual buffer. (compat)
   * @param begin The position to start at
   * @param end The position to end at
   */
  public subarray (begin?: number, end?: number): Uint8Array {
    return Uint8Array.from(this).subarray(begin, end);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this);
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): AnyJson {
    return this.isAscii
      ? this.toUtf8()
      : this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    return this.toHex();
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
  public toString (): string {
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
    assert(this.isUtf8, 'The character sequence is not a valid Utf8 string');

    return u8aToString(this);
  }
}
