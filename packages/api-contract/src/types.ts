// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes } from '@polkadot/api/types';
import { ContractExecResultResult, ContractSelector } from '@polkadot/types/interfaces';
import { Codec, CodecArg, TypeDef } from '@polkadot/types/types';

import ApiBase from '@polkadot/api/base';
import { Text, u64 } from '@polkadot/types';

import Abi from './Abi';

export interface ContractBase<ApiType extends ApiTypes> {
  readonly abi: Abi;
  readonly api: ApiBase<ApiType>;

  getMessage: (name: string) => AbiMessage;
  messages: AbiMessage[];
}

export interface AbiParam {
  name: string;
  type: TypeDef;
}

export interface AbiEvent {
  args: AbiParam[];
  docs: string[];
  fromU8a: (data: Uint8Array) => DecodedEvent;
  identifier: string;
  index: number;
}

export interface AbiMessage {
  args: AbiParam[];
  docs: string[];
  fromU8a: (data: Uint8Array) => DecodedMessage;
  identifier: string;
  index: number;
  isConstructor?: boolean;
  isMutating?: boolean;
  isPayable?: boolean;
  returnType?: TypeDef | null;
  selector: ContractSelector;
  toU8a: (params: CodecArg[]) => Uint8Array;
}

export type AbiConstructor = AbiMessage;

export interface InterfaceContractCalls {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [index: string]: Function;
}

export interface ContractCallOutcome {
  debugMessage: Text;
  gasConsumed: u64;
  output: Codec | null;
  result: ContractExecResultResult;
}

export interface DecodedEvent {
  args: Codec[];
  event: AbiEvent;
}

export interface DecodedMessage {
  args: Codec[];
  message: AbiMessage;
}
