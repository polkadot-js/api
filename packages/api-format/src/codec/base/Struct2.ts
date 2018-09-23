// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// NOTE This is only a toy to try and see if we can mangle the structs to determine the types from a single defintion

import CodecBase from './Base';
import CodecArray from './Array';
import String from '../String';

type valueof<T> = T[keyof T];

const DBlah = {
  foo: String,
  bar: CodecArray.with(String)
};

class Blah extends CodecStruct<typeof DBlah> {
  constructor () {
    super(DBlah);
  }

  get bar (): CodecArray<String> {
    return this.raw.bar; // this doesn't work, the type is never here
  }

  get foo (): String {
    return this.raw.foo; // this does work
  }
}

export default class CodecStruct <S = { [index: string]: { new(value?: any): CodecBase } }, T = { [K in keyof S]: valueof<S[K]> }, V = { [K in keyof S]: any }> { // extends CodecBase<T>
  raw: T;

  constructor (Struct: S, value: V = {} as V) {
    this.raw = Object.keys(Struct).reduce((raw, key) => {
      // @ts-ignore I am clueless how to make the checker happy here
      raw[key] = new Struct[key](value[key]);

      return raw;
    }, {} as T);
  }

  static with (Struct: { [index: string]: { new(value?: any): CodecBase } }): { new(value?: any): CodecStruct<typeof Struct> } {
    return class extends CodecStruct<typeof Struct> {
      constructor (value?: any) {
        super(Struct, value);
      }
    };
  }
}
