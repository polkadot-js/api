// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a } from '@polkadot/util';

import Base from './codec/Base';
import U8a from './codec/U8a';

export default class Bool extends Base<boolean> {
  constructor (value: Bool | U8a | Boolean | Uint8Array | boolean = false) {
    super(
      Bool.decodeBool(value)
    );
  }

  static decodeBool (value: any): boolean {
    if (value instanceof Bool || value instanceof Boolean) {
      return value.valueOf();
    } else if (value instanceof U8a) {
      return Bool.decodeBool(value.raw);
    } else if (isU8a(value)) {
      return value[0] === 1;
    }

    return !!value;
  }

  get encodedLength (): number {
    return 1;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.raw ? 1 : 0]);
  }

  toString (): string {
    return `${this.raw}`;
  }

  valueOf (): boolean {
    return this.raw;
  }
}
