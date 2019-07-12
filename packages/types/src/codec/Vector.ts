// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToU8a, assert } from '@polkadot/util';

import Compact from './Compact';
import { Codec, Constructor } from '../types';
import { decodeU8a } from './utils';
import AbstractArray from './AbstractArray';

const MAX_LENGTH = 32768;

/**
 * @name Vector
 * @description
 * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
 * construction with the passed `Type` in the constructor. It is an extension to Array, providing
 * specific encoding/decoding on top of the base type.
 */
export default class Vector<T extends Codec> extends AbstractArray<T> {
  private _Type: Constructor<T>;

  public constructor (Type: Constructor<T>, value: Vector<any> | Uint8Array | string | any[] = [] as any[]) {
    super(
      ...Vector.decodeVector(Type, value)
    );

    this._Type = Type;
  }

  public static decodeVector<T extends Codec> (Type: Constructor<T>, value: Vector<any> | Uint8Array | string | any[]): T[] {
    if (Array.isArray(value)) {
      return value.map((entry, index): T => {
        try {
          return entry instanceof Type
            ? entry
            : new Type(entry);
        } catch (error) {
          console.error(`Unable to decode Vector on index ${index}`, error.message);

          throw error;
        }
      });
    }

    const u8a = u8aToU8a(value);
    const [offset, length] = Compact.decodeU8a(u8a);

    assert(length.lten(MAX_LENGTH), `Vector length ${length.toString()} exceeds ${MAX_LENGTH}`);

    return decodeU8a(u8a.subarray(offset), new Array(length.toNumber()).fill(Type)) as T[];
  }

  public static with<O extends Codec> (Type: Constructor<O>): Constructor<Vector<O>> {
    return class extends Vector<O> {
      public constructor (value?: any[]) {
        super(Type, value);
      }

      public static Fallback = Type.Fallback
        ? Vector.with(Type.Fallback)
        : undefined;
    };
  }

  /**
   * @description The type for the items
   */
  public get Type (): string {
    return this._Type.name;
  }

  /**
   * @description Finds the index of the value in the array
   */
  public indexOf (_other?: any): number {
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

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Vec<${new this._Type().toRawType()}>`;
  }
}
