// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';

import InkAbi from '../InkAbi';
import Code from '../base/Code';

export default class PromiseCode extends Code<'promise'> {
  constructor (api: ApiPromise, abi: InkAbi, wasm: string | Uint8Array) {
    super(api, abi, decorateMethod, wasm);
  }
}
