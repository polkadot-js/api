// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Base from './Base';
import Struct from './Struct';

// A Tuple defines an anonymous Object with key/values - where the values are Base<T> values.It
// is a specialization of the Struct type where the toJSON/fromJSON operates on Array structures,
// while the U8a encoding is handled in the same way as a Struct
export default class Tuple <
  // S & T definitions maps to what we have in Struct (naming expanded there)
  S = { [index: string]: { new(value?: any): Base } },
  T = { [K in keyof S]: Base }
> extends Struct<S, T> {
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

  fromJSON (input: any): Tuple<S, T> {
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
