// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { Codec, CodecArg, TypeDef } from '@polkadot/types/types';

import { ApiPromise, ApiRx } from '@polkadot/api';
import Abi from './Abi';

export type ApiObject<ApiType extends ApiTypes> = ApiType extends 'rxjs'
  ? ApiRx
  : ApiPromise;

export interface ContractBase<ApiType extends ApiTypes> {
  readonly abi: Abi;
  readonly api: ApiObject<ApiType>;

  getMessage: (name: string) => ContractMessage;
  messages: ContractMessage[];
}

export interface ContractType {
  displayName?: string;
  type: TypeDef;
}

export interface ContractMessageParam {
  name: string;
  type: TypeDef;
}

export interface ContractMessageBase {
  args: ContractMessageParam[];
  docs: string[];
  identifier: string;
  isConstructor?: boolean;
  selector: string;

  (...args: CodecArg[]): Uint8Array;
}

export type ContractConstructor = ContractMessageBase;

export interface ContractMessage extends ContractMessageBase {
  isMutating: boolean;
  isPayable: boolean;
  returnType: ContractType | null;
}

export type ContractConstructors = ContractMessage[];

export type ContractMessages = ContractMessage[];

export interface InterfaceContractCalls {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [index: string]: Function;
}

export interface InterfaceContract {
  readonly address: Address;
  readonly calls: InterfaceContractCalls;
}

export interface ContractCallOutcome {
  isSuccess: boolean;
  message: ContractMessage;
  origin: AccountId;
  output: Codec | null;
  params: any[];
  result: ContractExecResult;
  time: number;
  type: TypeDef | null;
}
