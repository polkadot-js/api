// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg } from '@polkadot/types/types';

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

export interface ContractABIFn {
  (...args: Array<CodecArg>): Uint8Array;
  args: Array<ContractABIFn$Arg>;
  isConstant: boolean;
  type: string | null;
}
