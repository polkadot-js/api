// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@polkadot/api/base';
import type { ApiTypes } from '@polkadot/api/types';
import type { Text, u64 } from '@polkadot/types';
import type { AccountId, ContractExecResultResult, ContractInstantiateResultResult, ContractSelector, StorageDeposit } from '@polkadot/types/interfaces';
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
  returnType?: TypeDef | null;
  selector: ContractSelector;
  toU8a: (params: unknown[]) => Uint8Array;
}

export type AbiConstructor = AbiMessage;

export interface InterfaceContractCalls {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [index: string]: Function;
}

export interface DryRunOutcome {
  debugMessage: Text;
  gasConsumed: u64;
  gasRequired: u64;
  storageDeposit?: StorageDeposit;
}

export interface ContractCallOutcome extends DryRunOutcome {
  output: Codec | null;
  result: ContractExecResultResult;
}

export interface ContractInstantiateOutcome extends DryRunOutcome {
  accountId: AccountId | null;
  result: ContractInstantiateResultResult;
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
  gasLimit?: bigint | string | number | BN;
  storageDepositLimit?: bigint | string | number | BN | null;
  value?: bigint | BN | string | number;
}

export interface BlueprintOptions extends ContractOptions {
  salt?: Uint8Array | string | null;
}
