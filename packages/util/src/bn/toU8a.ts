// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import isNumber from '../is/number';
import bnToBn from './toBn';
import { ToBnOptions } from '../types';

interface Options extends ToBnOptions {
  bitLength?: number;
}

/**
 * @name bnToU8a
 * @summary Creates a Uint8Array object from a BN.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `BN` input values return the actual bytes value converted to a `Uint8Array`. Optionally convert using little-endian format if `isLE` is set.
 * @example
 * <BR>
 *
 * ```javascript
 * import { bnToU8a } from '@plugnet/util';
 *
 * bnToU8a(new BN(0x1234)); // => [0x12, 0x34]
 * ```
 */
export default function bnToU8a (value: BN | number | null, options?: Options): Uint8Array;
export default function bnToU8a (value: BN | number | null, bitLength?: number, isLe?: boolean): Uint8Array;
export default function bnToU8a (
  value: BN | number | null,
  arg1: number | Options = { bitLength: -1, isLe: true, isNegative: false },
  arg2?: boolean
): Uint8Array {
  const _options: Options = {
    isLe: true,
    isNegative: false,
    bitLength: -1,
    ...isNumber(arg1) ? { bitLength: arg1, isLe: arg2 } : arg1
  };

  const valueBn = bnToBn(value);
  let byteLength = _options.bitLength === -1
    ? Math.ceil(valueBn.bitLength() / 8)
    : Math.ceil(_options.bitLength! / 8);

  if (!value) {
    return _options.bitLength === -1
      ? new Uint8Array([])
      : new Uint8Array(byteLength);
  }

  const output = new Uint8Array(byteLength);
  const bn = _options.isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;

  output.set(
    bn.toArray(_options.isLe ? 'le' : 'be', byteLength),
    0
  );

  return output;
}
