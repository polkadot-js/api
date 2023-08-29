// Copyright 2017-2023 @polkadot/types-create authors & contributors
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
  RangeInclusive,
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
  alias?: Map<string, string> | undefined;
  displayName?: string | undefined;
  docs?: string[] | undefined;
  fallbackType?: string | undefined;
  info: TypeDefInfo;
  index?: number;
  isFromSi?: boolean;
  length?: number;
  lookupIndex?: number;
  lookupName?: string | undefined;
  lookupNameRoot?: string | undefined;
  name?: string | undefined;
  namespace?: string | undefined;
  sub?: TypeDef | TypeDef[];
  type: string;
  typeName?: string | undefined;
}
