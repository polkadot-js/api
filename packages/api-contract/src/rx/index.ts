// Copyright 2017-2024 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiRx } from '@polkadot/api';
import type { AccountId, Hash } from '@polkadot/types/interfaces';
import type { Abi } from '../Abi/index.js';

import { toRxMethod } from '@polkadot/api';

import { Blueprint, Code, Contract } from '../base/index.js';

export class BlueprintRx extends Blueprint<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, toRxMethod);
  }
}

export class CodeRx extends Code<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, wasm, toRxMethod);
  }
}

export class ContractRx extends Contract<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
    super(api, abi, address, toRxMethod);
  }
}
