// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { AnyU8a, Codec, Registry } from '../types';

import { assert, hexToU8a, isHex, isString, stringToU8a, u8aToString, u8aToHex } from '@polkadot/util';

import Compact from '../codec/Compact';
import Raw from '../codec/Raw';

/** @internal */
function decodeText (value: Text | string | AnyU8a | { toString: () => string }): string {
  if (isHex(value)) {
    return u8aToString(hexToU8a(value.toString()));
  } else if (value instanceof Uint8Array) {
    if (!value.length) {
      return '';
    }

    // for Raw, the internal buffer does not have an internal length
    // (the same applies in e.g. Bytes, where length is added at encoding-time)
    if (value instanceof Raw) {
      return u8aToString(value);
    }

    const [offset, length] = Compact.decodeU8a(value);
    const total = offset + length.toNumber();

    assert(total <= value.length, `Text: required length less than remainder, expected at least ${total}, found ${value.length}`);

    return u8aToString(value.subarray(offset, total));
  }

  return value.toString();
}

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
  public readonly registry: Registry;

  #override: string | null = null;

  constructor (registry: Registry, value: Text | string | AnyU8a | { toString: () => string } = '') {
    super(decodeText(value));

    this.registry = registry;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
    return this.registry.createType('H256', this.registry.hash(this.toU8a()));
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
  public eq (other?: unknown): boolean {
    return isString(other)
      ? this.toString() === other.toString()
      : false;
  }

  /**
   * @description Set an override value for this
   */
  public setOverride (override: string): void {
    this.#override = override;
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
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): string {
    return this.toJSON();
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
    return this.#override || super.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    // NOTE Here we use the super toString (we are not taking overrides into account,
    // rather encoding the original value the string was constructed with)
    const encoded = stringToU8a(super.toString());

    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
