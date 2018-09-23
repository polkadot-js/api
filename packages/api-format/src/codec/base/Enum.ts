// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

export default class CodecEnum implements Base<number> {
  private strings: Array<string>;

  raw: number;

  constructor (strings: Array<string>, value: number = 0) {
    this.strings = strings;
    this.raw = value;
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): CodecEnum {
    this.raw = input;

    return this;
  }

  fromU8a (input: Uint8Array): CodecEnum {
    this.raw = input[0];

    return this;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (): Uint8Array {
    return new Uint8Array([this.raw]);
  }

  toNumber (): number {
    return this.raw;
  }

  toString (): string {
    return this.strings[this.raw];
  }
}
