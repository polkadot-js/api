// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a, u8aConcat, isHex, hexToU8a } from '@polkadot/util';

import { AnyNumber, AnyU8a, AnyString, Codec, Constructor } from '../types';
import { decodeU8a } from './utils';
import AbstractArray from './AbstractArray';

type TupleConstructors = Array<Constructor> | {
  [index: string]: Constructor
};

/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous fixed-length array, where each element has its
 * own type. It extends the base JS `Array` object.
 */
export default class Tuple extends AbstractArray<Codec> {
  private _Types: TupleConstructors;

  constructor (Types: TupleConstructors, value?: any) {
    super(
      ...Tuple.decodeTuple(Types, value)
    );

    this._Types = Types;
  }

  private static decodeTuple (_Types: TupleConstructors, value: AnyU8a | string | Array<AnyU8a | AnyNumber | AnyString | undefined | null>): Array<Codec> {
    if (isU8a(value)) {
      return decodeU8a(value, _Types);
    } else if (isHex(value)) {
      return Tuple.decodeTuple(_Types, hexToU8a(value));
    }

    const Types: Array<Constructor> = Array.isArray(_Types)
      ? _Types
      : Object.values(_Types);

    return Types.map((Type, index) => {
      try {
        return new Type(value && value[index]);
      } catch (error) {
        throw new Error(`Tuple: failed on ${index}:: ${error.message}`);
      }
    });
  }

  static with (Types: TupleConstructors): Constructor<Tuple> {
    return class extends Tuple {
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
    return Array.isArray(this._Types)
      ? this._Types.map(({ name }) => name)
      : Object.keys(this._Types);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    const types = (
      Array.isArray(this._Types)
        ? this._Types
        : Object.values(this._Types)
    ).map((Type) => new Type().toRawType());

    return `(${types.join(',')})`;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString () {
    // Overwrite the default toString representation of Array.
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...this.map((entry) =>
        entry.toU8a(isBare)
      )
    );
  }
}
