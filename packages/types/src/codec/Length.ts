// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import BN from 'bn.js';
import bnToBn from '@polkadot/util/bn/toBn';
import u8aToHex from '@polkadot/util/u8a/toHex';

import Base from './Base';
import Compact from './Compact';
import UInt from './UInt';

type BitLength = 32;

// A Length-prefix that can be added to any variable length stream of bytes, e.g. String,
// Vectors and Bytes
//
// FIXME Not crazy about the use of Length. If we look at Vector, Bytes & String,
// the implementations are basically the same. Vector is slightly different since
// it iterates over the length. We need a cleaner way where we have less copied
// code and a more generic implementation around the use of Length. Looking at
// Array or Struct, the same type of wrapper would be useful here.
export default class Length extends Base<BN> {
  private _bitLength: BitLength;

  constructor (value: AnyNumber = new BN(0), bitLength: BitLength = 32) {
    super(
      UInt.decode(value)
    );

    this._bitLength = bitLength;
  }

  byteLength (): number {
    return this.toU8a().length;
  }

  fromU8a (input: Uint8Array): Length {
    this.raw = Compact.decode(input, this._bitLength);

    return this;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toNumber (): number {
    return this.raw.toNumber();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? new Uint8Array()
      : Compact.encode(this.raw, this._bitLength);
  }

  setValue (value: BN | number): void {
    this.raw = bnToBn(value);
  }
}
