// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { AnyJson } from '@polkadot/types/types';

import { decorateMethod } from '@polkadot/api/promise';

import { Abi } from '../Abi';
import { Code as BaseCode } from '../base';

export class Code extends BaseCode<'promise'> {
  constructor (api: ApiPromise, abi: AnyJson | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, wasm, decorateMethod);
  }
}
