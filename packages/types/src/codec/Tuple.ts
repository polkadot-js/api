// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a, u8aConcat, u8aToHex, isHex, hexToU8a } from '@polkadot/util';

import { AnyNumber, AnyU8a, AnyString, Codec, Constructor } from '../types';
import decodeU8a from './utils/decodeU8a';

/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous fixed-length array, where each element has its
 * own type. It extends the base JS `Array` object.
 * @noInheritDoc
 */
export default class Tuple<
  S extends Array<Constructor> = Array<Constructor>
  > extends Array<Codec> implements Codec {
  private _Types: S;

  constructor (Types: S, value: any) {
    super(
      ...Tuple.decodeTuple(Types, value)
    );
    this._Types = Types;
  }

  private static decodeTuple<
    S extends Array<Constructor>
  > (Types: S, value: AnyU8a | string | Array<AnyU8a | AnyNumber | AnyString | undefined | null>): Array<Codec> {
    if (isU8a(value)) {
      return decodeU8a(value, Types);
    } else if (isHex(value)) {
      return Tuple.decodeTuple(Types, hexToU8a(value));
    }

    return Types.map((Type, index) => {
      return new Type(value && value[index]);
    });
  }

  static with<
    S extends Array<Constructor>
  > (Types: S): Constructor<Tuple<S>> {
    return class extends Tuple<S> {
      constructor (value?: any) {
        super(Types, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return this.reduce((length, entry) => {
      return length += entry.encodedLength;
    }, 0);
  }

  /**
   * @description The types definition of the tuple
   */
  get Types (): Array<string> {
    return this._Types.map(({ name }) => name);
  }

  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  toArray (): Array<Codec> {
    return Array.from(this);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex () {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.map((entry) =>
      entry.toJSON()
    );
  }

  /**
   * @description Returns the string representation of the value
   */
  toString () {
    // Overwrite the default toString representation of Array.
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...this.map((entry) =>
        entry.toU8a(isBare)
      )
    );
  }

  // Below are methods that we override. When we do a `new Tuple(...).map()`,
  // we want it to throw an error. We only override the methods that return a
  // new instance.

  /**
   * @description Filters the array with the callback
   * @param callbackfn The filter function
   * @param thisArg The `this` object to apply the result to
   */
  filter (callbackfn: (value: Codec, index: number, array: Array<Codec>) => any, thisArg?: any): Array<Codec> {
    return this.toArray().filter(callbackfn, thisArg);
  }

  /**
   * @description Maps the array with the callback
   * @param callbackfn The mapping function
   * @param thisArg The `this` onject to apply the result to
   */
  map<U> (callbackfn: (value: Codec, index: number, array: Array<Codec>) => U, thisArg?: any): Array<U> {
    return this.toArray().map(callbackfn, thisArg);
  }
}
