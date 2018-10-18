// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isNumber, isObject, isU8a, isUndefined } from '@polkadot/util';

import Base from './Base';
import { Constructor } from '../types';

type TypesArray = Array<Constructor<Base>>;
type TypesDef = {
  [index: number]: Constructor<Base>
} | TypesArray;

// This implements an enum, that based on the value wraps a different type. It is effectively an
// extension to enum where the value type is determined by the actual index.
//
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
//   - There doesn't actually seem to be a way to get to the actual determined/wrapped value
export default class EnumType<T> extends Base<Base<T>> {
  private _Types: TypesArray;
  private _index: number;
  private _indexes: Array<number>;

  constructor (def: TypesDef, value?: any, index?: number | EnumType<T>) {
    const decoded = EnumType.decodeEnumType(def, value, index);

    super(
      decoded.value
    );

    this._Types = Array.isArray(def)
      ? def
      : Object.values(def);
    this._indexes = Object.keys(def).map((index) =>
      parseInt(index, 10)
    );

    this._index = this._indexes.indexOf(decoded.index) || 0;
  }

  static decodeEnumType<T> (def: TypesDef, value?: any, index?: number | EnumType<T>): { index: number, value: any } {
    // If `index` is set, we parse it.
    if (index instanceof EnumType) {
      return { index: index._index, value: new def[index._index](index.raw) };
    }
    if (isNumber(index)) {
      return { index, value: new def[index](value) };
    }

    // Or else, we just look at `value`
    if (isU8a(value)) {
      return { index: value[0], value: new def[value[0]](value.subarray(1)) };
    } else if (isNumber(value) && !isUndefined(def[value])) {
      return { index: value, value: new def[value]() };
    } else if (isObject(value)) {
      // JSON comes in the form of { "<type (lowercased)>": "<value for type>" }, here we
      // additionally force to lower to ensure forward compat
      const key = Object.keys(value)[0];
      const lowerKey = key.toLowerCase();
      const index = Object
        .keys(def)
        .find((k) => def[+k].name.toLowerCase() === lowerKey);

      if (isUndefined(index)) {
        throw new Error('Unable to reliably map input on JSON');
      }

      return { index: +index, value: new def[+index](value[key]) };
    }

    // Worst-case scenario, return this
    return { index: 0, value: new (Object.values(def)[0])() };
  }

  get type (): string {
    return this._Types[this._index].name;
  }

  get value (): Base<T> {
    return this.raw;
  }

  byteLength (): number {
    return 1 + this.raw.byteLength();
  }

  setValue (index?: | EnumType<T> | number, value?: any): void {
    if (index instanceof EnumType) {
      this._index = index._index;
      this.raw = new this._Types[this._index](index.raw);

      return;
    }

    this._index = this._indexes.indexOf(index || 0);

    if (this._index === -1) {
      this._index = this._indexes[0];
    }

    this.raw = new this._Types[this._index](value);
  }

  toJSON (): any {
    return this.raw;
  }

  toNumber (): number {
    return this._index;
  }

  toString (): string {
    return this.type;
  }
}
