// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a } from '@polkadot/util';

import Base from './codec/Base';

export default class Bool extends Base<boolean> {
  constructor (value: Bool | boolean = false) {
    super(
      Bool.decodeBool(value)
    );
  }

  static decodeBool (value: any): boolean {
    if (value instanceof Bool) {
      return value.raw;
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
