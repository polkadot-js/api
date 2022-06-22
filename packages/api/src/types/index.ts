// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DeriveCustom, QueryableStorageMulti } from '@polkadot/api-base/types';
import type { ApiInterfaceRx as ApiInterfaceBase } from '@polkadot/api-base/types/api';
import type { QueryableConsts } from '@polkadot/api-base/types/consts';
import type { DecoratedErrors } from '@polkadot/api-base/types/errors';
import type { DecoratedEvents } from '@polkadot/api-base/types/events';
import type { QueryableStorage } from '@polkadot/api-base/types/storage';
import type { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import type { Call, Extrinsic, Hash, RuntimeVersionPartial } from '@polkadot/types/interfaces';
import type { CallFunction, DefinitionRpc, DefinitionRpcSub, RegisteredTypes, Registry, RegistryError, SignatureOptions, Signer } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { ApiBase } from '../base';
import type { SubmittableExtrinsic } from '../types/submittable';
import type { AllDerives } from '../util/decorate';

export * from '@polkadot/api-base/types';
export * from '@polkadot/api/types/consts';
export * from '@polkadot/api/types/errors';
export * from '@polkadot/api/types/events';
export * from '@polkadot/api/types/storage';
export * from '@polkadot/api/types/submittable';

export { Signer, SignerResult } from '@polkadot/types/types';

export { ApiBase } from '../base';

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
   * @description pre-bundles is a map of 'genesis hash and runtime spec version' as key to a metadata hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: Record<string, HexString>;
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

export type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready' | 'decorated';

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
  runtimeVersion: RuntimeVersionPartial;
  rx: {
    query: QueryableStorage<'rxjs'>;
  };
  tx: (extrinsic: Call | Extrinsic | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

  findCall (callIndex: Uint8Array | string): CallFunction;
  findError (errorIndex: Uint8Array | string): RegistryError;
  queryMulti: QueryableStorageMulti<ApiType>;
}
