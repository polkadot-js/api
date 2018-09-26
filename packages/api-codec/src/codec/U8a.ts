// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

import Base from './Base';

// A U8a. A basic wrapper around Uint8Array, with no frills and no fuss. It
// wraps a Uint8Array. It does differ from other implementations wher it will
// consume the full u8a as passed to it in fromU8a. As such it is meant to be
// subclassed where the wrapper takes care of the actual lengths.
export default class U8a extends Base<Uint8Array> {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      value instanceof U8a
        ? value.raw
        : toU8a(value)
    );
  }

  get length (): number {
    return this.byteLength();
  }

  byteLength (): number {
    return this.raw.length;
  }

  fromJSON (input: any): U8a {
    this.raw = toU8a(input);

    return this;
  }

  fromU8a (input: Uint8Array): U8a {
    this.raw = input;

    return this;
  }

  toHex (): string {
    return u8aToHex(this.raw);
  }

  toJSON (): any {
    return this.toHex();
  }

  toU8a (): Uint8Array {
    return this.raw;
  }

  toString (): string {
    return this.toHex();
  }
}
