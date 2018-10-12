// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isUndefined from '@polkadot/util/is/undefined';

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
    super(
      new (Object.values(def)[0])()
    );

    this._Types = Array.isArray(def)
      ? def
      : Object.values(def);
    this._indexes = Object.keys(def).map((index) =>
      parseInt(index, 10)
    );
    this._index = this._indexes[0];

    this.setValue(index, value);
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

  fromJSON (input: any = {}): EnumType<T> {
    // JSON comes in the form of { "<type (lowercased)>": "<value for type>" }, here we
    // additionally force to lower to ensure forward compat
    const key = Object.keys(input)[0];
    const lowerKey = key.toLowerCase();
    const index = this._indexes.find((value, index) =>
      this._Types[index].name.toLowerCase() === lowerKey
    );

    if (isUndefined(index)) {
      throw new Error('Unable to reliably map input on JSON');
    }

    this.setValue(index);
    this.raw.fromJSON(input[key]);

    return this;
  }

  fromU8a (input: Uint8Array): EnumType<T> {
    this.setValue(input[0]);
    this.raw.fromU8a(input.subarray(1));

    return this;
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
