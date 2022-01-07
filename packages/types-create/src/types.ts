// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, CodecClass, CodecRegistry, ICompact, INumber } from '@polkadot/types-codec/types';

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

export interface ILookup {
  getSiType (lookupId: ICompact<INumber> | string | number): {
    def: {
      asTuple: ICompact<INumber>[]
    }
  },
  getTypeDef (lookupId: ICompact<INumber> | string | number): TypeDef;
}

export interface CreateRegistry extends CodecRegistry {
  lookup: ILookup;

  createLookupType (lookupId: ICompact<INumber> | number): string;
  setLookup (lookup: ILookup): void;

  getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined;
}
