// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';
import { ContractABIFnArg } from './types';

import { createClass, formatType } from '@polkadot/types';

export function createArgClass (args: ContractABIFnArg[], baseDef: Record<string, string>): Constructor {
  return createClass(
    JSON.stringify(
      args.reduce((base: Record<string, any>, { name, type }): Record<string, any> => {
        base[name] = formatType(type);

        return base;
      }, baseDef)
    )
  );
}
