// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import Abi from '../Abi';
import Contract from '../base/Contract';

export default class RxContract extends Contract<'rxjs'> {
  constructor (api: ApiRx, abi: AnyJson | Abi, address: string | AccountId) {
    super(api, abi, decorateMethod, address);
  }
}
