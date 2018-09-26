// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import U8a from './U8a';

type BitLength = 256 | 512;

// A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
// to be used directly, rather is should be subclassed with the specific lengths.
export default class U8aFixed extends U8a {
  protected _bitLength: number;

  constructor (value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    super(value);

    this._bitLength = bitLength;

    this._trimLength();
  }

  private _trimLength (): void {
    this.raw = this.raw.subarray(0, this.byteLength());
  }

  byteLength (): number {
    return this._bitLength / 8;
  }

  fromJSON (input: any): U8aFixed {
    super.fromJSON(input);

    this._trimLength();

    return this;
  }

  fromU8a (input: Uint8Array): U8aFixed {
    super.fromU8a(input.subarray(0, this.byteLength()));

    return this;
  }
}
