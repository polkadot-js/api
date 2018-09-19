// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from './types';

import Vector from './base/Vector';
import u8aConcat from '@polkadot/util/u8a/concat';

type KeyValueStruct = {
  key: Vector,
  value: Vector
};

export default class KeyValue implements Base<KeyValueStruct> {
  value: KeyValueStruct;

  constructor ({ key = new Vector(), value = new Vector() }: KeyValueStruct = {} as KeyValueStruct) {
    this.value = {
      key,
      value
    };
  }

  byteLength (): number {
    return this.value.key.byteLength() +
      this.value.value.byteLength();
  }

  fromJSON (input: any): KeyValue {
    this.value = {
      key: new Vector().fromJSON(input.key),
      value: new Vector().fromJSON(input.value)
    };

    return this;
  }

  fromU8a (input: Uint8Array): KeyValue {
    const key = new Vector().fromU8a(input);
    const value = new Vector().fromU8a(input.subarray(key.byteLength()));

    this.value = {
      key,
      value
    };

    return this;
  }

  toJSON (): any {
    return {
      key: this.value.key.toJSON(),
      value: this.value.value.toJSON()
    };
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.value.key.toU8a(),
      this.value.value.toU8a()
    );
  }

  toString (): string {
    return JSON.stringify({
      key: this.value.key.toString(),
      value: this.value.value.toString()
    });
  }
}
