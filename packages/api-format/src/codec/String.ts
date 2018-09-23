// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import u8aConcat from '@polkadot/util/u8a/concat';

// NOTE or LengthCompact
import Length from './base/Length';

export default class String implements Base<string> {
  private _length: Length;

  protected _raw: string;

  constructor (value: string = '') {
    this._length = new Length(value.length);
    this._raw = value;
  }

  byteLength (): number {
    return this._raw.length +
      this._length.byteLength();
  }

  fromJSON (input: any): String {
    throw new Error('String::fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): String {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    const offset = this._length.byteLength();

    this._raw = u8aToUtf8(input.subarray(offset, offset + length));

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return this._raw;
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      u8aFromUtf8(this._raw)
    );
  }
}
