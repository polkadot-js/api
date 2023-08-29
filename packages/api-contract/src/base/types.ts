// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, ObsInnerType } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { AbiMessage, BlueprintOptions, ContractCallOutcome, ContractOptions } from '../types.js';

export interface MessageMeta {
  readonly meta: AbiMessage;
}

export interface BlueprintDeploy<ApiType extends ApiTypes> extends MessageMeta {
  (options: BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractQuery<ApiType extends ApiTypes> extends MessageMeta {
  (origin: AccountId | string | Uint8Array, options: ContractOptions, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface ContractTx<ApiType extends ApiTypes> extends MessageMeta {
  (options: ContractOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export type ContractGeneric<O, T> = (messageOrId: AbiMessage | string | number, options: O, ...params: unknown[]) => T;

export type ContractCallResult<ApiType extends ApiTypes, T> = ApiType extends 'rxjs'
  ? Observable<T>
  : Promise<ObsInnerType<Observable<T>>>;

export interface ContractCallSend<ApiType extends ApiTypes> {
  send (account: string | AccountId | Uint8Array): ContractCallResult<ApiType, ContractCallOutcome>;
}

export type MapConstructorExec<ApiType extends ApiTypes> = Record<string, BlueprintDeploy<ApiType>>;

export type MapMessageTx<ApiType extends ApiTypes> = Record<string, ContractTx<ApiType>>;

export type MapMessageQuery<ApiType extends ApiTypes> = Record<string, ContractQuery<ApiType>>;
