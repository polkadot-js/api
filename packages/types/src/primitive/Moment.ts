// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, bnToHex, bnToU8a, isString, isU8a, u8aToBn } from '@polkadot/util';

import { UIntBitLength } from '../codec/AbstractInt';
import { AnyNumber, Codec } from '../types';

const BITLENGTH: UIntBitLength = 64;

/**
 * @name Moment
 * @description
 * A wrapper around seconds/timestamps. Internally the representation only has
 * second precicion (aligning with Rust), so any numbers passed an/out are always
 * per-second. For any encoding/decoding the 1000 multiplier would be applied to
 * get it in line with JavaScript formats. It extends the base JS `Date` object
 * and has all the methods available that are applicable to any `Date`
 * @noInheritDoc
 */
export default class Moment extends Date implements Codec {
  protected raw: Date; // FIXME Remove this once we convert all types out of Base

  constructor (value: Moment | Date | AnyNumber = 0) {
    super(
      Moment.decodeMoment(value)
    );

    this.raw = this;
  }

  static decodeMoment (value: Moment | Date | AnyNumber): Date {
    if (value instanceof Date) {
      return value;
    } else if (isU8a(value)) {
      value = u8aToBn(value.subarray(0, BITLENGTH / 8), true);
    } else if (isString(value)) {
      value = new BN(value, 10, 'le');
    }

    return new Date(
      bnToBn(value as BN).toNumber() * 1000
    );
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return BITLENGTH / 8;
  }

  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty (): boolean {
    return this.getTime() === 0;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    return Moment.decodeMoment(other).getTime() === this.getTime();
  }

  /**
   * @description Returns the number of bits in the value
   */
  bitLength (): UIntBitLength {
    return BITLENGTH;
  }

  /**
   * @description Returns the BN representation of the timestamp
   */
  toBn (): BN {
    return new BN(this.toNumber());
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (isLe: boolean = false): string {
    return bnToHex(this.toBn(), {
      bitLength: BITLENGTH,
      isLe,
      isNegative: false
    });
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    // FIXME Return type should be number, but conflicts with Date.toJSON()
    // which returns string
    return this.toNumber();
  }

  /**
   * @description Returns the number representation for the timestamp
   */
  toNumber (): number {
    return Math.ceil(this.getTime() / 1000);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return 'Moment';
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    // only included here since we do not inherit docs
    return super.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this.toNumber(), BITLENGTH, true);
  }
}

/**
 * @name MomentOf
 * @description
 * The Substrate MomentOf representation as a [[Moment]].
 */
export class MomentOf extends Moment {
}
