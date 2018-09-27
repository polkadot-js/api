// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './Base';

type TypesArray = Array<{ new(value?: any): Base }>;
type TypesDef = {
  [index: number]: { new(value?: any): Base }
} | TypesArray;

// This implements an enum, that based on the value wraps a different type. It is effectively an
// extension to enum where the value type is determined by the actual index.
//
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
//   - There doesn't actually seem to be a way to get to the actual determined/wrapped value
export default class EnumType <T> extends Base<Base<T>> {
  private _Types: TypesArray;
  private _index: number;
  private _indexes: Array<number>;

  constructor (def: TypesDef, index?: number | EnumType<T>, value?: any) {
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

  get Type (): string {
    return this._Types[this._index].name;
  }

  byteLength (): number {
    return 1 + this.raw.byteLength();
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
    return this._Types[this._index].name;
  }
}
