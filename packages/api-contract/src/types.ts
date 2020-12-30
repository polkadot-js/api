// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { ApiBase } from '@polkadot/api/base';
import type { ApiTypes } from '@polkadot/api/types';
import type { Text, u64 } from '@polkadot/types';
import type { ContractExecResultResult, ContractSelector } from '@polkadot/types/interfaces';
import type { Codec, CodecArg, TypeDef } from '@polkadot/types/types';
import type { Abi } from '.';

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
  toU8a: (params: CodecArg[], additional?: Uint8Array) => Uint8Array;
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

export interface BlueprintOptions {
  gasLimit?: BigInt | string | number | BN;
  salt?: Uint8Array | string | null;
  value?: BigInt | string | number | BN;
}

export interface ContractOptions {
  gasLimit?: BigInt | BN | string | number;
  value?: BigInt | BN | string | number;
}
