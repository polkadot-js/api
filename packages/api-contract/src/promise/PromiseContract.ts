// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { ContractABIPre } from '../types';

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import Abi from '../Abi';
import Contract from '../base/Blueprint';

export default class PromiseContract extends Contract<'promise'> {
  public constructor (api: ApiPromise, abi: ContractABIPre | Abi, address: string | AccountId) {
    super(api, abi, decorateMethod, address);
  }
}
