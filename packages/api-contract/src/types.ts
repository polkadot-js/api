// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubmittableModuleExtrinsics } from '@polkadot/api/types';
import { Address } from '@polkadot/types/interfaces';
import { CodecArg } from '@polkadot/types/types';
import { MetaRegistryJson, StringIndex, TypeIndex } from '@polkadot/types/codec/create/types';

import { ApiPromise, ApiRx } from '@polkadot/api';

export type ApiObject<ApiType> = ApiType extends 'rxjs'
  ? ApiRx
  : ApiPromise;

export interface ContractABIArg {
  name: StringIndex;
  type: TypeIndex;
}

export interface ContractABIMethodBase {
  args: ContractABIArg[];
}

export interface ContractABIMethod extends ContractABIMethodBase {
  mutates?: boolean;
  name: StringIndex;
  selector: number;
  return_type: TypeIndex;
}

export interface ContractABIContract {
  deploy: ContractABIMethodBase;
  messages: ContractABIMethod[];
  name: StringIndex;
  events?: ContractABIEvent[];
  docs?: ContractABIDocs;
}

export interface ContractABI extends MetaRegistryJson {
  storage: ContractABIStorage;
  contract: ContractABIContract;
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
  name: StringIndex;
  indexed: boolean;
  type: TypeIndex;
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
