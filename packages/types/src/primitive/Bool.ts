// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a, u8aToHex } from '@polkadot/util';

import { Codec } from '../types';

/**
 * @name Bool
 * @description
 * Representation for a boolean value in the system. It extends the base JS `Boolean` class
 * @noInheritDoc
 */
export default class Bool extends Boolean implements Codec {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public constructor (value: Bool | Boolean | Uint8Array | boolean | number = false) {
    super(
      Bool.decodeBool(value)
    );
  }

  private static decodeBool (value: any): boolean {
    if (value instanceof Boolean) {
      return value.valueOf();
    } else if (isU8a(value)) {
      return value[0] === 1;
    }

    return !!value;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 1;
  }

  /**
   * @description Checks if the value is an empty value (always false)
   */
  public get isEmpty (): boolean {
    return false;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return this.valueOf() === (
      other instanceof Boolean
        ? other.valueOf()
        : other
    );
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): boolean {
    return this.valueOf();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'bool';
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return `${this.toJSON()}`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.valueOf() ? 1 : 0]);
  }
}
