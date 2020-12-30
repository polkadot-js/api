// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash } from '@polkadot/types/interfaces';
import type { AnyJson } from '@polkadot/types/types';

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import { Abi } from '../Abi';
import { Blueprint as BaseBlueprint } from '../base';

export class Blueprint extends BaseBlueprint<'promise'> {
  constructor (api: ApiPromise, abi: AnyJson | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, decorateMethod);
  }
}
