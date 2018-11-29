// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import * as Classes from './index';

import { UInt } from './codec';

export type AnyNumber = UInt | BN | Uint8Array | number | string;

export type AnyString = string | String;

export type AnyU8a = Uint8Array | Array<number> | string;

export interface Codec {
  encodedLength: number;
  toHex (): string;
  toJSON (): any;
  toString (): string;
  toU8a (isBare?: boolean): Uint8Array;
}

export type CodecTo = 'toHex' | 'toJSON' | 'toString' | 'toU8a';

export type CodecTypes = keyof typeof Classes;

export type Constructor<T = Codec> = { new(value?: any): T };

export type ConstructorDef<T = Codec> = { [index: string]: Constructor<T> };

export type TypeDef = { [index: string]: Codec };
