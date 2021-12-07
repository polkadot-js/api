// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiRx } from '@polkadot/api';

import { toRxMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Code as BaseCode } from '../base';

export class Code extends BaseCode<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, wasm, toRxMethod);
  }
}
