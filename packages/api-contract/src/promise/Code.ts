// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/promise';
import { AnyJson } from '@polkadot/types/types';

import Abi from '../Abi';
import BaseCode from '../base/Code';

export default class Code extends BaseCode<'promise'> {
  constructor (api: ApiPromise, abi: AnyJson | Abi, wasm: Uint8Array | string | Buffer) {
    super(api, abi, wasm, decorateMethod);
  }
}
