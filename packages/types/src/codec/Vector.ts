// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToU8a } from '@plugnet/util';

import Compact from './Compact';
import { Codec, Constructor } from '../types';
import { decodeU8a } from './utils';
import AbstractArray from './AbstractArray';

/**
 * @name Vector
 * @description
 * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
 * construction with the passed `Type` in the constructor. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 */
export default class Vector<T extends Codec> extends AbstractArray<T> {
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
    const [offset, _length] = Compact.decodeU8a(u8a);
    const length = _length.toNumber();

    return decodeU8a(u8a.subarray(offset), new Array(length).fill(Type)) as T[];
  }

  static with<O extends Codec> (Type: Constructor<O>): Constructor<Vector<O>> {
    return class extends Vector<O> {
      constructor (value?: Array<any>) {
        super(Type, value);
      }
    };
  }

  /**
   * @description The type for the items
   */
  get Type (): string {
    return this._Type.name;
  }

  /**
   * @description Finds the index of the value in the array
   */
  indexOf (_other?: any): number {
    // convert type first, this removes overhead from the eq
    const other = _other instanceof this._Type
      ? _other
      : new this._Type(_other);

    for (let i = 0; i < this.length; i++) {
      if (other.eq(this[i])) {
        return i;
      }
    }

    return -1;
  }
}
