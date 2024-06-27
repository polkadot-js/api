// Copyright 2017-2024 @polkadot/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, Address, ApplyExtrinsicResult, BlockNumber, Call, DispatchError, DispatchInfo, EventRecord, Extrinsic, ExtrinsicStatus, Hash, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import type { AnyFunction, AnyNumber, AnyTuple, AnyU8a, Callback, CallBase, Codec, IExtrinsicEra, IKeyringPair, ISubmittableResult, Signer } from '@polkadot/types/types';
import type { ApiTypes, EmptyBase, PromiseOrObs } from './base.js';

export type AugmentedSubmittable<T extends AnyFunction, A extends AnyTuple = AnyTuple> = T & CallBase<A>;

export type AddressOrPair = IKeyringPair | string | AccountId | Address;

export interface SignerOptions {
  blockHash: Uint8Array | string;
  era?: IExtrinsicEra | number;
  nonce: AnyNumber | Codec;
  signer?: Signer;
  tip?: AnyNumber;
  assetId?: AnyNumber | object;
  mode?: AnyNumber;
  metadataHash?: AnyU8a;
  withSignedTransaction?: boolean;
}

export type SubmittableDryRunResult<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<ApplyExtrinsicResult>
    : Promise<ApplyExtrinsicResult>;

export type SubmittableResultResult<ApiType extends ApiTypes, R extends ISubmittableResult = ISubmittableResult> =
  ApiType extends 'rxjs'
    ? Observable<R>
    : Promise<Hash>;

export type SubmittableResultSubscription<ApiType extends ApiTypes, R extends ISubmittableResult = ISubmittableResult> =
  ApiType extends 'rxjs'
    ? Observable<R>
    : Promise<() => void>;

export type SubmittablePaymentResult<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? Observable<RuntimeDispatchInfo>
    : Promise<RuntimeDispatchInfo>;

export interface SubmittableResultValue {
  dispatchError?: DispatchError | undefined;
  dispatchInfo?: DispatchInfo | undefined;
  events?: EventRecord[];
  internalError?: Error | undefined;
  status: ExtrinsicStatus;
  txHash: Hash;
  txIndex?: number | undefined;
  blockNumber?: BlockNumber;
}

export interface SubmittableExtrinsic<ApiType extends ApiTypes, R extends ISubmittableResult = ISubmittableResult> extends Extrinsic {
  /** true if api.rpc.system.dryRun is available, enabling dryRun(...) */
  hasDryRun: boolean;
  /** true if api.call.transactionPaymentApi.queryInfo is available, enabling paymentInfo(...)  */
  hasPaymentInfo: boolean;

  dryRun (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableDryRunResult<ApiType>;

  paymentInfo (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittablePaymentResult<ApiType>;

  send (): SubmittableResultResult<ApiType>;

  send (statusCb: Callback<R>): SubmittableResultSubscription<ApiType, R>;

  /**
   * @description Sign and broadcast the constructued transaction.
   *
   * Note for injected signers:
   * As of v12.0.2 and up the `SignerResult` return type for `signPayload` allows for the `signedTransaction` field.
   * This allows the signer to input a signed transaction that will modify the payload. This
   * The api will ensure that the Call Data is not changed. This allows for the signer to modify the payload to add
   * things like `mode`, and `metadataHash` for signedExtensions such as `CheckMetadataHash`.
   */
  signAsync (account: AddressOrPair, _options?: Partial<SignerOptions>): PromiseOrObs<ApiType, this>;

  /**
   * @description Sign and broadcast the constructued transaction.
   *
   * Note for injected signers:
   * As of v12.0.1 and up the `SignerResult` return type for `signPayload` allows for the `signedTransaction` field.
   * This allows the signer to input a signed transaction that will be directly broadcasted. This
   * bypasses the api adding the signature to the payload. The api will ensure that the Call Data is not changed before it broadcasts the
   * transaction. This allows for the signer to modify the payload to add things like `mode`, and `metadataHash` for
   * signedExtensions such as `CheckMetadataHash`.
   */
  signAndSend (account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType, R>;

  signAndSend (account: AddressOrPair, statusCb: Callback<R>): SubmittableResultSubscription<ApiType>;

  signAndSend (account: AddressOrPair, options: Partial<SignerOptions>, statusCb?: Callback<R>): SubmittableResultSubscription<ApiType, R>;

  withResultTransform (transform: (input: ISubmittableResult) => ISubmittableResult): this;
}

export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes, A extends AnyTuple = AnyTuple> extends CallBase<A> {
  (...params: any[]): SubmittableExtrinsic<ApiType>;
}

// augmented interfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedSubmittables<ApiType extends ApiTypes> extends EmptyBase<ApiType> {
  // augmented
}

export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
  (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
  // when non-augmented, we need to at least have Codec results
  [key: string]: SubmittableModuleExtrinsics<ApiType>;
}

export type SubmittableModuleExtrinsics<ApiType extends ApiTypes> = Record<string, SubmittableExtrinsicFunction<ApiType>>;
