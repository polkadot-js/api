// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from '@polkadot/types/interfaces';
import type { AnyJson } from '@polkadot/types/types';

import { ApiPromise, toPromiseMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Contract as BaseContract } from '../base';

export class Contract extends BaseContract<'promise'> {
  constructor (api: ApiPromise, abi: AnyJson | Abi, address: string | AccountId) {
    super(api, abi, address, toPromiseMethod);
  }
}
