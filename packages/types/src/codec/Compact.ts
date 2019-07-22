// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, compactAddLength, compactFromU8a, compactStripLength, compactToU8a, hexToBn, isBn, isHex, isNumber, isString } from '@polkadot/util';
import { DEFAULT_BITLENGTH } from '@polkadot/util/compact/defaults';

import Moment from '../primitive/Moment';
import { AnyNumber, Constructor } from '../types';
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
export default class Compact<T extends UInt | Moment> extends Base<T> {
  public constructor (Type: Constructor<T>, value: Compact<T> | AnyNumber = 0) {
    super(Compact.decodeCompact<T>(Type, value));
  }

  public static with<T extends UInt | Moment> (Type: Constructor<T>): Constructor<Compact<T>> {
    return class extends Compact<T> {
      public constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  /**
   * Prepend a Uint8Array with its compact length.
   *
   * @param u8a - The Uint8Array to be prefixed
   */
  public static addLengthPrefix = compactAddLength;

  public static decodeU8a = compactFromU8a;

  public static encodeU8a = compactToU8a;

  public static stripLengthPrefix (u8a: Uint8Array, bitLength: UIntBitLength = DEFAULT_BITLENGTH): Uint8Array {
    const [, value] = compactStripLength(u8a, bitLength);

    return value;
  }

  public static decodeCompact<T extends UInt | Moment> (Type: Constructor<T>, value: Compact<T> | AnyNumber): Moment | UInt {
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
   * @description Returns the number of bits in the value
   */
  public bitLength (): UIntBitLength {
    return this.raw.bitLength();
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return this.raw.eq(
      other instanceof Compact
        ? other.raw
        : other
    );
  }

  /**
   * @description Returns the BN representation of the number
   */
  public toBn (): BN {
    return this.raw.toBn();
  }

  /**
   * @description Returns the number representation for the value
   */
  public toNumber (): number {
    return this.raw.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `Compact<${this.raw.toRawType()}>`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return Compact.encodeU8a(this.raw.toBn());
  }

  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  public unwrap (): T {
    return this.raw as T;
  }
}
