// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './codec/Base';

export default class Bool extends Base<boolean> {
  constructor (value: Bool | boolean = false) {
    super(
      value instanceof Bool
        ? value.raw
        : value
    );
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): Bool {
    this.raw = input === true;

    return this;
  }

  fromU8a (input: Uint8Array): Bool {
    this.raw = input[0] === 1;

    return this;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (): Uint8Array {
    return new Uint8Array([this.raw ? 1 : 0]);
  }

  toString (): string {
    return `${this.raw}`;
  }
}
