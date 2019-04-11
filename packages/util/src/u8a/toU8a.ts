// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isBuffer from '../is/buffer';
import isHex from '../is/hex';
import isString from '../is/string';
import bufferToU8a from '../buffer/toU8a';
import hexToU8a from '../hex/toU8a';
import stringToU8a from '../string/toU8a';

/**
 * @name u8aToU8a
 * @summary Creates a Uint8Array value from a Uint8Array, Buffer, string or hex input.
 * @description
 * `null` ior `undefined` nputs returns a `[]` result, Uint8Array values returns the value, hex strings returns a Uint8Array representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToU8a } from '@plugnet/util';
 *
 * u8aToU8a(new Uint8Array([0x12, 0x34]); // => Uint8Array([0x12, 0x34])
 * u8aToU8a(0x1234); // => Uint8Array([0x12, 0x34])
 * ```
 */
export default function u8aToU8a (value?: Array<number> | Buffer | Uint8Array | string | null): Uint8Array {
  if (!value) {
    return new Uint8Array();
  }

  if (isBuffer(value)) {
    return bufferToU8a(value);
  }

  if (isString(value)) {
    return isHex(value)
      ? hexToU8a(value)
      : stringToU8a(value);
  }

  if (Array.isArray(value)) {
    return Uint8Array.from(value);
  }

  return value;
}
