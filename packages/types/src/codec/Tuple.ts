// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';
import isHex from '@polkadot/util/is/hex';

import Base from './Base';
import Struct from './Struct';

// A Tuple defines an anonymous Object with key/values - where the values are Base<T> values.It
// is a specialization of the Struct type where the toJSON/fromJSON operates on Array structures,
// while the U8a encoding is handled in the same way as a Struct
export default class Tuple <
  // S & T definitions maps to what we have in Struct (naming documented there)
  S = { [index: string]: { new(value?: any): Base } },
  T = { [K in keyof S]: Base },
  V = { [K in keyof S]: any }
> extends Struct<S, T, V> {
  constructor (Types: S, value?: V | Array<any>, jsonMap?: Map<keyof S, string>) {
    super(Types, value, jsonMap, true);
  }

  static with <
    S = { [index: string]: { new(value?: any): Base } }
  > (Types: S): { new(value?: any): Tuple<S> } {
    return class extends Tuple<S> {
      constructor (value?: any) {
        super(Types, value);
      }
    };
  }

  fromJSON (input: any): Tuple<S, T, V> {
    if (isHex(input)) {
      return this.fromU8a(hexToU8a(input));
    }

    Object.values(this.raw).forEach((entry, index) => {
      entry.fromJSON(input[index]);
    });

    return this;
  }

  toJSON (): any {
    return Object.values(this.raw).map((entry) =>
      entry.toJSON()
    );
  }
}
