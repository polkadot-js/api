// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aToBn from '@polkadot/util/u8a/toBn';

import CodecBase from './Base';

// A basic u32 LE length-encoder. It is basically used in Vectors, Arrays and String
// (anything variable) to do the encoding/decoding for the length prefixes. (It has
// been superceded in use by the compact encoder, i.e. LengthCompact)
export default class CodecLengthFixed extends CodecBase<BN> {
  constructor (value: CodecLengthFixed | BN | number = new BN(0)) {
    super(
      value instanceof CodecLengthFixed
        ? value.raw
        : bnToBn(value)
    );
  }

  byteLength (): number {
    return 4;
  }

  fromJSON (): CodecLengthFixed {
    throw new Error('CodecLength::fromJSON: unimplemented');
  }

  fromNumber (value: BN | number): CodecLengthFixed {
    this.raw = bnToBn(value);

    return this;
  }

  fromU8a (input: Uint8Array): CodecLengthFixed {
    this.raw = u8aToBn(input.subarray(0, 4), true);

    return this;
  }

  toJSON (): any {
    throw new Error('CodecLength::toJSON: unimplemented');
  }

  toNumber (): number {
    return this.raw.toNumber();
  }

  toString (): string {
    throw new Error('CodecLength::toString: unimplemented');
  }

  toU8a (): Uint8Array {
    return bnToU8a(this.raw, 32, true);
  }

  setValue (value: BN | number): void {
    this.raw = bnToBn(value);
  }
}
