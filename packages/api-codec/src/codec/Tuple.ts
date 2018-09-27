// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './Base';
import Struct from './Struct';

// A Tuple defines an anonymous Object with key/values - where the values are Base<T> values.It
// is a specialization of the Struct type where the toJSON/fromJSON operates on Array structures,
// while the U8a encoding is handled in the same way as a Struct
export default class Tuple <
  // The actual Class structure, i.e. key -> Class
  S = { [index: string]: { new(value?: any): Base } },
  // internal type, instance of classes mapped by key
  T = { [K in keyof S]: Base },
  // input values, mapped by key can be anything (construction)
  V = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E = { [K in keyof S]: string }
> extends Struct<S, T, V, E> {
  static with <
    S = { [index: string]: { new(value?: any): Base } }
  > (Types: S): { new(value?: any): Tuple<S> } {
    return class extends Tuple<S> {
      constructor (value?: any) {
        super(Types, value);
      }
    };
  }

  get values (): Array<Base> {
    return Object.values(this.raw);
  }

  fromJSON (input: any): Struct<S, T, V, E> {
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
