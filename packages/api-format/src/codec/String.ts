// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import u8aConcat from '@polkadot/util/u8a/concat';

import Length from './base/Length';

export default class String implements Base<string> {
  private length: Length;

  raw: string;

  // NOTE We pass the Length class in here that manages the prefix.
  // It could be be one of Length or LengthCompact
  constructor (value: string = '', _Length: typeof Length = Length) {
    this.length = new _Length(value.length);
    this.raw = value;
  }

  byteLength (): number {
    return this.raw.length +
      this.length.byteLength();
  }

  fromJSON (input: any): String {
    throw new Error('fromJSON is not implemented');
  }

  fromU8a (input: Uint8Array): String {
    console.error('String <-', input.subarray(0, 50).toString());

    this.length.fromU8a(input);

    const length = this.length.raw.toNumber();
    const offset = this.length.byteLength();

    this.raw = u8aToUtf8(input.subarray(offset, offset + length));

    console.error('String', length, this.raw.slice(0, Math.min(50, length)));

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return this.raw;
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.length.toU8a(),
      u8aFromUtf8(this.raw)
    );
  }
}
