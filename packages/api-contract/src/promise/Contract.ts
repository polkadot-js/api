// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import Abi from '../Abi';
import BaseContract from '../base/Contract';

export default class Contract extends BaseContract<'promise'> {
  constructor (api: ApiPromise, abi: AnyJson | Abi, address: string | AccountId) {
    super(api, abi, address, decorateMethod);
  }
}
