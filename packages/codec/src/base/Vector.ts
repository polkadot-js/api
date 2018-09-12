// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

import U32 from '../U32';

const U32_BYTELENGTH = 4;
const DEFAULT_VALUE = new Uint8Array();

export default class BaseVector implements Base<Uint8Array> {
  value: Uint8Array;

  constructor (value: Uint8Array = DEFAULT_VALUE) {
    this.value = value;
  }

  byteLength (): number {
    return U32_BYTELENGTH + this.value.length;
  }

  fromJSON (input: any): BaseVector {
    this.value = toU8a(input);

    return this;
  }

  fromU8a (input: Uint8Array): BaseVector {
    const u32 = new U32().fromU8a(input);
    const length = u32.value.toNumber();

    this.value = new Uint8Array(length);

    this.value.set(input.subarray(U32_BYTELENGTH, U32_BYTELENGTH + length));

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      new U32(this.value.length).toU8a(),
      this.value
    );
  }

  toString (): string {
    return u8aToHex(this.value);
  }
}
