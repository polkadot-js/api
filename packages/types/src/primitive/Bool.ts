// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { H256 } from '../interfaces/runtime';
import { Codec, Registry } from '../types';

import { isU8a, u8aToHex } from '@polkadot/util';

/** @internal */
function decodeBool (value: any): boolean {
  if (value instanceof Boolean) {
    return value.valueOf();
  } else if (isU8a(value)) {
    return value[0] === 1;
  }

  return !!value;
}

/**
 * @name Bool
 * @description
 * Representation for a boolean value in the system. It extends the base JS `Boolean` class
 * @noInheritDoc
 */
export default class Bool extends Boolean implements Codec {
  public readonly registry: Registry;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor (registry: Registry, value: Bool | Boolean | Uint8Array | boolean | number = false) {
    super(decodeBool(value));

    this.registry = registry;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 1;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): H256 {
    return this.registry.createType('H256', this.registry.hash(this.toU8a()));
  }

  /**
   * @description Checks if the value is an empty value (true when it wraps false/default)
   */
  public get isEmpty (): boolean {
    return this.isFalse;
  }

  /**
   * @description Checks if the value is an empty value (always false)
   */
  public get isFalse (): boolean {
    return !this.isTrue;
  }

  /**
   * @description Checks if the value is an empty value (always false)
   */
  public get isTrue (): boolean {
    return this.valueOf();
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
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
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): boolean {
    return this.toJSON();
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
    return this.toJSON().toString();
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
