// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

import { AnyU8a, Codec } from '../types';

// A U8a. A basic wrapper around Uint8Array, with no frills and no fuss. It
// wraps a Uint8Array. It does differ from other implementations wher it will
// consume the full u8a as passed to it in fromU8a. As such it is meant to be
// subclassed where the wrapper takes care of the actual lengths.
export default class U8a extends Uint8Array implements Codec<U8a> {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      value instanceof U8a
        ? value
        : toU8a(value)
    );
  }

  // @ts-ignore `byteLength` on Uint8Array is a member, we override by allowing
  // both here.
  get byteLength (): number {
    return super.byteLength;
  }

  fromJSON (input: any): U8a {
    // FIXME this returns a new Object unfortunately, can't "replace" current
    // because length is fixed at construction.
    // Two solutions:
    // - either use static
    // - or completely remove from*, and force to use constructor
    return new U8a(toU8a(input));
  }

  fromU8a (input: Uint8Array): U8a {
    // FIXME as above.
    return new U8a(input);
  }

  toHex (): string {
    return u8aToHex(this);
  }

  toJSON (): any {
    return this.toHex();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return this;
  }

  toString (): string {
    return this.toHex();
  }
}
