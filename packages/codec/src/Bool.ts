// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

export default class Bool implements Base<boolean> {
  value: boolean;

  constructor (value: boolean = false) {
    this.value = value;
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): Bool {
    this.value = input === true;

    return this;
  }

  fromU8a (input: Uint8Array): Bool {
    this.value = input[0] === 1;

    return this;
  }

  toJSON (): any {
    return this.value;
  }

  toU8a (): Uint8Array {
    return new Uint8Array([this.value ? 1 : 0]);
  }

  toString (): string {
    return `${this.value}`;
  }
}
