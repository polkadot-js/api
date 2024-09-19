// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignV5Options } from '@polkadot/keyring/types';
import type { AnyTuple, Codec, IMethod as IMethodBase, INumber, IText } from '@polkadot/types-codec/types';
import type { FunctionMetadataLatest, StorageEntryMetadataLatest } from '../interfaces/metadata/index.js';
import type { Registry } from './registry.js';

export type { ICompact, IEnum, IMap, INumber, IOption, IResult, ISet, IStruct, IText, ITuple, IU8a, IVec } from '@polkadot/types-codec/types';

export interface IMethod<A extends AnyTuple = AnyTuple, M = FunctionMetadataLatest> extends IMethodBase<A, M> {
  readonly registry: Registry;
}

export interface IKeyringPair {
  readonly address: string;
  readonly addressRaw: Uint8Array;
  readonly publicKey: Uint8Array;

  sign: (data: Uint8Array, options?: SignV5Options) => Uint8Array;
}

export interface IRuntimeVersionBase {
  readonly apis: unknown[];
  readonly authoringVersion: unknown;
  readonly implName: unknown;
  readonly implVersion: unknown;
  readonly specName: unknown;
  readonly specVersion: unknown;
  readonly transactionVersion: unknown;
}

export interface IRuntimeVersion extends IRuntimeVersionBase {
  readonly apis: Codec[];
  readonly authoringVersion: INumber;
  readonly implName: IText;
  readonly implVersion: INumber;
  readonly specName: IText;
  readonly specVersion: INumber;
  readonly transactionVersion: INumber;
}

export interface IStorageKey<A extends AnyTuple> {
  readonly args: A;
  readonly meta: StorageEntryMetadataLatest | undefined;
  readonly method: string | undefined;
  readonly outputType: string;
  readonly section: string | undefined;

  is: (key: IStorageKey<AnyTuple>) => key is IStorageKey<A>;
}
