// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './Base';

// This implements an enum, that based on the value wraps a different type. It is effectively an
// extension to enum where the value type is determined by the actual index.
//
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
//   - There doesn't actually seem to be a way to get to the actual determined/wrapped value
export default class EnumType <T> extends Base<Base<T>> {
  private _Types: Array<{ new(value?: any): Base }>;
  private _index: number;
  private _indexes: Array<number>;
  private _strings: Array<string>;

  constructor (Types: Array<{ new(value?: any): Base }>, strings: Array<string> = [], indexes: Array<number> = []) {
    super(
      new Types[0]()
    );

    this._Types = Types;
    this._indexes = Types.map((Type, index) =>
      indexes[index] || index
    );
    this._index = this._indexes[0];
    this._strings = Types.map((Type, index) =>
      strings[index] || Type.name
    );
  }

  get Type (): string {
    return this._Types[this._index].name;
  }

  byteLength (): number {
    return 1 + this.raw.byteLength();
  }

  fromU8a (input: Uint8Array): EnumType<T> {
    this._index = this._indexes.indexOf(input[0]);
    this.raw = new this._Types[this._index]().fromU8a(input.subarray(1));

    return this;
  }

  setValue (index?: number, value?: any): void {
    // NOTE If this is called from constructors, we may have empty values...
    this._index = this._indexes.indexOf(index || 0) || 0;
    this.raw = new this._Types[this._index](value);
  }

  toJSON (): any {
    return this.raw;
  }

  toNumber (): number {
    return this._index;
  }

  toString (): string {
    return this._strings[this._index];
  }
}
