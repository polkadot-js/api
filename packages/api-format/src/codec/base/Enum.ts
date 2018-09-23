// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

export default class CodecEnum implements Base<number> {
  private strings: Array<string>;

  protected _raw: number;

  constructor (strings: Array<string>, value: number = 0) {
    this.strings = strings;
    this._raw = value;
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): CodecEnum {
    this._raw = input;

    return this;
  }

  fromU8a (input: Uint8Array): CodecEnum {
    this._raw = input[0];

    return this;
  }

  toJSON (): any {
    return this._raw;
  }

  toU8a (): Uint8Array {
    return new Uint8Array([this._raw]);
  }

  toNumber (): number {
    return this._raw;
  }

  toString (): string {
    return this.strings[this._raw];
  }
}
