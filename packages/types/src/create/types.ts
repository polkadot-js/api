// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, InterfaceTypes } from '../types';

// Type which says: if `K` is in the InterfaceTypes, then return InterfaceTypes[K], else fallback to T
export type FromReg<T extends Codec, K extends string> = K extends keyof InterfaceTypes
  ? InterfaceTypes[K]
  : T;

export enum TypeDefInfo {
  BTreeMap,
  BTreeSet,
  Compact,
  Enum,
  Linkage,
  Option,
  Plain,
  Result,
  Set,
  Struct,
  Tuple,
  Vec,
  VecFixed,
  HashMap,
  Int,
  UInt,
  DoNotConstruct,
  Si,
  // anything not fully supported (keep this as the last entry)
  Null
}

export interface TypeDef {
  alias?: Map<string, string>;
  displayName?: string;
  fallbackType?: string;
  info: TypeDefInfo;
  index?: number;
  length?: number;
  name?: string;
  namespace?: string;
  sub?: TypeDef | TypeDef[];
  type: string;
}

export interface CreateOptions {
  blockHash?: Uint8Array | string | null;
  isOptional?: boolean;
  isPedantic?: boolean;
}
