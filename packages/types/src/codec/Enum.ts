// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a } from '@polkadot/util';

import Base from './Base';

type EnumDef = {
  [index: number]: string
} | Array<string>;

// A codec wrapper for an enum. Enums are encoded as a single byte, where the byte
// is a zero-indexed value. This class allows you to retrieve the value either
// by `toNumber()` exposing the actual raw index, or `toString()` returning a
// string representation (as provided as part of the constructor)
//
// TODO:
//   - It would be great if this could actually wrap actual TS enums
export default class Enum extends Base<number> {
  private _enum: EnumDef;

  constructor (def: EnumDef, value: Enum | number = 0) {
    super(
      Enum.decodeEnum(value)
    );

    this._enum = def;
  }

  static decodeEnum (value: Enum | number = 0): number {
    if (value instanceof Enum) {
      return value.raw;
    } else if (isU8a(value)) {
      return value[0];
    } else {
      return value;
    }
  }

  get encodedLength (): number {
    return 1;
  }

  toJSON (): any {
    return this.raw;
  }

  toNumber (): number {
    return this.raw;
  }

  toString (): string {
    return this._enum[this.raw] || `${this.raw}`;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.raw]);
  }
}
