// Copyright 2017-2025 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DeriveCustom, QueryableStorageMulti } from '@polkadot/api-base/types';
import type { ApiInterfaceRx as ApiInterfaceBase } from '@polkadot/api-base/types/api';
import type { QueryableCalls } from '@polkadot/api-base/types/calls';
import type { QueryableConsts } from '@polkadot/api-base/types/consts';
import type { DecoratedErrors } from '@polkadot/api-base/types/errors';
import type { DecoratedEvents } from '@polkadot/api-base/types/events';
import type { QueryableStorage } from '@polkadot/api-base/types/storage';
import type { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import type { Call, Extrinsic, Hash, RuntimeVersionPartial } from '@polkadot/types/interfaces';
import type { CallFunction, DefinitionRpc, DefinitionRpcSub, DefinitionsCall, RegisteredTypes, Registry, RegistryError, SignatureOptions, Signer } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { ApiBase } from '../base/index.js';
import type { SubmittableExtrinsic } from '../types/submittable.js';
import type { AllDerives } from '../util/decorate.js';

// types
export type { Signer, SignerResult } from '@polkadot/types/types';

// all named
export { ApiBase } from '../base/index.js';

// all starred
// eslint-disable-next-line import/export
export * from '@polkadot/api/types/calls';
// eslint-disable-next-line import/export
export * from '@polkadot/api/types/consts';
// eslint-disable-next-line import/export
export * from '@polkadot/api/types/errors';
// eslint-disable-next-line import/export
export * from '@polkadot/api/types/events';
// eslint-disable-next-line import/export
export * from '@polkadot/api/types/storage';
// eslint-disable-next-line import/export
export * from '@polkadot/api/types/submittable';
// eslint-disable-next-line import/export
export * from '@polkadot/api-base/types';

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx extends ApiInterfaceBase {
  derive: AllDerives<'rxjs'>;
}

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
   * @description Controls the checking of storage values once they have been contructed. When not specified this defaults to `true`. Set to `false` to forgo any checking on storage results.
   */
  isPedantic?: boolean;
  /**
   * @description pre-bundles is a map of 'genesis hash and runtime spec version' as key to a metadata hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: Record<string, HexString>;
  /**
   * @description Don't display any warnings on initialization (missing RPC methods & runtime calls)
   */
  noInitWarn?: boolean;
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
   * @description Defines the size of the cache for the rpc-core. Defaults to 1024 * 10 * 10.
   */
  rpcCacheCapacity?: number;
  /**
   * @description Overrides for state_call usage (this will be removed in some future version)
   */
  runtime?: DefinitionsCall;
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

export type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready' | 'decorated';

export interface SignerOptions extends SignatureOptions {
  blockNumber: BN;
  genesisHash: Hash;
}

export interface ApiDecoration<ApiType extends ApiTypes> {
  call: QueryableCalls<ApiType>;
  consts: QueryableConsts<ApiType>;
  errors: DecoratedErrors<ApiType>;
  events: DecoratedEvents<ApiType>;
  query: QueryableStorage<ApiType>;
  registry: Registry;
  runtimeVersion: RuntimeVersionPartial;
  rx: {
    call: QueryableCalls<'rxjs'>;
    query: QueryableStorage<'rxjs'>;
  };
  tx: (extrinsic: Call | Extrinsic | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

  findCall (callIndex: Uint8Array | string): CallFunction;
  findError (errorIndex: Uint8Array | string): RegistryError;
  queryMulti: QueryableStorageMulti<ApiType>;
}
