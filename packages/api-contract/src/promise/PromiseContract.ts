// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId } from '@polkadot/types/interfaces';

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import InkAbi from '../InkAbi';
import Contract from '../base/Contract';

export default class PromiseContract extends Contract<'promise'> {
  constructor (api: ApiPromise, abi: InkAbi, address: string | AccountId) {
    super(api, abi, decorateMethod, address);
  }
}
