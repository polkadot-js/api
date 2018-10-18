// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a, u8aToHex, u8aToU8a } from '@polkadot/util';

import { AnyU8a } from '../types';
import Base from './Base';

// A U8a. A basic wrapper around Uint8Array, with no frills and no fuss. It
// wraps a Uint8Array. It does differ from other implementations wher it will
// consume the full u8a as passed to it in U8a. As such it is meant to be
// subclassed where the wrapper takes care of the actual lengths.
export default class U8a extends Base<Uint8Array> {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      U8a.decodeU8a(value)
    );
  }

  static decodeU8a (value: any): Uint8Array {
    if (isU8a(value)) {
      return value;
    } else if (value instanceof U8a) {
      return value.raw;
    } else {
      return u8aToU8a(value);
    }
  }

  get length (): number {
    return this.raw.length;
  }

  get encodedLength (): number {
    return this.length;
  }

  toHex (): string {
    return u8aToHex(this.raw);
  }

  toJSON (): any {
    return this.toHex();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return this.raw;
  }

  toString (): string {
    return this.toHex();
  }
}
