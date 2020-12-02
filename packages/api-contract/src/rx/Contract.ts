// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from '@polkadot/types/interfaces';
import type { AnyJson } from '@polkadot/types/types';

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import { Abi } from '../Abi';
import { Contract as BaseContract } from '../base';

export class Contract extends BaseContract<'rxjs'> {
  constructor (api: ApiRx, abi: AnyJson | Abi, address: string | AccountId) {
    super(api, abi, address, decorateMethod);
  }
}
