// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a, u8aConcat, u8aToHex, isHex, hexToU8a } from '@polkadot/util';

import { AnyNumber, AnyU8a, AnyString, Codec, Constructor } from '../types';

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
      // `currentIndex` is only used when we have a UintArray/U8a as value. It's
      // used to track at which index we are currently parsing in the U8a.
      let currentIndex = 0;

      return Types
        .map((Type) => {
          const raw = new Type(value.subarray(currentIndex));
          // Move the currentIndex forward
          currentIndex += raw.encodedLength;

          return raw;
        });
    } else if (isHex(value)) {
      return Tuple.decodeTuple(Types, hexToU8a(value));
    } else {
      return Types.map((Type, index) => {
        return new Type(value && value[index]);
      });
    }
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
    return this.toArray().map((entry) =>
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
      ...this.toArray().map((entry) =>
        entry.toU8a(isBare)
      )
    );
  }

  // Below are methods that we override. When we do a `new Vector(...).map()`,
  // we want it to return an Array. We only override the methods that return a
  // new instance.

  /**
   * @ignore
   */
  filter (callbackfn: (value: Codec, index: number, array: Array<Codec>) => any, thisArg?: any): Array<Codec> {
    throw new Error("Method 'filter' is not implemented on Tuple.");
  }

  /**
   * @ignore
   */
  map<U> (callbackfn: (value: Codec, index: number, array: Array<Codec>) => U, thisArg?: any): Array<U> {
    throw new Error("Method 'map' is not implemented on Tuple.");
  }
}
