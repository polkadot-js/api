// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubmittableModuleExtrinsics } from '@polkadot/api/types';
import { CodecArg } from '@polkadot/types/types';

import { ApiPromise, ApiRx } from '@polkadot/api';
import { Address } from '@polkadot/types';

export type ApiObject<ApiType> = ApiType extends 'rxjs'
  ? ApiRx
  : ApiPromise;

export interface ContractABITypesStruct {
  'Option<T>'?: {
    T: ContractABITypes;
  };
  'Result<T,E>'?: {
    T: ContractABITypes;
    E: ContractABITypes;
  };
  'Vec<T>'?: {
    T: ContractABITypes;
  };
  '[T;n]'?: {
    T: ContractABITypes;
    n: number;
  };
}

export type ContractABITypes = string | ContractABITypesStruct | (string | ContractABITypesStruct)[];

export interface ContractABIArg {
  name: string;
  type: ContractABITypes;
}

export interface ContractABIMethodBase {
  args: ContractABIArg[];
}

export interface ContractABIMethod extends ContractABIMethodBase {
  mutates?: boolean;
  name: string;
  selector: number;
  return_type: ContractABITypes | null;
}

export interface ContractABI {
  deploy: ContractABIMethodBase;
  messages: ContractABIMethod[];
  name: string;
}

export interface ContractABIFnArg {
  name: string;
  type: string;
}

export interface ContractABIMeta {
  args: ContractABIFnArg[];
  isConstant: boolean;
  type: string | null;
}

export interface ContractABIFn extends ContractABIMeta {
  (...args: CodecArg[]): Uint8Array;
}

export type AbiMessages = Record<string, ContractABIFn>;

export interface InterfaceAbi {
  readonly abi: ContractABI;
  readonly deploy: ContractABIFn;
  readonly messages: AbiMessages;
}

export interface ContractBase<ApiType> {
  readonly abi: InterfaceAbi;
  readonly api: ApiObject<ApiType>;
  readonly apiContracts: SubmittableModuleExtrinsics<ApiType>;
}

export interface InterfaceContractCalls {
  [index: string]: Function;
}

export interface InterfaceContract {
  readonly address: Address;
  readonly calls: InterfaceContractCalls;
}
