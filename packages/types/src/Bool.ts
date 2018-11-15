// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a, u8aToHex } from '@polkadot/util';

import { Codec } from './types';

export default class Bool extends Boolean implements Codec {
  constructor (value: Bool | Boolean | Uint8Array | boolean | number = false) {
    super(
      Bool.decodeBool(value)
    );
  }

  private static decodeBool (value: any): boolean {
    if (value instanceof Bool || value instanceof Boolean) {
      return value.valueOf();
    } else if (isU8a(value)) {
      return value[0] === 1;
    }

    return !!value;
  }

  get encodedLength (): number {
    return 1;
  }

  toJSON (): any {
    return this.valueOf();
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this ? 1 : 0]);
  }

  toString (): string {
    return `${this.toJSON()}`;
  }
}
