// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, compactAddLength, compactFromU8a, compactStripLength, compactToU8a, hexToBn, isBn, isHex, isNumber, isString, isU8a } from '@polkadot/util';
import { DEFAULT_BITLENGTH } from '@polkadot/util/compact/defaults';

import { AnyNumber, Codec, Constructor } from '../types';
import Base from './Base';
import UInt, { UIntBitLength } from './UInt';
import Moment from '../Moment';

// A new compact length-encoding algorithm. It performs the same function as Length, however
// differs in that it uses a variable number of bytes to do the actual encoding. From the Rust
// implementation for compact encoding
//
//     0b00 00 00 00 / 00 00 00 00 / 00 00 00 00 / 00 00 00 00
// (0 ... 2**6 - 1)    (u8)
//     xx xx xx 00
// (2**6 ... 2**14 - 1)  (u8, u16)  low LH high
//     yL yL yL 01 / yH yH yH yL
// (2**14 ... 2**30 - 1)  (u16, u32)  low LMMH high
//     zL zL zL 10 / zM zM zM zL / zM zM zM zM / zH zH zH zM
// (2**30 ... 2**536 - 1)  (u32, u64, u128, U256, U512, U520) straight LE-encoded
//     nn nn nn 11 [ / zz zz zz zz ]{4 + n}
//
// Note: we use *LOW BITS* of the LSB in LE encoding to encode the 2 bit key.
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
    } else if (isU8a(value)) {
      const [, _value] = Compact.decodeU8a(value, new Type(0).bitLength());

      return new Type(_value);
    }

    return new Type(value.toBn());
  }

  bitLength (): UIntBitLength {
    return this.raw.bitLength();
  }

  get encodedLength (): number {
    return this.toU8a().length;
  }

  toBn (): BN {
    return this.raw.toBn();
  }

  toHex (): any {
    return this.raw.toHex();
  }

  toJSON (): any {
    return this.raw.toJSON();
  }

  toNumber (): number {
    return this.raw.toNumber();
  }

  toString (): string {
    return this.raw.toString();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return Compact.encodeU8a(this.raw.toBn(), this.bitLength());
  }
}
