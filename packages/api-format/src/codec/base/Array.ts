// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

import Length from './Length';

type TArray = Array<Base<any>>;

export default class BaseArray implements Base<TArray> {
  private length: Length;
  private Type: { new(): Base<any> };

  raw: TArray;

  constructor (Type: { new(): Base<any> }, value: TArray = [] as TArray, _Length: typeof Length = Length) {
    this.length = new _Length(value.length);
    this.Type = Type;
    this.raw = value;
  }

  byteLength (): number {
    return this.raw.reduce((total, raw) => {
      return total + raw.byteLength();
    }, this.length.byteLength());
  }

  fromJSON (input: any): BaseArray {
    this.raw = input.map((input: any) =>
      new this.Type().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): BaseArray {
    console.error('Array <-', input.subarray(0, 50).toString());

    this.length.fromU8a(input);

    const length = this.length.raw.toNumber();
    let offset = this.length.byteLength();
    this.raw = [];

    console.error('Array', length);

    for (let index = 0; index < length; index++) {
      const raw = new this.Type().fromU8a(input.subarray(offset));

      // FIXME ???
      this.raw.push(raw as any);
      offset += raw.byteLength();
    }

    return this;
  }

  toJSON (): any {
    return this.raw.map((entry) =>
      entry.toJSON()
    );
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.length.toU8a(),
      ...this.raw.map((entry) =>
        entry.toU8a()
      )
    );
  }

  toString (): string {
    const data = this.raw.map((entry) =>
      entry.toString()
    ).join(', ');

    return `[${data}]`;
  }
}
