// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a, u8aToHex } from '@polkadot/util';

import { Codec } from '../types';
import Base from './Base';

type EnumDef = {
  [index: number]: string
} | Array<string>;

/**
 * @name Enum
 * @description
 * A codec wrapper for an enum. Enums are encoded as a single byte, where the byte
 * is a zero-indexed value. This class allows you to retrieve the value either
 * by `toNumber()` exposing the actual raw index, or `toString()` returning a
 * string representation (as provided as part of the constructor)
 */
// TODO:
//   - It would be great if this could actually wrap actual TS enums
export default class Enum extends Base<number> implements Codec {
  private _enum: EnumDef;

  constructor (def: EnumDef, value: Enum | Uint8Array | number = 0) {
    super(
      Enum.decodeEnum(value)
    );

    this._enum = def;
  }

  static decodeEnum (value: Enum | Uint8Array | number = 0): number {
    if (value instanceof Enum) {
      return value.raw;
    } else if (isU8a(value)) {
      return value[0];
    } else {
      return value;
    }
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return 1;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.raw;
  }

  /**
   * @description Returns the number representation for the value
   */
  toNumber (): number {
    return this.raw;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this._enum[this.raw] || `${this.raw}`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.raw]);
  }
}
