// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { CodecHash, Hash } from '../interfaces/runtime';
import type { AnyJson, Codec, IVec, Registry } from '../types';

import { compactToU8a, u8aConcat, u8aToHex } from '@polkadot/util';

import { compareArray } from './utils/compareArray';

/**
 * @name AbstractArray
 * @description
 * This manages codec arrays. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 * @noInheritDoc
 */
export abstract class AbstractArray<T extends Codec> extends Array<T> implements IVec<T> {
  public readonly registry: Registry;

  public createdAtHash?: Hash;

  readonly initialU8aLength?: number;

  protected constructor (registry: Registry, values: T[], initialU8aLength?: number) {
    super(values.length);

    // explicitly set the values here - this removes the need for any extra allocations
    for (let i = 0; i < values.length; i++) {
      this[i] = values[i];
    }

    this.registry = registry;
    this.initialU8aLength = initialU8aLength;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    // We need to loop through all entries since they may have a variable length themselves,
    // e.g. when a Vec or Compact is contained withing, it has a variable length based on data
    let total = compactToU8a(this.length).length;

    for (let i = 0; i < this.length; i++) {
      total += this[i].encodedLength;
    }

    return total;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): CodecHash {
    return this.registry.hash(this.toU8a());
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
  public override get length (): number {
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
  public toHex (): HexString {
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
  public override toString (): string {
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
        compactToU8a(this.length),
        ...encoded
      );
  }

  // Below are methods that we override. When we do a `new Vec(...).map()`,
  // we want it to return an Array. We only override the methods that return a
  // new instance.

  /**
   * @description Concatenates two arrays
   */
  public override concat (other: T[]): T[] {
    return this.toArray().concat(other instanceof AbstractArray ? other.toArray() : other);
  }

  /**
   * @description Filters the array with the callback
   */
  public override filter (callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: unknown): T[] {
    return this.toArray().filter(callbackfn, thisArg);
  }

  /**
   * @description Maps the array with the callback
   */
  public override map<U> (callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: unknown): U[] {
    return this.toArray().map(callbackfn, thisArg);
  }

  /**
   * @description Checks if the array includes a specific value
   */
  public override includes (check: unknown): boolean {
    return this.some((value: T) => value.eq(check));
  }

  /**
   * @description Returns a slice of an array
   */
  public override slice (start?: number, end?: number): T[] {
    return this.toArray().slice(start, end);
  }
}
