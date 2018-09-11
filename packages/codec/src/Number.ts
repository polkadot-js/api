// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import isHex from '@polkadot/util/is/hex';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToHex from '@polkadot/util/bn/toHex';
import bnToU8a from '@polkadot/util/bn/toU8a';
import hexToBn from '@polkadot/util/hex/toBn';
import u8aToBn from '@polkadot/util/u8a/toBn';

export default class Number {
  private bitLength: number;
  value: BN;

  constructor (value: BN | number, bitLength: number) {
    this.bitLength = bitLength;
    this.value = bnToBn(value);
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (): Uint8Array {
    return bnToU8a(this.value, this.bitLength, true);
  }

  toString (): string {
    return bnToHex(this.value, this.bitLength);
  }

  static valueFromJSON (input: any, bitLength: number): BN {
    return isHex(input)
      ? hexToBn(input)
      : new BN(input);
  }

  static valueFromU8a (input: Uint8Array, bitLength: number): BN {
    return u8aToBn(input, true);
  }
}
