// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { H256 } from '../interfaces/runtime';
import { AnyJson, AnyU8a, IU8a, Registry } from '../types';

import { isU8a, isUndefined, u8aToHex, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

/** @internal */
function decodeU8a (value?: any): Uint8Array {
  if (isU8a(value)) {
    return value;
  }

  return u8aToU8a(value);
}

/**
 * @name Raw
 * @description
 * A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
 * from other implementations where it will consume the full Uint8Array as passed to it.
 * As such it is meant to be subclassed where the wrapper takes care of the
 * actual lengths instead of used directly.
 * @noInheritDoc
 */
export default class Raw extends Uint8Array implements IU8a {
  public readonly registry: Registry;

  constructor (registry: Registry, value?: AnyU8a) {
    super(decodeU8a(value));

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
  public get hash (): H256 {
    return new Raw(this.registry, blake2AsU8a(this.toU8a(), 256));
  }

  /**
   * @description Returns true if the type wraps an empty/default all-0 value
   */
  public get isEmpty (): boolean {
    return !this.length || isUndefined(this.find((value): boolean => !!value));
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
  public eq (other?: any): boolean {
    if (other instanceof Uint8Array) {
      return (this.length === other.length) &&
        !this.some((value, index): boolean => value !== other[index]);
    }

    return this.eq(decodeU8a(other));
  }

  /**
   * @description Create a new subarray from the actual buffer. This is needed for compat reasons since a new Uint8Array gets returned here
   * @param begin The position to start at
   * @param end The position to end at
   */
  public subarray (begin: number, end?: number): Uint8Array {
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
    return this.toJSON();
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
}
