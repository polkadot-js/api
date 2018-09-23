// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import BN from 'bn.js';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aToBn from '@polkadot/util/u8a/toBn';

export default class CodecLength implements Base<BN> {
  protected _raw: BN;

  constructor (value: BN | number = new BN(0)) {
    this._raw = bnToBn(value);
  }

  byteLength (): number {
    return 4;
  }

  fromJSON (): CodecLength {
    throw new Error('CodecLength::fromJSON: unimplemented');
  }

  fromNumber (value: BN | number): CodecLength {
    this._raw = bnToBn(value);

    return this;
  }

  fromU8a (input: Uint8Array): CodecLength {
    this._raw = u8aToBn(input.subarray(0, 4), true);

    return this;
  }

  toJSON (): any {
    throw new Error('CodecLength::toJSON: unimplemented');
  }

  toNumber (): number {
    return this._raw.toNumber();
  }

  toString (): string {
    throw new Error('CodecLength::toString: unimplemented');
  }

  toU8a (): Uint8Array {
    return bnToU8a(this._raw, 32, true);
  }
}
