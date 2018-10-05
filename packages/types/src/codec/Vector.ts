// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';

import { Codec } from '../types';
import Compact from './Compact';

// This manages codec arrays. Intrernally it keeps track of the length (as decoded) and allows
// construction with the passed `Type` in the constructor. It aims to be an array-like structure.
export default class Vector<T extends Codec<T>> extends Array<T> implements Codec<Vector<T>> {
  private _Type: { new(value?: any): T };

  constructor (Type: { new(value?: any): T }, value: Array<any> = [] as Array<any>) {
    super(...value.map((entry) =>
      entry instanceof Type
        ? entry
        : new Type(entry)
    ));

    this._Type = Type;
  }

  static with<O extends Codec<O>> (Type: { new(value?: any): O }): { new(value?: any): Vector<O> } {
    return class extends Vector<O> {
      constructor (value?: Array<any>) {
        super(Type, value);
      }
    };
  }

  get Type (): string {
    return this._Type.name;
  }

  byteLength (): number {
    return this.reduce((total, element) => {
      return total + element.byteLength();
    }, Compact.encode(this.length).length);
  }

  fromJSON (input: any): Vector<T> {
    // Clear array, https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
    this.length = 0;

    input.forEach((inputElement: any) =>
      this.push(new this._Type().fromJSON(inputElement))
    );

    return this;
  }

  fromU8a (input: Uint8Array): Vector<T> {
    let [offset] = Compact.decode(input);
    this.length = 0; // Clear array

    for (let index = 0; index < length; index++) {
      const raw = new this._Type().fromU8a(input.subarray(offset));

      this.push(raw as T);
      offset += raw.byteLength();
    }

    return this;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.map((entry) =>
      entry.toJSON()
    );
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = this.map((entry) =>
      entry.toU8a(isBare)
    );

    return isBare
      ? u8aConcat(...encoded)
      : u8aConcat(
        Compact.encode(this.length),
        ...encoded
      );
  }
}
