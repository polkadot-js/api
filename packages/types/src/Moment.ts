// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, bnToHex, bnToU8a, isString, isU8a, u8aToBn } from '@polkadot/util';

import Base from './codec/Base';
import U8a from './codec/U8a';
import UInt, { UIntBitLength } from './codec/UInt';
import { AnyNumber } from './types';

const BITLENGTH: UIntBitLength = 64;

// A wrapper around seconds/timestamps. Internally the representation only has
// second precicion (aligning with Rust), so any numbers passed an/out are always
// per-second. For any encoding/decoding the 1000 multiplier would be applied to
// get it in line with JavaScript formats
export default class Moment extends Base<Date> {
  constructor (value: Moment | Date | AnyNumber = 0) {
    super(
      Moment.decodeMoment(value)
    );
  }

  static decodeMoment (value: Moment | Date | AnyNumber): Date {
    if (value instanceof Moment) {
      return value.raw;
    } else if (value instanceof Date) {
      return new Date(Math.ceil(value.getTime() / 1000) * 1000);
    } else if (value instanceof UInt) {
      value = value.toBn();
    } else if (value instanceof U8a) {
      return Moment.decodeMoment(value);
    } else if (isU8a(value)) {
      value = u8aToBn(value.subarray(0, BITLENGTH / 8), true);
    } else if (isString(value)) {
      value = new BN(value, 10, 'le');
    }

    return new Date(
      bnToBn(value as BN).toNumber() * 1000
    );
  }

  get bitLength (): UIntBitLength {
    return BITLENGTH;
  }

  get encodedLength (): number {
    return BITLENGTH / 8;
  }

  getTime (): number {
    return this.raw.getTime();
  }

  toHex (): string {
    return bnToHex(this.toBn(), BITLENGTH);
  }

  toJSON (): any {
    return this.toNumber();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this.toNumber(), BITLENGTH, true);
  }

  toString (): string {
    return this.raw.toISOString();
  }

  toBn (): BN {
    return new BN(this.toNumber());
  }

  toNumber (): number {
    return Math.ceil(this.raw.getTime() / 1000);
  }
}
