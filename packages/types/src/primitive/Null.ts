// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../types';
import { isNull } from '@polkadot/util';

/**
 * @name Null
 * @description
 * Implements a type that does not contain anything (apart from `null`)
 */
export default class Null implements Codec {
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 0;
  }

  /**
   * @description Checks if the value is an empty value (always true)
   */
  public get isEmpty (): boolean {
    return true;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return other instanceof Null || isNull(other);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return '0x';
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): null {
    return null;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Null';
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return '';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array();
  }
}

/**
 * @name Phantom
 * @description
 * Implements a type that does not contain anything (apart from `null`)
 */
export class Phantom extends Null {
  public toRawType (): string {
    return 'Phantom';
  }
}
