// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId, EventRecord, Hash } from '@polkadot/types/interfaces';
import { AnyJson, CodecArg, ISubmittableResult } from '@polkadot/types/types';
import { AbiConstructor } from '../types';
import { MapConstructorExec } from './types';

import BN from 'bn.js';
import { SubmittableResult } from '@polkadot/api';
import ApiBase from '@polkadot/api/base';
import { isUndefined, stringCamelCase } from '@polkadot/util';

import Abi from '../Abi';
import { applyOnEvent } from '../util';
import Base from './Base';
import Contract from './Contract';

export class BlueprintSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>) {
    super(result);

    this.contract = contract;
  }
}

export default class Blueprint<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly codeHash: Hash;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, codeHash: string | Hash | Uint8Array, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.codeHash = this.registry.createType('Hash', codeHash);

    this.abi.constructors.forEach((c): void => {
      const messageName = stringCamelCase(c.identifier);

      if (isUndefined(this.#tx[messageName])) {
        this.#tx[messageName] = (endowment: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, ...params: CodecArg[]) =>
          this.#deploy(c, endowment, gasLimit, params);
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #deploy = (constructorOrId: AbiConstructor | string| number, endowment: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, params: CodecArg[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    return this.api.tx.contracts
      .instantiate(endowment, gasLimit, this.codeHash, this.abi.findConstructor(constructorOrId).toU8a(params))
      .withResultTransform((result: ISubmittableResult) =>
        new BlueprintSubmittableResult(result, applyOnEvent(result, 'Instantiated', ([record]: EventRecord[]) =>
          new Contract<ApiType>(this.api, this.abi, record.event.data[1] as AccountId, this._decorateMethod)
        ))
      );
  }

  public createContract (constructorOrId: AbiConstructor | string| number, endowment: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, ...params: CodecArg[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> {
    return this.#deploy(constructorOrId, endowment, gasLimit, params);
  }
}
