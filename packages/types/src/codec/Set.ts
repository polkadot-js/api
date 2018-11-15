// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a, isUndefined, u8aToHex } from '@polkadot/util';

import Base from './Base';
import { Codec } from '../types';

type SetValues = {
  [index: string]: number
};

// An Set is an array of string values, represented an an encoded type by
// a bitwise representation of the values.
//
// FIXME This is a prime candidate to potentially extend Set
export default class Set extends Base<Array<string>> implements Codec {
  private _setValues: SetValues;

  constructor (setValues: SetValues, value?: Array<string> | Uint8Array | number) {
    super(
      Set.decodeSet(setValues, value)
    );

    this._setValues = setValues;
  }

  static decodeSet (setValues: SetValues, value: Array<string> | Uint8Array | number = 0): Array<string> {
    if (isU8a(value)) {
      return Set.decodeSet(setValues, value[0]);
    } else if (Array.isArray(value)) {
      return value.reduce((result, value) => {
        if (isUndefined(setValues[value])) {
          console.error(`Ignoring invalid '${value}' passed to Set`);
        } else {
          result.push(value);
        }

        return result;
      }, [] as Array<string>);
    }

    const result = Object.keys(setValues).reduce((result, key) => {
      if ((value & setValues[key]) === setValues[key]) {
        result.push(key);
      }

      return result;
    }, [] as Array<string>);
    const computed = Set.encodeSet(setValues, result);

    if (value !== computed) {
      console.error(`Mismatch decoding '${value}', computed as '${computed}' with ${result}`);
    }

    return result;
  }

  static encodeSet (setValues: SetValues, value: Array<string>): number {
    return value.reduce((result, value) => {
      return result | (setValues[value] || 0);
    }, 0);
  }

  get encodedLength (): number {
    return 1;
  }

  get isEmpty (): boolean {
    return this.values.length === 0;
  }

  get values (): Array<string> {
    return this.raw;
  }

  get valueEncoded (): number {
    return Set.encodeSet(this._setValues, this.raw);
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.values;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array(this.valueEncoded);
  }

  toString (): string {
    return `[${this.values.map((value) => value).join(', ')}]`;
  }
}
