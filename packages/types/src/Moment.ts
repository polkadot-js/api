// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, bnToU8a, isString, isU8a, u8aToBn } from '@polkadot/util';

import { AnyNumber } from './types';
import Base from './codec/Base';
import U64 from './U64';

const BITLENGTH = 64;

// A wrapper around seconds/timestamps. Internally the representation only has
// second precicion (aligning with Rust), so any numbers passed an/out are always
// per-second. For any encoding/decoding the 1000 multiplier would be applied to
// get it in line with JavaScript formats
export default class Moment extends Base<Date> {
  constructor (value: Uint8Array | Moment | Date | BN | number = 0) {
    super(
      Moment.decodeMoment(value)
    );
  }

  static decodeMoment (value: Moment | Date | AnyNumber): Date {
    if (value instanceof Moment) {
      return value.raw;
    } else if (value instanceof Date) {
      return new Date(Math.ceil(value.getTime() / 1000) * 1000);
    } else if (value instanceof U64) {
      value = value.toBn();
    } else if (isU8a(value)) {
      value = u8aToBn(value.subarray(0, BITLENGTH / 8), true);
    } else if (isString(value)) {
      value = new BN(value, 10, 'le');
    }

    return new Date(
      bnToBn(value as BN).toNumber() * 1000
    );
  }

  get encodedLength (): number {
    return BITLENGTH / 8;
  }

  getTime (): number {
    return this.raw.getTime();
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
