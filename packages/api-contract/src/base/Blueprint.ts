// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { AccountId, EventRecord, Hash } from '@polkadot/types/interfaces';
import type { AnyJson, CodecArg, ISubmittableResult } from '@polkadot/types/types';
import type { AbiConstructor, BlueprintOptions } from '../types';
import type { ContractGeneric, MapConstructorExec } from './types';

import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { isUndefined, stringCamelCase } from '@polkadot/util';

import { Abi } from '../Abi';
import { applyOnEvent } from '../util';
import { Base } from './Base';
import { Contract } from './Contract';
import { createBluePrintTx, createBluePrintWithId, EMPTY_SALT, encodeSalt } from './util';

export class BlueprintSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>) {
    super(result);

    this.contract = contract;
  }
}

export class Blueprint<ApiType extends ApiTypes> extends Base<ApiType> {
  /**
   * @description The on-chain code hash for this blueprint
   */
  public readonly codeHash: Hash;

  /**
   * @deprecated
   * @description Deprecated. Use `.tx.<constructorName>`. Creates a contract in a non-deterministic way.
   */
  public readonly createContract: ContractGeneric<BlueprintOptions, SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>>>;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, codeHash: string | Hash | Uint8Array, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.codeHash = this.registry.createType('Hash', codeHash);
    this.createContract = createBluePrintWithId(this.#deploy);

    this.abi.constructors.forEach((c): void => {
      const messageName = stringCamelCase(c.identifier);

      if (isUndefined(this.#tx[messageName])) {
        this.#tx[messageName] = createBluePrintTx((o, p) => this.#deploy(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #deploy = (constructorOrId: AbiConstructor | string | number, { gasLimit = 0, salt, value = 0 }: BlueprintOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    const encodedSalt = encodeSalt(salt);
    const withSalt = this.api.tx.contracts.instantiate.meta.args.length === 5;
    const encoded = this.abi.findConstructor(constructorOrId).toU8a(params, withSalt ? EMPTY_SALT : encodedSalt);
    const tx = withSalt
      ? this.api.tx.contracts.instantiate(value, gasLimit, this.codeHash, encoded, encodedSalt)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore old style with salt included
      : this.api.tx.contracts.instantiate(value, gasLimit, this.codeHash, encoded);

    return tx.withResultTransform((result: ISubmittableResult) =>
      new BlueprintSubmittableResult(result, applyOnEvent(result, ['Instantiated'], ([record]: EventRecord[]) =>
        new Contract<ApiType>(this.api, this.abi, record.event.data[1] as AccountId, this._decorateMethod)
      ))
    );
  }
}
