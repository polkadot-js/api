// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { AnyJson, Codec, Registry } from '../types';

import { u8aConcat, u8aToHex } from '@polkadot/util';

import Compact from './Compact';
import Raw from './Raw';
import { compareArray } from './utils';

/**
 * @name AbstractArray
 * @description
 * This manages codec arrays. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 * @noInheritDoc
 */
export default abstract class AbstractArray<T extends Codec> extends Array<T> implements Codec {
  public readonly registry: Registry;

  protected constructor (registry: Registry, ...values: T[]) {
    super(...values);

    this.registry = registry;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.reduce((total, raw): number => {
      return total + raw.encodedLength;
    }, Compact.encodeU8a(this.length).length);
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
    return new Raw(this.registry, this.registry.hash(this.toU8a()));
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.length === 0;
  }

  /**
   * @description The length of the value
   */
  public get length (): number {
    // only included here since we ignore inherited docs
    return super.length;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareArray(this, other);
  }

  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  public toArray (): T[] {
    return Array.from(this);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return this.map((entry): AnyJson =>
      entry.toHuman(isExtended)
    );
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this.map((entry): AnyJson =>
      entry.toJSON()
    );
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  abstract toRawType (): string;

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    // Overwrite the default toString representation of Array.
    const data = this.map((entry): string =>
      entry.toString()
    );

    return `[${data.join(', ')}]`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = this.map((entry): Uint8Array =>
      entry.toU8a(isBare)
    );

    return isBare
      ? u8aConcat(...encoded)
      : u8aConcat(
        Compact.encodeU8a(this.length),
        ...encoded
      );
  }

  // Below are methods that we override. When we do a `new Vec(...).map()`,
  // we want it to return an Array. We only override the methods that return a
  // new instance.

  /**
   * @description Concatenates two arrays
   */
  public concat (other: T[]): T[] {
    return this.toArray().concat(other instanceof AbstractArray ? other.toArray() : other);
  }

  /**
   * @description Filters the array with the callback
   */
  public filter (callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: unknown): T[] {
    return this.toArray().filter(callbackfn, thisArg);
  }

  /**
   * @description Maps the array with the callback
   */
  public map<U> (callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: unknown): U[] {
    return this.toArray().map(callbackfn, thisArg);
  }

  /**
   * @description Checks if the array includes a specific value
   */
  public includes (check: unknown): boolean {
    return this.some((value: T) => value.eq(check));
  }
}
