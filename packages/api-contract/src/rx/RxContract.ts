// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { ContractABIPre } from '../types';

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import Abi from '../Abi';
import Contract from '../base/Contract';

export default class RxContract extends Contract<'rxjs'> {
  constructor (api: ApiRx, abi: ContractABIPre | Abi, address: string | AccountId) {
    super(api, abi, decorateMethod, address);
  }
}
