// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import InkAbi from '../InkAbi';
import Code from '../base/Code';

export default class RxCode extends Code<'rxjs'> {
  constructor (api: ApiRx, abi: InkAbi, wasm: string | Uint8Array) {
    super(api, abi, decorateMethod, wasm);
  }
}
