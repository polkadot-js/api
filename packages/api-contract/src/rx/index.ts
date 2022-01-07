// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, CodeSource, Hash } from '@polkadot/types/interfaces';

import { ApiRx, toRxMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Blueprint, Contract } from '../base';

export class BlueprintRx extends Blueprint<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, source: string | Record<string, unknown> | CodeSource | Uint8Array) {
    super(api, abi, source, toRxMethod);
  }
}

export class BlueprintExistingRx extends BlueprintRx {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash) {
    super(api, abi, { Existing: codeHash });
  }
}

export class BlueprintUploadRx extends BlueprintRx {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, { Upload: wasm });
  }
}

export class ContractRx extends Contract<'rxjs'> {
  constructor (api: ApiRx, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
    super(api, abi, address, toRxMethod);
  }
}
