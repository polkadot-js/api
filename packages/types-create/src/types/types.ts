// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
  WrapperKeepOpaque,
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
