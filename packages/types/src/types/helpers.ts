// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec } from './codec';

import BN from 'bn.js';

export type AnyFunction = (...args: any[]) => any;

export type AnyJson = string | number | boolean | null | undefined | AnyJson[] | { [index: string]: AnyJson };

export type AnyNumber = BN | BigInt | Uint8Array | number | string;

export type AnyString = string | string;

export type AnyU8a = Uint8Array | number[] | string;

// helper to extract keys from an array
export type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type BareOpts = boolean | Record<string, boolean>;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;
