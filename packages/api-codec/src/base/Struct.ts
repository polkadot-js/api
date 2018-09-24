// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';

import CodecBase from './Base';

// A Struct defines an Object with key/values - where the values are CodecCodecBase values. It removes
// a lot of repetition from the actual coding, define a structure type, pass it the key/CodecBase<T>
// values in the constructor and it manages the decoding. It is important that the constructor
// values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
// it needs to decoded in the specific defined order.
//
// TODO:
//   - Check the constructor, something is really, really wrong with the way the defs are used
export default class CodecStruct <
  S = { [index: string]: { new(value?: any): CodecBase } },
  T = { [K in keyof S]: CodecBase },
  V = { [K in keyof S]: any }
> extends CodecBase<T> {
  constructor (Struct: S, value: V = {} as V) {
    super(
      Object.keys(Struct).reduce((raw: T, key) => {
        // @ts-ignore Ok, something weid is going on here or I just don't get it... it works,
        // so ignore the checker, although it drives me batty. (It started when the [key in keyof T]
        // was added, the idea is to provide better checks, which does backfire here, but works
        // externally.)
        raw[key] = new Struct[key](value[key]);

        return raw;
      }, {} as T)
    );
  }

  static with <
    S = { [index: string]: { new(value?: any): CodecBase } }
  > (Struct: S): { new(value?: any): CodecStruct<S> } {
    return class extends CodecStruct<S> {
      constructor (value?: any) {
        super(Struct, value);
      }
    };
  }

  byteLength (): number {
    return Object.values(this.raw).reduce((length, entry) => {
      return length += entry.byteLength();
    }, 0);
  }

  fromJSON (input: any): CodecStruct<S, T, V> {
    Object.keys(this.raw).forEach((key) => {
      // @ts-ignore as above...
      this.raw[key].fromJSON(input[key]);
    });

    return this;
  }

  fromU8a (input: Uint8Array): CodecStruct<S, T, V> {
    Object.keys(this.raw).reduce((offset, key) => {
      // @ts-ignore as above...
      this.raw[key].fromU8a(input.subarray(offset));

      // @ts-ignore as above...
      return offset + this.raw[key].byteLength();
    }, 0);

    return this;
  }

  toJSON (): any {
    return Object.keys(this.raw).reduce((json, key) => {
      // @ts-ignore as above...
      json[key] = this.raw[key].toJSON();

      return json;
    }, {} as any);
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      ...Object.keys(this.raw).map((key) =>
        // @ts-ignore as above...
        this.raw[key].toU8a()
      )
    );
  }

  toString (): string {
    const data = Object.keys(this.raw).map((key) =>
      // @ts-ignore as above...
      `${key}: ${this.raw[key].toString()}`
    ).join(', ');

    return `{${data}}`;
  }
}
