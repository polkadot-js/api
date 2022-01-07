// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, CodeSource, Hash } from '@polkadot/types/interfaces';

import { ApiPromise, toPromiseMethod } from '@polkadot/api';

import { Abi } from '../Abi';
import { Blueprint, Contract } from '../base';

export class BlueprintPromise extends Blueprint<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, source: string | Record<string, unknown> | CodeSource | Uint8Array) {
    super(api, abi, source, toPromiseMethod);
  }
}

export class BlueprintExistingPromise extends BlueprintPromise {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash) {
    super(api, abi, { Existing: codeHash });
  }
}

export class BlueprintUploadPromise extends BlueprintPromise {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, { Upload: wasm });
  }
}

export class ContractPromise extends Contract<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
    super(api, abi, address, toPromiseMethod);
  }
}
