// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { AnyTuple, Codec, IMethod as IMethodBase, INumber, IText } from '@polkadot/types-codec/types';
import type { FunctionMetadataLatest, StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Registry } from './registry';

export type { ICompact, IEnum, IMap, INumber, IOption, IResult, ISet, IStruct, IText, ITuple, IU8a, IVec } from '@polkadot/types-codec/types';

export interface IMethod<A extends AnyTuple = AnyTuple, M = FunctionMetadataLatest> extends IMethodBase<A, M> {
  readonly registry: Registry;
}

export interface IKeyringPair {
  readonly address: string;
  readonly addressRaw: Uint8Array;
  readonly publicKey: Uint8Array;

  sign: (data: Uint8Array, options?: SignOptions) => Uint8Array;
}

export interface IRuntimeVersion {
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
