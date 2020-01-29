// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '@polkadot/types/interfaces';
import { ContractABIPre } from '../types';

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import Abi from '../Abi';
import Blueprint from '../base/Blueprint';

export default class PromiseBlueprint extends Blueprint<'promise'> {
  constructor (api: ApiPromise, abi: ContractABIPre | Abi, codeHash: string | Hash) {
    super(api, abi, decorateMethod, codeHash);
  }
}
