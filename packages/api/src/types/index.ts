// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/api/augment';

import type { Observable } from 'rxjs';
import type { QueryableConsts } from '@polkadot/api/types/consts';
import type { DecoratedErrors } from '@polkadot/api/types/errors';
import type { DecoratedEvents } from '@polkadot/api/types/events';
import type { QueryableStorage } from '@polkadot/api/types/storage';
import type { SubmittableExtrinsics } from '@polkadot/api/types/submittable';
import type { DeriveCustom, ExactDerive } from '@polkadot/api-derive';
import type { RpcInterface } from '@polkadot/rpc-core/types';
import type { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import type { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import type { Metadata } from '@polkadot/types/metadata';
import type { CallFunction, DefinitionRpc, DefinitionRpcSub, RegisteredTypes, Registry, RegistryError, SignatureOptions, Signer } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { ApiBase } from '../base';
import type { DeriveAllSections } from '../util/decorate';
import type { ApiTypes } from './base';
import type { DecoratedRpc } from './rpc';
import type { QueryableStorageMulti } from './storage';

export * from '@polkadot/api/types/consts';
export * from '@polkadot/api/types/errors';
export * from '@polkadot/api/types/events';
export * from '@polkadot/api/types/storage';
export * from '@polkadot/api/types/submittable';
export * from '@polkadot/api/types/rpc';
export { Signer, SignerResult } from '@polkadot/types/types';

export { ApiBase } from '../base';
export * from '../submittable/types';
export * from './base';
export * from './consts';
export * from './errors';
export * from './events';
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
   * @description Any chain-specific signed extensions that are now well-known
   */
  signedExtensions?: ExtDef;
  /**
   * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  signer?: Signer;
  /**
   * @description The source object to use for runtime information (only used when cloning)
   */
  source?: ApiBase<any>;
  /**
   * @description Throws an error when the initial connection fails (same as isReadyOrError)
   */
  throwOnConnect?: boolean;
  /**
   * @description Throws an error when some types are unknown (useful with throwOnConnect)
   */
  throwOnUnknown?: boolean;
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
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableStorage<'rxjs'>>;
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

export interface ApiDecoration<ApiType extends ApiTypes> {
  consts: QueryableConsts<ApiType>;
  errors: DecoratedErrors<ApiType>;
  events: DecoratedEvents<ApiType>;
  query: QueryableStorage<ApiType>;
  registry: Registry;
  rx: {
    query: QueryableStorage<'rxjs'>;
  }

  findCall (callIndex: Uint8Array | string): CallFunction;
  findError (errorIndex: Uint8Array | string): RegistryError;
  queryMulti: QueryableStorageMulti<ApiType>;
}
