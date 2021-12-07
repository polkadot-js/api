// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from '@polkadot/types/interfaces';

import { ApiRx, toRxMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Contract as BaseContract } from '../base';

export class Contract extends BaseContract<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
    super(api, abi, address, toRxMethod);
  }
}
