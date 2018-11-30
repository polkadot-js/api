// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, ConstructorDef } from '../types';
import Struct from './Struct';

/**
 * @name Tuple
 * @description
 * A Tuple defines an anonymous Object with key/values - where the values are Codec values.
 * It is a specialization of the Struct type where the toJSON operates on Array structures,
 * while the U8a encoding is handled in the same way as a Struct
 */
export default class Tuple<
  // S & T definitions maps to what we have in Struct (naming documented there)
  S extends ConstructorDef = { [index: string]: Constructor<Codec> },
  T extends { [K in keyof S]: Codec } = { [K in keyof S]: Codec },
  V extends { [K in keyof S]: any } = { [K in keyof S]: any }
  > extends Struct<S, T, V> {
  static with<
    S extends ConstructorDef = { [index: string]: Constructor<Codec> }
    > (Types: S): Constructor<Tuple<S>> {
    return class extends Tuple<S> {
      constructor (value?: any) {
        super(Types, value);
      }
    };
  }

  toJSON (): any {
    return [...this.values()].map((entry) =>
      entry.toJSON()
    );
  }
}
