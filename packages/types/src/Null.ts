// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from './types';

/**
 * @name Null
 * @description
 * Implements a type that does not contain anything (apart from `null`)
 */
export default class Null implements Codec {
  get encodedLength (): number {
    return 0;
  }

  toHex (): string {
    return '0x';
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return null;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return '';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array();
  }
}
