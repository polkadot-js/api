// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, ObsInnerType } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import type { AbiMessage, BlueprintOptions, ContractCallOutcome, ContractOptions } from '../types';

export interface BlueprintDeploy<ApiType extends ApiTypes> {
  (options: BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
  (value: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractQuery<ApiType extends ApiTypes> {
  (origin: AccountId | string | Uint8Array, options: ContractOptions, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome>;
  (origin: AccountId | string | Uint8Array, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface ContractTx<ApiType extends ApiTypes> {
  (options: ContractOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
  (value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractGeneric<O, T> {
  (messageOrId: AbiMessage | string | number, options: O, ...params: unknown[]): T;
  (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: unknown[]): T;
}

export type ContractCallResult<ApiType extends ApiTypes, T> = ApiType extends 'rxjs'
  ? Observable<T>
  : Promise<ObsInnerType<Observable<T>>>;

export interface ContractCallSend<ApiType extends ApiTypes> {
  send (account: string | AccountId | Uint8Array): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface MapConstructorExec<ApiType extends ApiTypes> {
  [message: string]: BlueprintDeploy<ApiType>;
}

export interface MapMessageTx<ApiType extends ApiTypes> {
  [message: string]: ContractTx<ApiType>;
}

export interface MapMessageQuery<ApiType extends ApiTypes> {
  [message: string]: ContractQuery<ApiType>;
}
