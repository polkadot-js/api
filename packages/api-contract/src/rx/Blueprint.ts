// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@polkadot/types/interfaces';
import type { AnyJson } from '@polkadot/types/types';

import { ApiRx, toRxMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Blueprint as BaseBlueprint } from '../base';

export class Blueprint extends BaseBlueprint<'rxjs'> {
  constructor (api: ApiRx, abi: AnyJson | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, toRxMethod);
  }
}
