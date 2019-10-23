// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserRpc } from '@polkadot/rpc-core/types';
import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, Callback, CallFunction, Codec, CodecArg, RegistryTypes, SignatureOptions, SignerPayloadJSON, SignerPayloadRaw } from '@polkadot/types/types';
import { SubmittableResultImpl, SubmittableExtrinsic } from './submittable/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { DeriveCustom } from '@polkadot/api-derive';
import { Constants } from '@polkadot/api-metadata/consts/types';
import { RpcInterface } from '@polkadot/rpc-core/jsonrpc.types';
import { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import { Metadata, u64 } from '@polkadot/types';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';

import ApiBase from './base';

export * from './submittable/types';

// Prepend an element V onto the beginning of a tuple T.
// Cons<1, [2,3,4]> is [1,2,3,4]
type Cons<V, T extends any[]> = ((v: V, ...t: T) => void) extends ((...r: infer R) => void)
  ? R
  : never;

// Append an element V onto the end of a tuple T
// Push<[1,2,3],4> is [1,2,3,4]
// note that this DOES NOT PRESERVE optionality/readonly in tuples.
// So unfortunately Push<[1, 2?, 3?], 4> is [1,2|undefined,3|undefined,4]
type Push<T extends any[], V> = (
  (
    Cons<any, Required<T>> extends infer R
      ? { [K in keyof R]: K extends keyof T ? T[K] : V }
      : never
  ) extends infer P
    ? P extends any[] ? P : never
    : never
);

// Returns the inner type of an Observable
export type ObsInnerType<O extends Observable<any>> = O extends Observable<infer U> ? U : never;

export type UnsubscribePromise = Promise<() => void>;

// In the abstract `decorateMethod` in Base.ts, we can also pass in some meta-
// information. This describes it.
export interface DecorateMethodOptions {
  methodName?: string;
}

export type DecorateMethod<ApiType> = <Method extends (...args: any[]) => Observable<any>>(method: Method, options?: DecorateMethodOptions) => any;

// Here are the return types of these parts of the api:
// - api.query.*.*: no exact typings
// - api.tx.*.*: SubmittableExtrinsic<ApiType>
// - api.derive.*.*: MethodResult<ApiType, F>
// - api.rpc.*.*: no exact typings (for now, FIXME: should be  MethodResult<ApiType, F>, like in derive)

// These are the types that don't lose type information (used for api.derive.*)
// Also use these for api.rpc.* https://github.com/polkadot-js/api/issues/1009
export interface RxResult<F extends AnyFunction> {
  (...args: Parameters<F>): Observable<ObsInnerType<ReturnType<F>>>;
  <T>(...args: Parameters<F>): Observable<T>;
}
export interface PromiseResult<F extends AnyFunction> {
  (...args: Parameters<F>): Promise<ObsInnerType<ReturnType<F>>>;
  (...args: Push<Parameters<F>, Callback<ObsInnerType<ReturnType<F>>>>): UnsubscribePromise;
  <T extends Codec | Codec[]>(...args: Parameters<F>): Promise<T>;
  <T extends Codec | Codec[]>(...args: Push<Parameters<F>, Callback<T>>): UnsubscribePromise;
}

// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type PromiseOrObs<ApiType, T> = ApiType extends 'rxjs'
  ? Observable<T>
  : Promise<T>

// FIXME The day TS has higher-kinded types, we can remove this hardcoded stuff
export type MethodResult<ApiType, F extends AnyFunction> = ApiType extends 'rxjs'
  ? RxResult<F>
  : PromiseResult<F>;

export type DecoratedRpcSection<ApiType, Section> = {
  [Method in keyof Section]: Section[Method] extends AnyFunction
    ? MethodResult<ApiType, Section[Method]>
    : never
}

export type DecoratedRpc<ApiType, AllSections> = {
  [Section in keyof AllSections]: DecoratedRpcSection<ApiType, AllSections[Section]>
}

interface StorageEntryObservableMulti {
  <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Observable<T[]>;
}

interface StorageEntryPromiseMulti {
  <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Promise<T[]>;
  <T extends Codec>(args: (CodecArg[] | CodecArg)[], callback: Callback<T[]>): UnsubscribePromise;
}

export interface StorageEntryBase<ApiType, F extends AnyFunction> {
  at: (hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, ObsInnerType<ReturnType<F>>>;
  creator: StorageEntry;
  hash: (...args: Parameters<F>) => PromiseOrObs<ApiType, Hash>;
  key: (...args: Parameters<F>) => string;
  size: (...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
  multi: ApiType extends 'rxjs' ? StorageEntryObservableMulti : StorageEntryPromiseMulti;
}

export interface StorageEntryPromiseOverloads {
  (arg1?: CodecArg, arg2?: CodecArg): Promise<Codec>;
  <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Promise<T>;
  <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
  <T extends Codec>(arg1: CodecArg, arg2: CodecArg, callback: Callback<T>): UnsubscribePromise;
}

export type StorageEntryExact<ApiType, F extends AnyFunction> = MethodResult<ApiType, F> & StorageEntryBase<ApiType, F>

// This is the most generic typings we can have for a storage entry function
type GenericStorageEntryFunction = (arg1?: CodecArg, arg2?: CodecArg) => Observable<Codec>

export type QueryableStorageEntry<ApiType> =
  ApiType extends 'rxjs'
    ? StorageEntryExact<'rxjs', GenericStorageEntryFunction>
    : StorageEntryExact<'promise', GenericStorageEntryFunction> & StorageEntryPromiseOverloads;

export interface QueryableModuleStorage<ApiType> {
  [index: string]: QueryableStorageEntry<ApiType>;
}

export type QueryableStorageMultiArg<ApiType> =
  QueryableStorageEntry<ApiType> |
  [QueryableStorageEntry<ApiType>, ...CodecArg[]];

export interface QueryableStorageMultiBase<ApiType> {
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[]): Observable<T>;
}

export interface QueryableStorageMultiPromise<ApiType> {
  <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[], callback: Callback<T>): UnsubscribePromise;
}

export type QueryableStorageMulti<ApiType> =
  ApiType extends 'rxjs'
    ? QueryableStorageMultiBase<ApiType>
    : QueryableStorageMultiPromise<ApiType>;

// QueryableStorageExact will hold the exact typed api.query.*.* generated from
// metadata. For now it's empty, it's ready to be module augmented.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface QueryableStorageExact<ApiType> { }

export interface QueryableStorage<ApiType> extends QueryableStorageExact<ApiType> {
  [index: string]: QueryableModuleStorage<ApiType>;
}

export interface SubmittableExtrinsicFunction<ApiType> extends CallFunction {
  (...params: CodecArg[]): SubmittableExtrinsic<ApiType>;
}

export interface SubmittableModuleExtrinsics<ApiType> {
  [index: string]: SubmittableExtrinsicFunction<ApiType>;
}

export interface SubmittableExtrinsics<ApiType> {
  (extrinsic: Uint8Array | string): SubmittableExtrinsic<ApiType>;
  [index: string]: SubmittableModuleExtrinsics<ApiType>;
}

export interface ApiOptions {
  /**
   * @description Add custom derives to be injected
   */
  derives?: DeriveCustom;
  /**
   * @description prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
   * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
   */
  metadata?: Record<string, string>;
  /**
   * @description Transport Provider from rpc-provider. If not specified, it will default to
   * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
   */
  provider?: ProviderInterface;
  /**
   * @description User-defined RPC methods
   */
  rpc?: UserRpc;
  /**
   * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  signer?: Signer;
  /**
   * @description The source object to use for runtime information (only used when cloning)
   */
  source?: ApiBase<any>;
  /**
   * @description Additional types used by runtime modules. This is nessusary if the runtime modules
   * uses types not available in the base Substrate runtime.
   */
  types?: RegistryTypes;
  /**
   * @description Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`
   */
  typesChain?: Record<string, RegistryTypes>;
  /**
   * @description Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
   */
  typesSpec?: Record<string, RegistryTypes>;
}

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx {
  consts: Constants;
  extrinsicType: number;
  genesisHash: Hash;
  hasSubscriptions: boolean;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer;
}

export type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready';

export type ApiTypes = 'promise' | 'rxjs';

export interface SignerOptions extends SignatureOptions {
  blockNumber: BN;
  genesisHash: Hash;
}

export interface SignerResult {
  /**
   * @description The id for this request
   */
  id: number;

  /**
   * @description The resulting signature in hex
   */
  signature: string;
}

export interface Signer {
  /**
   * @description signs an extrinsic payload from a serialized form
   */
  signPayload?: (payload: SignerPayloadJSON) => Promise<SignerResult>;

  /**
   * @description signs a raw payload, only the bytes data as supplied
   */
  signRaw?: (raw: SignerPayloadRaw) => Promise<SignerResult>;

  /**
   * @description Receives an update for the extrinsic signed by a `signer.sign`
   */
  update?: (id: number, status: Hash | SubmittableResultImpl) => void;
}

export { ApiBase };
