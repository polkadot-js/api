// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, ObsInnerType } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId } from '@polkadot/types/interfaces';
import { CodecArg } from '@polkadot/types/types';
import { ContractCallOutcome } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';

type ContractCallResult<ApiType extends ApiTypes, T> = ApiType extends 'rxjs'
  ? Observable<Observable<T>>
  : Promise<ObsInnerType<Observable<T>>>;

export interface ContractRead<ApiType extends ApiTypes> {
  send (account: string | AccountId | Uint8Array): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface MapConstructorExec<ApiType extends ApiTypes> {
  [message: string]: (endowment: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, ...params: CodecArg[]) => SubmittableExtrinsic<ApiType>;
}

export interface MapMessageExec<ApiType extends ApiTypes> {
  [message: string]: (value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]) => SubmittableExtrinsic<ApiType>;
}

export interface MapMessageRead<ApiType extends ApiTypes> {
  [message: string]: (origin: AccountId | string | Uint8Array, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]) => ContractCallResult<ApiType, ContractCallOutcome>;
}
