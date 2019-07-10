// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, hexToU8a, isHex, isString, stringToU8a, u8aToString, u8aToHex } from '@polkadot/util';

import { AnyU8a, Codec } from '../types';
import Compact from '../codec/Compact';

/**
 * @name Text
 * @description
 * This is a string wrapper, along with the length. It is used both for strings as well
 * as items such as documentation. It simply extends the standard JS `String` built-in
 * object, inheriting all methods exposed from `String`.
 * @noInheritDoc
 */
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)
export default class Text extends String implements Codec {
  public constructor (value: Text | string | AnyU8a | { toString: () => string } = '') {
    super(
      Text.decodeText(value)
    );
  }

  private static decodeText (value: Text | string | AnyU8a | { toString: () => string }): string {
    if (isHex(value)) {
      return u8aToString(hexToU8a(value.toString()));
    } else if (value instanceof Uint8Array) {
      if (!value.length) {
        return '';
      }

      const [offset, length] = Compact.decodeU8a(value);
      const total = offset + length.toNumber();

      assert(total <= value.length, `Text: required length less than remainder, expected at least ${total}, found ${value.length}`);

      return u8aToString(value.subarray(offset, total));
    }

    return `${value}`;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description Checks if the value is an empty value
   */
  public get isEmpty (): boolean {
    return this.length === 0;
  }

  /**
   * @description The length of the value
   */
  public get length (): number {
    // only included here since we ignore inherited docs
    return super.length;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return isString(other)
      ? this.toString() === other.toString()
      : false;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    // like  with Vec<u8>, when we are encoding to hex, we don't actually add
    // the length prefix (it is already implied by the actual string length)
    return u8aToHex(this.toU8a(true));
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    return this.toString();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Text';
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    // only included here since we do not inherit docs
    return super.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = stringToU8a(this.toString());

    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
