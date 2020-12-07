// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { EventRecord, Hash } from '@polkadot/types/interfaces';
import type { AnyJson, ISubmittableResult } from '@polkadot/types/types';

import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { assert, compactAddLength, isWasm, u8aToU8a } from '@polkadot/util';

import { Abi } from '../Abi';
import { applyOnEvent } from '../util';
import { Base } from './Base';
import { Blueprint } from './Blueprint';

export class CodeSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly blueprint?: Blueprint<ApiType>;

  constructor (result: ISubmittableResult, blueprint?: Blueprint<ApiType>) {
    super(result);

    this.blueprint = blueprint;
  }
}

export class Code<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly code: Uint8Array;

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, wasm: Uint8Array | string | Buffer | null | undefined, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.code = isWasm(this.abi.project.source.wasm)
      ? this.abi.project.source.wasm
      : u8aToU8a(wasm);

    assert(isWasm(this.code), 'No WASM code provided');
  }

  /**
   * @description Deploy the code bundle, creating a Blueprint.
   */
  public createBlueprint (): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> {
    return this.api.tx.contracts
      .putCode(compactAddLength(this.code))
      .withResultTransform((result: ISubmittableResult) =>
        new CodeSubmittableResult(result, applyOnEvent(result, 'CodeStored', ([record]: EventRecord[]) =>
          new Blueprint<ApiType>(this.api, this.abi, record.event.data[0] as Hash, this._decorateMethod)
        ))
      );
  }
}
