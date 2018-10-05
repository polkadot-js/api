// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import * as Classes from './index';

import { U8a, UInt } from './codec';

export type AnyNumber = UInt | BN | Uint8Array | number | string;

export type AnyU8a = U8a | Uint8Array | Array<number> | string;

export interface Codec<T> {
  byteLength(): number;
  fromU8a(input: Uint8Array): T;
  fromJSON(input: any): T;
  toHex(): string
  toJSON(): any;
  toString(): string;
  toU8a(isBare?: boolean): Uint8Array;
}

export type Constructor<T = Codec<any>> = { new(value?: any): T };

export type CodecTypes = keyof typeof Classes;
