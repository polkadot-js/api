// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Hash } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import Abi from '../Abi';
import BaseBlueprint from '../base/Blueprint';

export default class Blueprint extends BaseBlueprint<'promise'> {
  constructor (api: ApiPromise, abi: AnyJson | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, decorateMethod);
  }
}
