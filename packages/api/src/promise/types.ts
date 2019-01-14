// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '@polkadot/types/index';
import { Codec } from '@polkadot/types/types';
import { MethodFunction } from '@polkadot/types/Method';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { ApiBaseInterface } from '../types';

import SubmittableExtrinsic from './SubmittableExtrinsic';

export type PromiseSubscription = Promise<() => any>;

export type DecoratedRpc$Method = (...params: Array<any>) => Promise<any> | PromiseSubscription;

export interface DecoratedRpc$Section {
  [index: string]: DecoratedRpc$Method;
}

export interface DecoratedRpc {
  author: DecoratedRpc$Section;
  chain: DecoratedRpc$Section;
  state: DecoratedRpc$Section;
  system: DecoratedRpc$Section;
}

export interface DeriveFunction$Subscribe {
  (arg: any, cb: (value?: any | null) => any): PromiseSubscription;
  (cb: (value?: any | null) => any): PromiseSubscription;
}

export interface DeriveFunction {
  (cb: (value?: any | null) => any): PromiseSubscription;
  (arg: any, cb: (value?: any | null) => any): PromiseSubscription;
  (arg?: any): Promise<Codec | null | undefined>;
  at: (hash: Hash, arg?: any) => Promise<Codec | null | undefined>;
}

export interface DeriveSection {
  [index: string]: DeriveFunction;
}

export interface Derive {
  [index: string]: DeriveSection;
}

export interface QueryableStorageFunction$Subscribe {
  (arg: any, cb: (value?: any | null) => any): PromiseSubscription;
  (cb: (value?: any | null) => any): PromiseSubscription;
}

export interface QueryableStorageFunction extends StorageFunction {
  (cb: (value?: any | null) => any): PromiseSubscription;
  (arg: any, cb: (value?: any | null) => any): PromiseSubscription;
  (arg?: any): Promise<Codec | null | undefined>;
  at: (hash: Hash, arg?: any) => Promise<Codec | null | undefined>;
}

export interface QueryableModuleStorage {
  [index: string]: QueryableStorageFunction;
}

export interface QueryableStorage {
  [index: string]: QueryableModuleStorage;
}

export interface SubmittableExtrinsicFunction extends MethodFunction {
  (...args: any[]): SubmittableExtrinsic;
}

export interface SubmittableModuleExtrinsics {
  [index: string]: SubmittableExtrinsicFunction;
}

export interface SubmittableExtrinsics {
  [index: string]: SubmittableModuleExtrinsics;
}

export interface ApiPromiseInterface extends ApiBaseInterface<DecoratedRpc, QueryableStorage, SubmittableExtrinsics, Derive> {
  readonly isReady: Promise<ApiPromiseInterface>;
}
