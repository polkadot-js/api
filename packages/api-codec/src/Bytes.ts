// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import Length from './codec/Length';
import U8a from './codec/U8a';

// A Bytes. The significant difference between this and a normal Uint8Array is that
// this version allows for length-encoding. (i.e. it is a variable-item codec, the same
// as what is found in String and Array)
export default class Bytes extends U8a {
  protected _length: Length;

  constructor (value?: AnyU8a) {
    super(value);

    this._length = new Length(this.raw.length);
  }

  get length (): number {
    return this._length.toNumber();
  }

  byteLength (): number {
    return this._length.byteLength() + this.length;
  }

  fromJSON (input: any): Bytes {
    super.fromJSON(input);

    this._length.setValue(this.raw.length);

    return this;
  }

  fromU8a (input: Uint8Array): Bytes {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    const offset = this._length.byteLength();

    super.fromU8a(input.subarray(offset, offset + length));

    return this;
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      this.raw
    );
  }
}
