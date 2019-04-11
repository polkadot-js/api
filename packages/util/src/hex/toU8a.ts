// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import assert from '../assert';
import isHex from '../is/hex';
import hexStripPrefix from './stripPrefix';

/**
 * @name hexToU8a
 * @summary Creates a Buffer object from a hex string.
 * @description
 * `null` inputs returns an empty `Uint8Array` result. Hex input values return the actual bytes value converted to a Uint8Array. Anything that is not a hex string (including the `0x` prefix) throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToU8a } from '@plugnet/util';
 *
 * hexToU8a('0x80001f'); // Uint8Array([0x80, 0x00, 0x1f])
 * hexToU8a('0x80001f', 32); // Uint8Array([0x00, 0x80, 0x00, 0x1f])
 * ```
 */
export default function hexToU8a (_value?: string | null, bitLength: number = -1): Uint8Array {
  if (!_value) {
    return new Uint8Array([]);
  }

  assert(isHex(_value), `Expected hex value to convert, found '${_value}'`);

  const value = hexStripPrefix(_value);
  const valLength = value.length / 2;
  const bufLength = Math.ceil(
    bitLength === -1
      ? valLength
      : bitLength / 8
  );
  const result = new Uint8Array(bufLength);
  const offset = Math.max(0, bufLength - valLength);

  for (let index = 0; index < bufLength; index++) {
    result[index + offset] = parseInt(value.substr(index * 2, 2), 16);
  }

  return result;
}
