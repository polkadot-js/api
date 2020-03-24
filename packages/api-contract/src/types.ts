// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { AccountId, Address, ContractExecResult } from '@polkadot/types/interfaces';
import { Codec, CodecArg } from '@polkadot/types/types';
import { MetaRegistryJson, StringIndex, TypeIndex, TypeDef } from '@polkadot/types/create/types';

import { ApiPromise, ApiRx } from '@polkadot/api';

export type ApiObject<ApiType extends ApiTypes> = ApiType extends 'rxjs'
  ? ApiRx
  : ApiPromise;

export interface ContractBase<ApiType extends ApiTypes> {
  readonly abi: InterfaceAbi;
  readonly api: ApiObject<ApiType>;
  readonly decorateMethod: DecorateMethod<ApiType>;
  getMessage: (name: string) => ContractMessage;
  messages: ContractMessage[];
}

export interface ContractABITypePre {
  ty: TypeIndex;
  display_name: StringIndex[];
}

export interface ContractABIArgBasePre {
  name: StringIndex;
  type: ContractABITypePre;
}

export interface ContractABIArgBase {
  name: string;
  type: TypeDef;
}

export type ContractABIMessageArgPre = ContractABIArgBasePre;

export type ContractABIMessageArg = ContractABIArgBase;

export interface ContractABIMessageBase {
  args: ContractABIMessageArg[];
}

export interface ContractABIMessageBasePre {
  args: ContractABIMessageArgPre[];
}

export interface ContractABIMessageCommon {
  docs?: ContractABIDocs;
  mutates?: boolean;
  selector: string | number;
}

export interface ContractABIMessagePre extends ContractABIMessageCommon, ContractABIMessageBasePre {
  name: StringIndex;
  return_type: ContractABITypePre | null;
}

export interface ContractABIMessage extends ContractABIMessageCommon {
  args: ContractABIMessageArg[];
  name: string;
  returnType: TypeDef | null;
}

export interface ContractABIContractCommon {
  docs?: ContractABIDocs;
}

export interface ContractABIContractPre extends ContractABIContractCommon {
  constructors: ContractABIMessagePre[];
  messages: ContractABIMessagePre[];
  name: StringIndex;
  events?: ContractABIEventPre[];
  docs?: ContractABIDocs;
}

export interface ContractABIContract extends ContractABIContractCommon {
  constructors: ContractABIMessage[];
  messages: ContractABIMessage[];
  name: string;
  events?: ContractABIEvent[];
  docs?: ContractABIDocs;
}

export interface ContractABIPre extends MetaRegistryJson {
  storage: ContractABIStoragePre;
  contract: ContractABIContractPre;
}

export interface ContractABI {
  storage: ContractABIStorage;
  contract: ContractABIContract;
}

export interface ContractABIFnArg {
  name: string;
  type: TypeDef;
}

export interface ContractABIMeta {
  args: ContractABIFnArg[];
  isConstant: boolean;
  type: TypeDef | null;
}

export interface ContractABIFn extends ContractABIMeta {
  (...args: CodecArg[]): Uint8Array;
}

export interface ContractABIEventArgBase {
  indexed: boolean;
}

export interface ContractABIEventArgPre extends ContractABIArgBasePre, ContractABIEventArgBase {}

export interface ContractABIEventArg extends ContractABIArgBase, ContractABIEventArgBase {}

export type ContractABIDocs = string[];

export interface ContractABIEventPre {
  args: ContractABIEventArgPre[];
}

export interface ContractABIEvent {
  args: ContractABIEventArg[];
}

export interface ContractABIRangeBase {
  // can be number[] (old) or hex (new)
  'range.offset': number[] | string;
  'range.len': number;
}

export interface ContractABIRangePre extends ContractABIRangeBase {
  'range.elem_type': TypeIndex;
}

export interface ContractABIRange extends ContractABIRangeBase {
  'range.elem_type': TypeDef;
}

export type ContractABIStorageLayoutPre = ContractABIStorageStructPre | ContractABIRangePre;

export type ContractABIStorageLayout = ContractABIStorageStruct | ContractABIRange;

export interface ContractABIStorageStructFieldPre {
  name: StringIndex;
  layout: ContractABIStorageLayoutPre;
}

export interface ContractABIStorageStructField {
  name: string;
  layout: ContractABIStorageLayout;
}

export interface ContractABIStorageStructPre {
  'struct.type': TypeIndex;
  'struct.fields': ContractABIStorageStructFieldPre[];
}

export interface ContractABIStorageStruct {
  'struct.type': TypeDef;
  'struct.fields': ContractABIStorageStructField[];
}

export type ContractABIStoragePre = ContractABIStorageStructPre;

export type ContractABIStorage = ContractABIStorageStruct;

export interface ContractMessage {
  index: number;
  fn: ContractABIFn;
  def: ContractABIMessage;
}

export type AbiConstructors = ContractABIFn[];

export type AbiMessages = Record<string, ContractABIFn>;

export interface InterfaceAbi {
  readonly abi: ContractABI;
  readonly constructors: AbiConstructors;
  readonly messages: AbiMessages;
}

export interface InterfaceContractCalls {
  [index: string]: Function;
}

export interface InterfaceContract {
  readonly address: Address;
  readonly calls: InterfaceContractCalls;
}

export interface ContractCallOutcome {
  time: number;
  result: ContractExecResult;
  origin: AccountId;
  output: Codec | null;
  params: any[];
  isSuccess: boolean;
  message: ContractABIMessage;
}
