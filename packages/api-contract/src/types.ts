// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubmittableModuleExtrinsics } from '@polkadot/api/types';
import { Address } from '@polkadot/types/interfaces';
import { CodecArg } from '@polkadot/types/types';
import { MetaRegistryJson, StringIndex, TypeIndex } from '@polkadot/types/codec/create/types';

import { ApiPromise, ApiRx } from '@polkadot/api';

export interface ContractABIBase {
  isV2: boolean;
  data: any;
}

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
  name: string | StringIndex;
  type: ContractABITypes;
}

export interface ContractABIMethodBase {
  args: ContractABIArg[];
}

export interface ContractABIMethod extends ContractABIMethodBase {
  mutates?: boolean;
  name: string | StringIndex;
  selector: number;
  return_type: ContractABITypes | null;
}

export interface ContractABI {
  deploy: ContractABIMethodBase;
  messages: ContractABIMethod[];
  name: string | StringIndex;
  events?: ContractABIEvent[];
  docs?: ContractABIDocs;
}

export type ContractABIV1Data = ContractABI;

export interface ContractABIV1 {
  isV2: false;
  data: ContractABIV1Data;
}

export interface ContractABIV2Data extends MetaRegistryJson {
  storage: ContractABIStorage;
  contract: ContractABI;
}

export interface ContractABIV2 {
  isV2: true;
  data: ContractABIV2Data;
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

export interface ContractABIEventArg {
  name: string;
  indexed: boolean;
  type: string;
}

export type ContractABIDocs = string[];

export interface ContractABIEvent extends ContractABIMethodBase {
  args: ContractABIEventArg[];
}

export interface ContractABIRange {
  'range.offset': number[];
  'range.len': number;
  'range.elem_type': TypeIndex;
}

export type ContractABIStorageLayout = ContractABIStorageStruct | ContractABIRange;

export interface ContractABIStorageStructField {
  name: StringIndex;
  layout: ContractABIStorageLayout;
}

export interface ContractABIStorageStruct {
  'struct.type': TypeIndex;
  'struct.fields': ContractABIStorageStructField[];
}

export type ContractABIStorage = ContractABIStorageStruct;

export type AbiMessages = Record<string, ContractABIFn>;

export interface InterfaceAbi {
  readonly abi: ContractABI;
  readonly deploy: ContractABIFn;
  readonly messages: AbiMessages;
  readonly isV2: boolean;
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
