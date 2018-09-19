// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

export default class BaseOption <T extends Base<any>> implements Base<T | null> {
  private Value: { new(): T };

  value: T | null;

  constructor (Value: { new(): T }, value: T | null = null) {
    this.Value = Value;
    this.value = value;
  }

  byteLength (): number {
    const childLength = this.value
      ? this.value.byteLength()
      : 0;

    return 1 + childLength;
  }

  fromJSON (input: any): BaseOption<T> {
    this.value = input
      ? new this.Value().fromJSON(input) as T
      : null;

    return this;
  }

  fromU8a (input: Uint8Array): BaseOption<T> {
    this.value = input[0] === 1
      ? new this.Value().fromU8a(input.subarray(1)) as T
      : null;

    return this;
  }

  toJSON (): any {
    return this.value
      ? this.value.toJSON()
      : undefined;
  }

  toU8a (): Uint8Array {
    const u8a = new Uint8Array(this.byteLength());

    if (this.value) {
      u8a.set([1]);
      u8a.set(this.value.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this.value
      ? this.value.toString()
      : '';
  }
}
