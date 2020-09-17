// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec } from './codec';

import BN from 'bn.js';

// We cannot inline this into CodecArg, TS thrws up when building docs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

// eslint-disable-next-line no-use-before-define
export type AnyJson = string | number | boolean | null | undefined | AnyJsonArray | { [index: string]: AnyJson };

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AnyJsonArray extends Array<AnyJson> {}

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
