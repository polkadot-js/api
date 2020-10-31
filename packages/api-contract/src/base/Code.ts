// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { EventRecord, Hash } from '@polkadot/types/interfaces';
import { AnyJson, ISubmittableResult } from '@polkadot/types/types';

import { SubmittableResult } from '@polkadot/api';
import ApiBase from '@polkadot/api/base';
import { compactAddLength, u8aToU8a } from '@polkadot/util';

import Abi from '../Abi';
import { applyOnEvent } from '../util';
import Base from './Base';
import Blueprint from './Blueprint';

export class CodeSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly blueprint?: Blueprint<ApiType>;

  constructor (result: ISubmittableResult, blueprint?: Blueprint<ApiType>) {
    super(result);

    this.blueprint = blueprint;
  }
}

export default class Code<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly code: Uint8Array;

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, wasm: Uint8Array | string | Buffer, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.code = u8aToU8a(wasm);
  }

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
