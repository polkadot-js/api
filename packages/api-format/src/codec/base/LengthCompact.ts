// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToBn from '@polkadot/util/u8a/toBn';

import CodecLength from './Length';

const MAX_VAL_U8 = new BN(2).pow(new BN(8 - 2)).subn(1);
const MAX_VAL_U16 = new BN(2).pow(new BN(16 - 2)).subn(1);
const MAX_VAL_U32 = new BN(2).pow(new BN(32 - 2)).subn(1);

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
export default class CodecLengthCompact extends CodecLength {
  byteLength (): number {
    return this.toU8a().length;
  }

  fromU8a (input: Uint8Array): CodecLengthCompact {
    const flag = input[0] & 0b11;

    if (flag === 0b00) {
      this.raw = new BN(input[0]).shrn(2);
    } else if (flag === 0b01) {
      this.raw = u8aToBn(input.slice(0, 2), true).shrn(2);
    } else if (flag === 0b10) {
      this.raw = u8aToBn(input.slice(0, 4), true).shrn(2);
    } else {
      this.raw = u8aToBn(input.subarray(1, 5), true);
    }

    return this;
  }

  toU8a (): Uint8Array {
    if (this.raw.lte(MAX_VAL_U8)) {
      return new Uint8Array([this.raw.toNumber() << 2]);
    } else if (this.raw.lte(MAX_VAL_U16)) {
      const u8a = bnToU8a(this.raw, 16, true);

      u8a.set([
        (u8a[0] << 2) | 0b01
      ]);

      return u8a;
    } else if (this.raw.lte(MAX_VAL_U32)) {
      const u8a = bnToU8a(this.raw, 32, true);

      u8a.set([
        (u8a[0] << 2) | 0b10
      ]);

      return u8a;
    }

    return u8aConcat(
      new Uint8Array([
        0b11
      ]),
      bnToU8a(this.raw, 32, true)
    );
  }
}
