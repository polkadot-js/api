// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@polkadot/api/base';
import type { ApiTypes } from '@polkadot/api/types';
import type { Text } from '@polkadot/types';
import type { ContractExecResultResult, ContractSelector, StorageDeposit, Weight, WeightV2 } from '@polkadot/types/interfaces';
import type { Codec, TypeDef } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
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
  method: string;
  path: string[];
  returnType?: TypeDef | null;
  selector: ContractSelector;
  toU8a: (params: unknown[]) => Uint8Array;
}

export type AbiConstructor = AbiMessage;

export interface InterfaceContractCalls {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [index: string]: Function;
}

export interface ContractCallOutcome {
  debugMessage: Text;
  gasConsumed: Weight;
  gasRequired: Weight;
  output: Codec | null;
  result: ContractExecResultResult;
  storageDeposit: StorageDeposit;
}

export interface DecodedEvent {
  args: Codec[];
  event: AbiEvent;
}

export interface DecodedMessage {
  args: Codec[];
  message: AbiMessage;
}

export interface ContractOptions {
  gasLimit?: bigint | string | number | BN | WeightV2;
  storageDepositLimit?: bigint | string | number | BN | null;
  value?: bigint | BN | string | number;
}

export interface BlueprintOptions extends ContractOptions {
  salt?: Uint8Array | string | null;
}

export interface WeightAll {
  v1Weight: BN;
  v2Weight: {
    refTime: BN;
    proofSize?: BN;
  };
}
