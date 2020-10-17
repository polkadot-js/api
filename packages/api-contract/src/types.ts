// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes } from '@polkadot/api/types';
import { ContractExecResult, ContractSelector } from '@polkadot/types/interfaces';
import { Codec, TypeDef } from '@polkadot/types/types';

import ApiBase from '@polkadot/api/base';
import Abi from './Abi';

export interface ContractBase<ApiType extends ApiTypes> {
  readonly abi: Abi;
  readonly api: ApiBase<ApiType>;

  getMessage: (name: string) => AbiMessage;
  messages: AbiMessage[];
}

export interface AbiMessageParam {
  name: string;
  type: TypeDef;
}

export interface AbiMessage {
  args: AbiMessageParam[];
  docs: string[];
  identifier: string;
  index: number;
  isConstructor?: boolean;
  isMutating?: boolean;
  isPayable?: boolean;
  returnType?: TypeDef | null;
  selector: ContractSelector;
}

export type AbiConstructor = AbiMessage;

export interface InterfaceContractCalls {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [index: string]: Function;
}

export interface ContractCallOutcome {
  output: Codec | null;
  result: ContractExecResult;
}
