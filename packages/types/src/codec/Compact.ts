// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, compactAddLength, compactFromU8a, compactStripLength, compactToU8a, hexToBn, isBn, isHex, isNumber, isString } from '@polkadot/util';
import { DEFAULT_BITLENGTH } from '@polkadot/util/compact/defaults';

import { AnyNumber, Codec, Constructor } from '../types';
import Base from './Base';
import UInt, { UIntBitLength } from './UInt';
import Moment from '../Moment';

/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */
export default class Compact extends Base<UInt | Moment> implements Codec {
  constructor (Type: Constructor<UInt | Moment>, value: AnyNumber = 0) {
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

  static decodeCompact (Type: Constructor<UInt | Moment>, value: AnyNumber): Moment | UInt {
    if (isString(value)) {
      return new Type(
        isHex(value)
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
   * @description Returns the number of bits in the value
   */
  bitLength (): UIntBitLength {
    return this.raw.bitLength();
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
  toHex (): any {
    return this.raw.toHex();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.raw.toJSON();
  }

  /**
   * @description Returns the number representation for the value
   */
  toNumber (): number {
    return this.raw.toNumber();
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this.raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return Compact.encodeU8a(this.raw.toBn(), this.bitLength());
  }
}
