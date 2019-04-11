// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import hasPrefix from './hasPrefix';

const UNPREFIX_HEX_REGEX = /^[a-fA-F0-9]+$/;

/**
 * @name hexStripPrefix
 * @summary Strips any leading `0x` prefix.
 * @description
 * Tests for the existence of a `0x` prefix, and returns the value without the prefix. Un-prefixed values are returned as-is.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexStripPrefix } from '@plugnet/util';
 *
 * console.log('stripped', hexStripPrefix('0x1234')); // => 1234
 * ```
 */
export default function hexStripPrefix (value?: string | null): string {
  if (!value) {
    return '';
  }

  if (hasPrefix(value)) {
    return value.substr(2);
  }

  if (UNPREFIX_HEX_REGEX.test(value)) {
    return value;
  }

  throw new Error(`Invalid hex ${value} passed to hexStripPrefix`);
}
