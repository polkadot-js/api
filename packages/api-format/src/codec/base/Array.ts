// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

import Length from './Length';

export default class BaseArray <T extends Base<any>> implements Base<Array<T>> {
  private length: Length;
  private Value: { new(): T };

  value: Array<T>;

  constructor (Value: { new(): T }, value: Array<T> = [] as Array<T>, _Length: typeof Length = Length) {
    this.length = new _Length(value.length);
    this.Value = Value;
    this.value = value;
  }

  byteLength (): number {
    return this.value.reduce((total, value) => {
      return total + value.byteLength();
    }, this.length.byteLength());
  }

  fromJSON (input: any): BaseArray<T> {
    this.value = input.map((input: any) =>
      new this.Value().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): BaseArray<T> {
    this.length.fromU8a(input);

    const count = this.length.value.toNumber();
    let offset = this.length.byteLength();
    this.value = [];

    for (let index = 0; index < count; index++) {
      const value = new this.Value().fromU8a(input.subarray(offset));

      this.value.push(value as T);
      offset += value.byteLength();
    }

    return this;
  }

  toJSON (): any {
    return this.value.map((value) =>
      value.toJSON()
    );
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.length.toU8a(),
      ...this.value.map((value) =>
        value.toU8a()
      )
    );
  }

  toString (): string {
    const data = this.value.map((value) =>
      value.toString()
    ).join(', ');

    return `[${data}]`;
  }
}
