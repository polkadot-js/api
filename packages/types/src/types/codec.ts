// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '@polkadot/types-codec/types';

export type { AnyFunction, AnyJson, AnyNumber, AnyString, AnyTuple, AnyU8a, ArgsDef, BareOpts, Codec, CodecClass, CodecTo, Inspect } from '@polkadot/types-codec/types';

// helper to extract keys from an array
export type ArrayElementType<T extends readonly unknown[]> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;
