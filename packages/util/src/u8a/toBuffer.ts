// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name u8aToBuffer
 * @summary Creates a Buffer object from a hex string.
 * @description
 * `null` inputs returns an empty `Buffer` result. `UInt8Array` input values return the actual bytes value converted to a `Buffer`. Anything that is not a `UInt8Array` throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToBuffer } from '@plugnet/util';
 *
 * console.log('Buffer', u8aToBuffer('0x123480001f'));
 * ```
 */
export default function u8aToBuffer (value?: Uint8Array | null): Buffer {
  if (!value) {
    return Buffer.from([]);
  }

  // @ts-ignore yes, from also works with u8a
  return Buffer.from(value);
}
