// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type { CodecCreateOptions as CreateOptions } from '@polkadot/types-codec/types';

export enum TypeDefInfo {
  BTreeMap,
  BTreeSet,
  Compact,
  DoNotConstruct,
  Enum,
  HashMap,
  Int,
  Linkage,
  Null,
  Option,
  Plain,
  Range,
  Result,
  Set,
  Si,
  Struct,
  Tuple,
  UInt,
  Vec,
  VecFixed,
  WrapperOpaque
}

export interface TypeDef {
  alias?: Map<string, string>;
  displayName?: string;
  docs?: string[];
  fallbackType?: string;
  info: TypeDefInfo;
  index?: number;
  isFromSi?: boolean;
  length?: number;
  lookupIndex?: number;
  lookupName?: string;
  lookupNameRoot?: string;
  name?: string;
  namespace?: string;
  sub?: TypeDef | TypeDef[];
  type: string;
  typeName?: string;
}
