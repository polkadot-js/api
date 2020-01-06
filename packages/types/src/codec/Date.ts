// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Codec, IHash, Registry } from '../types';

import BN from 'bn.js';
import { bnToBn, bnToHex, bnToU8a, isString, isU8a, u8aToBn } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { createType } from './create';
import { UIntBitLength } from './AbstractInt';

const BITLENGTH: UIntBitLength = 64;

/**
 * @name Date
 * @description
 * A wrapper around seconds/timestamps. Internally the representation only has
 * second precicion (aligning with Rust), so any numbers passed an/out are always
 * per-second. For any encoding/decoding the 1000 multiplier would be applied to
 * get it in line with JavaScript formats. It extends the base JS `Date` object
 * and has all the methods available that are applicable to any `Date`
 * @noInheritDoc
 */
export default class CodecDate extends Date implements Codec {
  public readonly registry: Registry;

  protected raw: Date; // FIXME Remove this once we convert all types out of Base

  constructor (registry: Registry, value: CodecDate | Date | AnyNumber = 0) {
    super(CodecDate.decodeDate(value));

    this.registry = registry;
    this.raw = this;
  }

  public static decodeDate (value: CodecDate | Date | AnyNumber): Date {
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
  public get encodedLength (): number {
    return BITLENGTH / 8;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IHash {
    return createType(this.registry, 'Hash', blake2AsU8a(this.toU8a(), 256));
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.getTime() === 0;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return CodecDate.decodeDate(other).getTime() === this.getTime();
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): UIntBitLength {
    return BITLENGTH;
  }

  /**
   * @description Returns the BN representation of the timestamp
   */
  public toBn (): BN {
    return new BN(this.toNumber());
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (isLe = false): string {
    return bnToHex(this.toBn(), {
      bitLength: BITLENGTH,
      isLe,
      isNegative: false
    });
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): any {
    // FIXME Return type should be number, but conflicts with Date.toJSON()
    // which returns string
    return this.toNumber();
  }

  /**
   * @description Returns the number representation for the timestamp
   */
  public toNumber (): number {
    return Math.ceil(this.getTime() / 1000);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Moment';
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    // only included here since we do not inherit docs
    return super.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this.toNumber(), BITLENGTH, true);
  }
}
