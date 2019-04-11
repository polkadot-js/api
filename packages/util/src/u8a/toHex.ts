// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ALPHABET = '0123456789abcdef';

/**
 * @name u8aToHex
 * @summary Creates a hex string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual hex string. `null` or `undefined` values returns an `0x` string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToHex } from '@plugnet/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */
export default function u8aToHex (value?: Uint8Array | null, bitLength: number = -1, isPrefixed: boolean = true): string {
  const prefix = isPrefixed
    ? '0x'
    : '';

  if (!value || !value.length) {
    return prefix;
  }

  const byteLength = Math.ceil(bitLength / 8);

  if (byteLength > 0 && value.length > byteLength) {
    const halfLength = Math.ceil(byteLength / 2);

    return `${u8aToHex(value.subarray(0, halfLength), -1, isPrefixed)}…${u8aToHex(value.subarray(value.length - halfLength), -1, false)}`;
  }

  // based on comments in https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex and
  // implementation in http://jsben.ch/Vjx2V - optimisation here suggests that a forEach loop is faster
  // than reduce as well (clocking at in 90% of the reduce speed with tweaking in the playpen above)
  return value.reduce((result, value) => {
    return result + ALPHABET[value >> 4] + ALPHABET[value & 15];
  }, prefix);
}
