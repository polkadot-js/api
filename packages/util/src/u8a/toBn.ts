// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import hexToBn from '../hex/toBn';
import u8aToHex from './toHex';
import { ToBnOptions } from '../types';

/**
 * @name u8aToBn
 * @summary Creates a BN from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual BN. `null` or `undefined` values returns an `0x0` value.
 * @param value The value to convert
 * @param options Options to pass while converting
 * @param options.isLe Convert using Little Endian
 * @param options.isNegative Convert using two's complement
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToBn } from '@plugnet/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */
export default function u8aToBn (
  value: Uint8Array,
  options: ToBnOptions | boolean = { isLe: true, isNegative: false }
): BN {
  return hexToBn(
    u8aToHex(value),
    options
  );
}
