// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecU8a from './U8a';

type BitLength = 256 | 512;

// A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
// to be used directly, rather is should be subclassed with the specific lengths.
export default class CodecU8aFixed extends CodecU8a {
  protected _bitLength: number;

  constructor (value: CodecU8a | string | Uint8Array = new Uint8Array(), bitLength: BitLength = 256) {
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

  fromJSON (input: any): CodecU8aFixed {
    super.fromJSON(input);

    this._trimLength();

    return this;
  }

  fromU8a (input: Uint8Array): CodecU8aFixed {
    super.fromU8a(input.subarray(0, this.byteLength()));

    return this;
  }
}
