// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@polkadot/types/interfaces';

import { ApiPromise, toPromiseMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Blueprint as BaseBlueprint } from '../base';

export class Blueprint extends BaseBlueprint<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, toPromiseMethod);
  }
}
