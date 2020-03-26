// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/interface-name-prefix */

import { SignOptions } from '@polkadot/keyring/types';
import { Hash } from '../interfaces/runtime';
import { FunctionMetadataLatest } from '../interfaces/metadata';
import { ArgsDef, Codec } from './codec';

import BN from 'bn.js';

export interface ICompact<T> extends Codec {
  toBn (): BN;
  toNumber (): number;
  unwrap (): T;
}

export interface IKeyringPair {
  address: string;
  publicKey: Uint8Array;
  sign: (data: Uint8Array, options?: SignOptions) => Uint8Array;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IMethod extends Codec {
  readonly args: Codec[];
  readonly argsDef: ArgsDef;
  readonly callIndex: Uint8Array;
  readonly data: Uint8Array;
  readonly hash: Hash;
  readonly hasOrigin: boolean;
  readonly meta: FunctionMetadataLatest;
}

export interface IRuntimeVersion {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly apis: any[];
  readonly authoringVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly implName: String;
  readonly implVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly specName: String;
  readonly specVersion: BN;
}

// A type alias for [Type1, Type2] & Codec, representing a tuple (Type1, Type2)
// FIXME Implement this generic <Sub> on Tuple.ts itself.
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export type ITuple<Sub extends Codec[]> = Sub & Codec

export interface IU8a extends Uint8Array, Codec {
  bitLength (): number;
  toHuman (isExtended?: boolean): any;
  toJSON (): any;
}
