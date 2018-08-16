// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { Extrinsics } from '@polkadot/extrinsics/types';
import { Digest } from '@polkadot/primitives/digest';
import { Header } from '@polkadot/primitives/header';
import { MisbehaviorReport } from '@polkadot/primitives/misbehavior';

export type EncodingVersions = 'poc-1' | 'latest';

// TODO: Also update the following
// - @polkadot/storage/key/params.ts
// - decode/value/index.js
// - encode/type/index.js
export type Param$Type = 'AccountId' | 'AccountIndex' | 'Balance' | 'BlockNumber' | 'bool' | 'Bytes' | 'Call' | 'CandidateReceipt' | 'Code' | 'Digest' | 'Gas' | 'Hash' | 'Header'  | 'KeyValue' | 'MisbehaviorReport' | 'ParachainId' | 'PrendingExtrinsics' | 'PropIndex' | 'Proposal' | 'ReferendumIndex' | 'SessionKey' | 'Signature' | 'SignedBlock' | 'StorageKey' | 'StorageKeyValue' | 'StorageResult' | 'StorageResultSet' | 'String' | 'Timestamp' | 'u32' | 'u64' | 'u128' | 'VoteIndex' | 'VoteThreshold';

export type Param$Type$Array = Array<Param$Type | Array<Param$Type | Array<Param$Type>>>;

export type Param$Types = Param$Type | Param$Type$Array;

export type ExtrinsicDecoded = {
  extrinsic: SectionItem<Extrinsics>,
  params: Array<any>
}

export type BlockExtrinsicDecoded = {
  address: string,
  nonce: BN,
  extrinsic: SectionItem<Extrinsics>,
  params: Array<any>,
  signature: Uint8Array
}

export type BlockJustificationDecoded = {
  hash: Uint8Array,
  round: BN,
  signatures: Array<{
    address: string,
    signature: Uint8Array
  }>
}

export type BlockDecoded = {
  header: Header,
  extrinsics: Array<BlockExtrinsicDecoded>,
  justification: BlockJustificationDecoded
};

export type KeyValue = {
  key: Uint8Array,
  value: Uint8Array
}

export type Param$Value = Digest | Header | KeyValue | MisbehaviorReport | ExtrinsicDecoded | BN | Date | Uint8Array | boolean | number | string | null;

export type Param$Value$Array = Array<Param$Value | Array<Param$Value | Array<Param$Value>>>;

export type Param$Values = Param$Value | Param$Value$Array;

export type Param$Decoded = {
  length: number,
  value: Param$Values
}

export type Param$Options = {
  isOptional: boolean
};

export type Param = Param$Options & {
  name: string,
  type: Param$Types
};

export type Params = Array<Param>;

// FIXME: This is a bit horrible, since not all the params (apart from deprecated/hidden) is applicable to all. Not a major inconveninece, but it is itching
export type SectionItem<T> = {
  description: string,
  index: Uint8Array, // only for extrinsics,
  isDeprecated: boolean,
  isHidden: boolean,
  isSigned: boolean, // only for extrinsics
  isSubscription: boolean, // only for jsonrpc
  isUnhashed: boolean, // only for storage
  key: string, // only for storage
  name: string,
  params: Params,
  section: keyof T,
  subscribe: [string, string], // only for jsonrpc
  type: Param$Types
};

export type SectionItems<T, K> = {
  [key in keyof K]: SectionItem<T>
};

export type Section<T, Priv, Pub> = {
  isDeprecated: boolean,
  isHidden: boolean,
  description: string,
  index: Uint8Array,
  name: keyof T,
  private: SectionItems<T, Priv>,
  public: SectionItems<T, Pub>
};

export type Sections<T, Priv, Pub> = Map<T, Section<T, Priv, Pub>>;

export type CreateItemOptions = {
  description: string,
  isDeprecated?: boolean,
  isHidden?: boolean,
  isSigned?: boolean,
  isUnhashed?: boolean,
  key?: string,
  params: Params,
  subscribe?: [string, string],
  type: Param$Types
};

export type CreateItemOptionsMap = {
  [index: string]: CreateItemOptions
};

export type CreateItem<T> = (options: CreateItemOptions) => SectionItem<T>;

export type CreateItems<T> = (name: string, index?: number) => CreateItem<T>;

export type CreateSectionOptions$Only<T, Priv, Pub> = {
  description: string,
  isDeprecated?: boolean,
  isHidden?: boolean,
  'private'?: SectionItems<T, Priv>,
  'public'?: SectionItems<T, Pub>
};

export type CreateSectionOptions$Fn<T, Priv, Pub> = (method: CreateItems<T>) => CreateSectionOptions$Only<T, Priv, Pub>;

export type CreateSectionOptions<T, Priv, Pub> = CreateSectionOptions$Only<T, Priv, Pub> | CreateSectionOptions$Fn<T, Priv, Pub>;

export type CreateSection<T, Priv, Pub> = (options: CreateSectionOptions<T, Priv, Pub>) => Section<T, Priv, Pub>;
