// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

type TStruct = {
  [index: string]: Base<any>
};

export default class BaseStruct implements Base<TStruct> {
  raw: TStruct;

  constructor (Struct: { [index: string]: { new(): Base<any> } }, value: TStruct = {} as TStruct) {
    this.raw = Object.keys(Struct).reduce((raw, key) => {
      raw[key] = value[key] || new Struct[key]();

      return raw;
    }, {} as TStruct);
  }

  byteLength (): number {
    return Object.values(this.raw).reduce((length, entry) => {
      return length += entry.byteLength();
    }, 0);
  }

  fromJSON (input: any): BaseStruct {
    Object.keys(this.raw).forEach((key) => {
      this.raw[key].fromJSON(input[key]);
    });

    return this;
  }

  fromU8a (input: Uint8Array): BaseStruct {
    console.error('Struct <-', input.subarray(0, 50).toString());

    let offset = 0;

    Object.keys(this.raw).forEach((key) => {
      this.raw[key].fromU8a(input.subarray(offset));

      offset += this.raw[key].byteLength();
    });

    return this;
  }

  toJSON (): any {
    return Object.keys(this.raw).reduce((json, key) => {
      json[key] = this.raw[key].toJSON();

      return json;
    }, {} as any);
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      ...Object.keys(this.raw).map((key) =>
        this.raw[key].toU8a()
      )
    );
  }

  toString (): string {
    const data = Object.keys(this.raw).map((key) =>
      `${key}: ${this.raw[key].toString()}`
    ).join(', ');

    return `{${data}}`;
  }
}
