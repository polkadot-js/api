// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Codec } from './types';

export default class Bool extends Boolean implements Codec<Boolean> {
  constructor (value: Bool | boolean = false) {
    super(value);
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): Bool {
    // FIXME as below
    return new Bool(input === true);
  }

  fromU8a (input: Uint8Array): Bool {
    // FIXME this returns a new Object unfortunately, can't "replace" current value
    // Two solutions:
    // - either use static
    // - or completely remove from*, and force to use constructor
    return new Bool(input[0] === 1);
  }

  toHex (): string {
    return this.valueOf() ? '0x1' : '0x0';
  }

  toJSON (): any {
    return this.valueOf();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.valueOf() ? 1 : 0]);
  }
}
