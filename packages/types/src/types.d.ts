// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import * as Classes from './index';

import Base from './codec/Base';
import { U8a, UInt } from './codec';

export type AnyNumber = U8a | UInt | BN | Uint8Array | number | string;

export type AnyU8a = U8a | Uint8Array | Array<number> | string;

export interface Codec {
  encodedLength: number;
  toHex(): string
  toJSON(): any;
  toString(): string;
  toU8a(isBare?: boolean): Uint8Array;
}

export type CodecTo = 'toHex' | 'toJSON' | 'toString' | 'toU8a'

export type CodecTypes = keyof typeof Classes;

export type Constructor<T = Base> = { new(value?: any): T };

export type ConstructorDef<T = Base> = { [index: string]: Constructor<T> };

export type TypeDef<T = Base> = { [index: string]: Base<T> };
