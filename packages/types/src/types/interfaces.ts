// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { AnyTuple, IMethod as IMethodBase } from '@polkadot/types-codec/types';
import type { BN } from '@polkadot/util';
import type { FunctionMetadataLatest, StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Registry } from './registry';

export type { ICompact, IEnum, IMap, INumber, IOption, IResult, ISet, IStruct, ITuple, IU8a, IVec } from '@polkadot/types-codec/types';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly apis: any[];
  readonly authoringVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly implName: String;
  readonly implVersion: BN;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly specName: String;
  readonly specVersion: BN;
  readonly transactionVersion: BN;
}

export interface IStorageKey<A extends AnyTuple> {
  readonly args: A;
  readonly meta: StorageEntryMetadataLatest | undefined;
  readonly method: string | undefined;
  readonly outputType: string;
  readonly section: string | undefined;

  is: (key: IStorageKey<AnyTuple>) => key is IStorageKey<A>;
}
