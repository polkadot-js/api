// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name u8aFixLength
 * @summary Shifts a Uint8Array to a specific bitLength
 * @description
 * Returns a uint8Array with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aFixLength } from '@plugnet/util';
 *
 * u8aFixLength('0x12') // => 0x12
 * u8aFixLength('0x12', 16) // => 0x0012
 * u8aFixLength('0x1234', 8) // => 0x12
 * ```
 */
export default function u8aFixLength (value: Uint8Array, bitLength: number = -1, atStart: boolean = false): Uint8Array {
  const byteLength = Math.ceil(bitLength / 8);

  if (bitLength === -1 || value.length === byteLength) {
    return value;
  }

  if (value.length > byteLength) {
    return value.subarray(0, byteLength);
  }

  const result = new Uint8Array(byteLength);

  if (atStart) {
    result.set(value, 0);
  } else {
    result.set(value, byteLength - value.length);
  }

  return result;
}
