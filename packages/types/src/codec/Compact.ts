// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToBn, bnToU8a, hexToBn, isBn, isHex, isNumber, isString, isU8a, u8aToBn, u8aConcat, u8aToU8a } from '@polkadot/util';

import { AnyNumber, Codec, Constructor } from '../types';
import Base from './Base';
import UInt, { UIntBitLength } from './UInt';
import Moment from '../Moment';

export const DEFAULT_LENGTH_BITS = 32;

const MAX_U8 = new BN(2).pow(new BN(8 - 2)).subn(1);
const MAX_U16 = new BN(2).pow(new BN(16 - 2)).subn(1);
const MAX_U32 = new BN(2).pow(new BN(32 - 2)).subn(1);

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
  static addLengthPrefix (u8a: Uint8Array, bitLength: UIntBitLength = DEFAULT_LENGTH_BITS): Uint8Array {
    return u8aConcat(
      Compact.encodeU8a(u8a.length, bitLength),
      u8a
    );
  }

  static stripLengthPrefix (u8a: Uint8Array, bitLength: UIntBitLength = DEFAULT_LENGTH_BITS): Uint8Array {
    const [offset] = Compact.decodeU8a(u8a, bitLength);

    return u8a.subarray(offset);
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

  static decodeU8a (_input: Uint8Array | string, bitLength: UIntBitLength): [number, BN] {
    const input = u8aToU8a(_input);
    const flag = input[0] & 0b11;

    if (flag === 0b00) {
      return [1, new BN(input[0]).shrn(2)];
    } else if (flag === 0b01) {
      return [2, u8aToBn(input.slice(0, 2), true).shrn(2)];
    } else if (flag === 0b10) {
      return [4, u8aToBn(input.slice(0, 4), true).shrn(2)];
    }

    const byteLength = bitLength / 8;

    return [byteLength + 1, u8aToBn(input.subarray(1, 1 + byteLength), true)];
  }

  static encodeU8a (_value: UInt | BN | number, bitLength: UIntBitLength): Uint8Array {
    const value = _value instanceof UInt
      ? _value.toBn()
      : bnToBn(_value);

    if (value.lte(MAX_U8)) {
      return new Uint8Array([value.toNumber() << 2]);
    } else if (value.lte(MAX_U16)) {
      return bnToU8a(value.shln(2).addn(0b01), 16, true);
    } else if (value.lte(MAX_U32)) {
      return bnToU8a(value.shln(2).addn(0b10), 32, true);
    }

    return u8aConcat(
      new Uint8Array([
        0b11
      ]),
      bnToU8a(value, bitLength, true)
    );
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
