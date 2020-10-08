// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ContractABIPre } from '../types';

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import Abi from '../Abi';
import Code from '../base/Code';

export default class RxCode extends Code<'rxjs'> {
  constructor (api: ApiRx, abi: ContractABIPre | Abi, wasm: string | Uint8Array) {
    super(api, abi, decorateMethod, wasm);
  }
}
