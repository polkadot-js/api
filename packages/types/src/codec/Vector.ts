// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { u8aConcat, u8aToU8a, u8aToHex } from '@polkadot/util';

import Compact, { DEFAULT_LENGTH_BITS } from './Compact';
import { Codec, Constructor } from '../types';

// This manages codec arrays. Intrernally it keeps track of the length (as decoded) and allows
// construction with the passed `Type` in the constructor. It aims to be an array-like structure,
// i.e. while it wraps an array, it provides a `length` property to get the actual length, `at(index)`
// to retrieve a specific item. Additionally the helper functions `map`, `filter`, `forEach` and
// `reduce` is exposed on the interface.
export default class Vector<
  T extends Codec
  > extends Array<T> implements Codec {
  private _Type: Constructor<T>;

  constructor (Type: Constructor<T>, value: Vector<any> | Uint8Array | string | Array<any> = [] as Array<any>) {
    super(
      ...Vector.decodeVector(Type, value)
    );

    this._Type = Type;
  }

  static decodeVector<T extends Codec> (Type: Constructor<T>, value: Vector<any> | Uint8Array | string | Array<any>): Array<T> {
    if (Array.isArray(value)) {
      return value.map((entry) =>
        entry instanceof Type
          ? entry
          : new Type(entry)
      );
    }

    const u8a = u8aToU8a(value);

    let [offset, _length] = Compact.decodeU8a(u8a, DEFAULT_LENGTH_BITS);
    const length = _length.toNumber();

    const result = [];

    for (let index = 0; index < length; index++) {
      const decoded = new Type(u8a.subarray(offset));

      result.push(decoded);
      offset += decoded.encodedLength;
    }

    return result;
  }

  static with<O extends Codec> (Type: Constructor<O>): Constructor<Vector<O>> {
    return class extends Vector<O> {
      constructor (value?: Array<any>) {
        super(Type, value);
      }
    };
  }

  get Type (): string {
    return this._Type.name;
  }

  get encodedLength (): number {
    return this.reduce((total, raw) => {
      return total + raw.encodedLength;
    }, Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length);
  }

  get (index: number): T {
    return this[index];
  }

  toArray (): Array<T> {
    return Array.from(this);
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.map((entry) =>
      entry.toJSON()
    );
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = this.map((entry) =>
      entry.toU8a(isBare)
    );

    return isBare
      ? u8aConcat(...encoded)
      : u8aConcat(
        Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS),
        ...encoded
      );
  }

  // Below are methods that we override. When we do a `new Vector(...).map()`,
  // we want it to return an Array

  filter (callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): Array<T> {
    return this.toArray().filter(callbackfn);
  }

  map<U> (callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): Array<U> {
    return this.toArray().map(callbackfn);
  }
}
