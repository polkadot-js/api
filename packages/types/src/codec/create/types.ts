// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, InterfaceTypes } from '../../types';

import { InterfaceRegistry } from '../../interfaceRegistry';

// Type which says: if `K` is in the InterfaceRegistry, then return InterfaceRegistry[K], else fallback to T
export type FromReg<T extends Codec, K extends string> = K extends InterfaceTypes
  ? InterfaceRegistry[K]
  : T;

export enum TypeDefInfo {
  Compact,
  DoubleMap,
  Enum,
  Linkage,
  Option,
  Plain,
  Set,
  Struct,
  Tuple,
  Vec,
  VecFixed,
  // anything not fully supported (keep this as the last entry)
  Null
}

export interface TypeDefExtVecFixed {
  length: number;
  type: string;
}

export interface TypeDef {
  info: TypeDefInfo;
  index?: number;
  ext?: TypeDefExtVecFixed; // add additional here as required
  name?: string;
  type: string;
  sub?: TypeDef | TypeDef[];
}
