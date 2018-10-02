// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToU8a from '@polkadot/util/bn/toU8a';
import isU8a from '@polkadot/util/is/u8a';
import u8aToBn from '@polkadot/util/u8a/toBn';

import Base from './codec/Base';

const BITLENGTH = 64;

// A wrapper around seconds/timestamps. Internally the representation only has
// second precicion (aligning with Rust), so any numbers passed an/out are always
// per-second. For any encoding/decoding the 1000 multiplier would be applied to
// get it in line with JavaScript formats
export default class Moment extends Base<Date> {
  constructor (value: Uint8Array | Moment | Date | BN | number = 0) {
    super(
      value instanceof Date
        ? new Date(Math.ceil(value.getTime() / 1000) * 1000)
        : Moment.decode(value)
    );
  }

  static decode (value: Uint8Array | Moment | number | BN): Date {
    if (value instanceof Moment) {
      return value.raw;
    } if (isU8a(value)) {
      value = u8aToBn(value, true);
    }

    return new Date(
      bnToBn(value).toNumber() * 1000
    );
  }

  byteLength (): number {
    return BITLENGTH / 8;
  }

  fromJSON (input: any): Moment {
    this.raw = Moment.decode(input);

    return this;
  }

  fromU8a (input: Uint8Array): Moment {
    this.raw = Moment.decode(
      u8aToBn(input.subarray(0, this.byteLength()), true)
    );

    return this;
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
