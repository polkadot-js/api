// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { NumberBitLength, Base } from '../types';

import BN from 'bn.js';
import isHex from '@polkadot/util/is/hex';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToHex from '@polkadot/util/bn/toHex';
import bnToU8a from '@polkadot/util/bn/toU8a';
import hexToBn from '@polkadot/util/hex/toBn';
import u8aToBn from '@polkadot/util/u8a/toBn';

const DEFAULT_VALUE = new BN(0);
const DEFAULT_BITLENGTH = 64;

export default class BaseNumber implements Base<BN> {
  private bitLength: NumberBitLength;
  value: BN;

  constructor (value: BN | number = DEFAULT_VALUE, bitLength: NumberBitLength = DEFAULT_BITLENGTH) {
    this.bitLength = bitLength;
    this.value = bnToBn(value);
  }

  byteLength (): number {
    return this.bitLength / 8;
  }

  fromJSON (input: any): BaseNumber {
    this.value = isHex(input)
      ? hexToBn(input)
      : new BN(input);

    return this;
  }

  fromU8a (input: Uint8Array): BaseNumber {
    this.value = u8aToBn(input.subarray(0, this.byteLength()), true);

    return this;
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
}
