// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Augment the modules
import '@polkadot/api/augment';

import type BN from 'bn.js';
import { DeriveCustom, ExactDerive } from '@polkadot/api-derive';
import { RpcInterface } from '@polkadot/rpc-core/types';
import { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import { Metadata } from '@polkadot/types';
import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { DefinitionRpc, DefinitionRpcSub, Signer, SignatureOptions, Registry, RegisteredTypes } from '@polkadot/types/types';

import { DeriveAllSections } from '../util/decorate';
import ApiBase from '../base';
import { QueryableConsts } from './consts';
import { DecoratedRpc } from './rpc';
import { QueryableStorage, QueryableStorageMulti } from './storage';
import { SubmittableExtrinsics } from './submittable';

export { Signer, SignerResult } from '@polkadot/types/types';
export { default as ApiBase } from '../base';
export * from '../submittable/types';
export * from './base';
export * from './consts';
export * from './rpc';
export * from './storage';
export * from './submittable';

export interface ApiOptions extends RegisteredTypes {
  /**
   * @description Add custom derives to be injected
   */
  derives?: DeriveCustom;
  /**
   * @description Control the initialization of the wasm libraries. When not specified, it defaults to `true`, initializing the wasm libraries, set to `false` to not initialize wasm. (No sr25519 support)
   */
  initWasm?: boolean;
  /**
   * @description pre-bundles is a map of 'genesis hash and runtime spec version' as key to a metadata hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: Record<string, string>;
  /**
   * @description Transport Provider from rpc-provider. If not specified, it will default to
   * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
   */
  provider?: ProviderInterface;
  /**
   * @description A type registry to use along with this instance
   */
  registry?: Registry;
  /**
   * @description User-defined RPC methods
   */
  rpc?: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>;
  /**
   * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  signer?: Signer;
  /**
   * @description The source object to use for runtime information (only used when cloning)
   */
  source?: ApiBase<any>;
}

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx {
  consts: QueryableConsts<'rxjs'>;
  // TODO This needs to be typed correctly
  derive: DeriveAllSections<'rxjs', ExactDerive>;
  extrinsicType: number;
  genesisHash?: Hash;
  hasSubscriptions: boolean;
  registry: Registry;
  runtimeMetadata: Metadata;
  runtimeVersion?: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;
}

export type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready';

export interface SignerOptions extends SignatureOptions {
  blockNumber: BN;
  genesisHash: Hash;
}
