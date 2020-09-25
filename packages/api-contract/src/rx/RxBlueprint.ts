// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Hash } from '@polkadot/types/interfaces';

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import InkAbi from '../InkAbi';
import Blueprint from '../base/Blueprint';

export default class RxBlueprint extends Blueprint<'rxjs'> {
  constructor (api: ApiRx, abi: InkAbi, codeHash: string | Hash) {
    super(api, abi, decorateMethod, codeHash);
  }
}
