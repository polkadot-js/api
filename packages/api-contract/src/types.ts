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

export type ContractABITypes$Struct = {
  'Option<T>'?: {
    T: ContractABITypes
  },
  'Result<T,E>'?: {
    T: ContractABITypes,
    E: ContractABITypes
  },
  'Vec<T>'?: {
    T: ContractABITypes
  },
  '[T;n]'?: {
    T: ContractABITypes,
    n: number
  }
};

export type ContractABITypes = string | ContractABITypes$Struct | Array<string | ContractABITypes$Struct>;

export type ContractABIArg = {
  name: string,
  type: ContractABITypes
};

export type ContractABIMethodBase = {
  args: Array<ContractABIArg>
};

export type ContractABIMethod = ContractABIMethodBase & {
  mutates?: boolean,
  name: string,
  selector: number,
  return_type: ContractABITypes | null
};

export type ContractABI = {
  deploy: ContractABIMethodBase,
  messages: Array<ContractABIMethod>,
  name: string
};

export interface ContractABIFn$Arg {
  name: string;
  type: string;
}

export interface ContractABIFn$Meta {
  args: Array<ContractABIFn$Arg>;
  isConstant: boolean;
  type: string | null;
}

export interface ContractABIFn extends ContractABIFn$Meta {
  (...args: Array<CodecArg>): Uint8Array;
}

export interface IAbi$Messages {
  [index: string]: ContractABIFn;
}

export interface IAbi {
  readonly abi: ContractABI;
  readonly deploy: ContractABIFn;
  readonly messages: IAbi$Messages;
}

export interface IContractBase<ApiType> {
  readonly abi: IAbi;
  readonly api: ApiObject<ApiType>;
  readonly apiContracts: SubmittableModuleExtrinsics<ApiType>;
}

export interface IContract$Calls {
  [index: string]: Function;
}

export interface IContract {
  readonly address: Address;
  readonly calls: IContract$Calls;
}
