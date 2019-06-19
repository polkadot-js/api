// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, compactAddLength, compactFromU8a, compactStripLength, compactToU8a, hexToBn, isBn, isHex, isNumber, isString } from '@polkadot/util';
import { DEFAULT_BITLENGTH } from '@polkadot/util/compact/defaults';

import Moment from '../primitive/Moment';
import { AnyNumber, Codec, Constructor } from '../types';
import { UIntBitLength } from './AbstractInt';
import Base from './Base';
import UInt from './UInt';

/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */
export default class Compact extends Base<UInt | Moment> implements Codec {
  constructor (Type: Constructor<UInt | Moment>, value: Compact | AnyNumber = 0) {
    super(Compact.decodeCompact(Type, value));
  }

  static with (Type: Constructor<UInt | Moment>): Constructor<Compact> {
    return class extends Compact {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  /**
   * Prepend a Uint8Array with its compact length.
   *
   * @param u8a - The Uint8Array to be prefixed
   */
  static addLengthPrefix = compactAddLength;
  static decodeU8a = compactFromU8a;
  static encodeU8a = compactToU8a;

  static stripLengthPrefix (u8a: Uint8Array, bitLength: UIntBitLength = DEFAULT_BITLENGTH): Uint8Array {
    const [, value] = compactStripLength(u8a, bitLength);

    return value;
  }

  static decodeCompact (Type: Constructor<UInt | Moment>, value: Compact | AnyNumber): Moment | UInt {
    if (value instanceof Compact) {
      return new Type(value.raw);
    } else if (isString(value)) {
      return new Type(
        isHex(value, -1, true)
          ? hexToBn(value)
          : new BN(value, 10)
      );
    } else if (isNumber(value) || isBn(value)) {
      return new Type(bnToBn(value));
    }

    const [, _value] = Compact.decodeU8a(value, new Type(0).bitLength());

    return new Type(_value);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty (): boolean {
    return this.raw.isEmpty;
  }

  /**
   * @description Returns the number of bits in the value
   */
  bitLength (): UIntBitLength {
    return this.raw.bitLength();
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    return this.raw.eq(
      other instanceof Compact
        ? other.raw
        : other
    );
  }

  /**
   * @description Returns the BN representation of the number
   */
  toBn (): BN {
    return this.raw.toBn();
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (isLe?: boolean): any {
    return this.raw.toHex(isLe);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): string | number {
    return this.raw.toJSON();
  }

  /**
   * @description Returns the number representation for the value
   */
  toNumber (): number {
    return this.raw.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return `Compact<${this.raw.toRawType()}>`;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this.raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return Compact.encodeU8a(this.raw.toBn());
  }

  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  unwrap (): UInt | Moment {
    return this.raw;
  }
}
