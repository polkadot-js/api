// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyJson } from '@polkadot/types/types';

import { ApiRx } from '@polkadot/api';
import { decorateMethod } from '@polkadot/api/rx';

import { Abi } from '../Abi';
import { Code as BaseCode } from '../base';

export class Code extends BaseCode<'rxjs'> {
  constructor (api: ApiRx, abi: AnyJson | Abi, wasm: Uint8Array | string | Buffer) {
    super(api, abi, wasm, decorateMethod);
  }
}
