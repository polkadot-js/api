// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aConcat, u8aToHex } from '@polkadot/util';

import Compact from './Compact';
import { AnyJson, AnyJsonArray, Codec } from '../types';
import { compareArray } from './utils';

/**
 * @name AbstractArray
 * @description
 * This manages codec arrays. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 * @noInheritDoc
 */
export default abstract class AbstractArray<T extends Codec> extends Array<T> implements Codec {
  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.length === 0;
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
   * @description The length of the value
   */
  public get length (): number {
    // only included here since we ignore inherited docs
    return super.length;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
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
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJsonArray {
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

  // Below are methods that we override. When we do a `new Vector(...).map()`,
  // we want it to return an Array. We only override the methods that return a
  // new instance.

  /**
   * @description Filters the array with the callback
   * @param callbackfn The filter function
   * @param thisArg The `this` object to apply the result to
   */
  public filter (callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[] {
    return this.toArray().filter(callbackfn, thisArg);
  }

  /**
   * @description Maps the array with the callback
   * @param callbackfn The mapping function
   * @param thisArg The `this` onject to apply the result to
   */
  public map<U> (callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
    return this.toArray().map(callbackfn, thisArg);
  }
}
