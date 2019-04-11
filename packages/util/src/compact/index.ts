// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @description
 * Encoding and decoding of parity-codec compact numbers. The codec is created
 * to take up the least amount of space for a specific number. It performs the
 * same function as Length, however differs in that it uses a variable number of
 * bytes to do the actual encoding. From the Rust implementation for compact
 * encoding:
 *
 *     0b00 00 00 00 / 00 00 00 00 / 00 00 00 00 / 00 00 00 00
 * (0 ... 2**6 - 1)    (u8)
 *     xx xx xx 00
 * (2**6 ... 2**14 - 1)  (u8, u16)  low LH high
 *     yL yL yL 01 / yH yH yH yL
 * (2**14 ... 2**30 - 1)  (u16, u32)  low LMMH high
 *     zL zL zL 10 / zM zM zM zL / zM zM zM zM / zH zH zH zM
 * (2**30 ... 2**536 - 1)  (u32, u64, u128, U256, U512, U520) straight LE-encoded
 *     nn nn nn 11 [ / zz zz zz zz ]{4 + n}
 *
 * Note: we use *LOW BITS* of the LSB in LE encoding to encode the 2 bit key.
 */

export { default as compactAddLength } from './addLength';
export { default as compactStripLength } from './stripLength';
export { default as compactFromU8a } from './fromU8a';
export { default as compactToU8a } from './toU8a';
