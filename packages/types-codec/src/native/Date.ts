// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyNumber, Inspect, INumber, IU8a, Registry, UIntBitLength } from '../types/index.js';

import { BN, bnToBn, bnToHex, bnToU8a, isString, isU8a, u8aToBn } from '@polkadot/util';

const BITLENGTH: UIntBitLength = 64;
const U8A_OPTS = { bitLength: BITLENGTH, isLe: true };

function decodeDate (value: CodecDate | Date | AnyNumber): Date {
  if (isU8a(value)) {
    value = u8aToBn(value.subarray(0, BITLENGTH / 8));
  } else if (value instanceof Date) {
    return value;
  } else if (isString(value)) {
    value = new BN(value.toString(), 10, 'le');
  }

  return new Date(
    bnToBn(value as BN).toNumber() * 1000
  );
}

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
export class CodecDate extends Date implements INumber {
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public initialU8aLength = BITLENGTH / 8;
  public isStorageFallback?: boolean;

  constructor (registry: Registry, value: CodecDate | Date | AnyNumber = 0) {
    super(decodeDate(value));

    this.registry = registry;
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
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.getTime() === 0;
  }

  /**
   * @description Returns the number of bits in the value
   */
  public bitLength (): UIntBitLength {
    return BITLENGTH;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return decodeDate(other as AnyNumber).getTime() === this.getTime();
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {
      outer: [this.toU8a()]
    };
  }

  /**
   * @description Returns a BigInt representation of the number
   */
  public toBigInt (): bigint {
    return BigInt(this.toNumber());
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
  public toHex (isLe = false): HexString {
    return bnToHex(this.toBn(), {
      bitLength: BITLENGTH,
      isLe,
      isNegative: false
    });
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): string {
    return this.toISOString();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): any {
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
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): number {
    return this.toNumber();
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
  public override toString (): string {
    // only included here since we do not inherit docs
    return super.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (_isBare?: boolean): Uint8Array {
    return bnToU8a(this.toNumber(), U8A_OPTS);
  }
}
