// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

export default class CodecOption implements Base<Base<any> | null> {
  private Value: { new(): Base<any> };

  raw: Base<any> | null;

  constructor (Value: { new(): Base<any> }, value: Base<any> | null = null) {
    this.Value = Value;
    this.raw = value;
  }

  byteLength (): number {
    const childLength = this.raw
      ? this.raw.byteLength()
      : 0;

    return 1 + childLength;
  }

  fromJSON (input: any): CodecOption {
    this.raw = input
      ? new this.Value().fromJSON(input) as Base<any>
      : null;

    return this;
  }

  fromU8a (input: Uint8Array): CodecOption {
    this.raw = input[0] === 1
      ? new this.Value().fromU8a(input.subarray(1)) as Base<any>
      : null;

    return this;
  }

  toJSON (): any {
    return this.raw
      ? this.raw.toJSON()
      : undefined;
  }

  toU8a (): Uint8Array {
    const u8a = new Uint8Array(this.byteLength());

    if (this.raw) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this.raw
      ? this.raw.toString()
      : '';
  }
}
