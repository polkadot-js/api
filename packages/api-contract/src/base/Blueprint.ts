// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId, EventRecord, Hash } from '@polkadot/types/interfaces';
import { AnyJson, CodecArg, ISubmittableResult } from '@polkadot/types/types';
import { AbiConstructor } from '../types';
import { BlueprintDeploy, BlueprintOptions, MapConstructorExec } from './types';

import BN from 'bn.js';
import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { Bytes } from '@polkadot/types';
import { isBn, isBigInt, isNumber, isString, isUndefined, stringCamelCase, compactAddLength, u8aToU8a } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

import { Abi } from '../Abi';
import { applyOnEvent } from '../util';
import { Base } from './Base';
import { Contract } from './Contract';

const EMPTY_SALT = new Uint8Array();

function isOptions (options: BigInt | string | number | BN | BlueprintOptions): options is BlueprintOptions {
  return !(isBn(options) || isBigInt(options) || isNumber(options) || isString(options));
}

function createTx <ApiType extends ApiTypes> (fn: (options: BlueprintOptions, params: CodecArg[]) => SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>>): BlueprintDeploy<ApiType> {
  return (options: BigInt | string | number | BN | BlueprintOptions, ...params: CodecArg[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    if (isOptions(options)) {
      return fn(options, params);
    }

    const gasLimit = params.shift() as BN;

    return fn({ endowment: options, gasLimit }, params);
  };
}

export class BlueprintSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>) {
    super(result);

    this.contract = contract;
  }
}

export class Blueprint<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly codeHash: Hash;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, codeHash: string | Hash | Uint8Array, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.codeHash = this.registry.createType('Hash', codeHash);

    this.abi.constructors.forEach((c): void => {
      const messageName = stringCamelCase(c.identifier);

      if (isUndefined(this.#tx[messageName])) {
        this.#tx[messageName] = createTx((o, p) => this.#deploy(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #deploy = (constructorOrId: AbiConstructor | string| number, { endowment, gasLimit, salt = randomAsU8a() }: BlueprintOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    const encodedSalt = salt instanceof Bytes
      ? salt.toU8a()
      : compactAddLength(u8aToU8a(salt));
    const withSalt = this.api.tx.contracts.instantiate.meta.args.length === 5;
    const encoded = this.abi.findConstructor(constructorOrId).toU8a(params, withSalt ? EMPTY_SALT : encodedSalt);
    const tx = withSalt
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore new style with salt included
      ? this.api.tx.contracts.instantiate(endowment, gasLimit, this.codeHash, encoded, encodedSalt)
      : this.api.tx.contracts.instantiate(endowment, gasLimit, this.codeHash, encoded);

    return tx.withResultTransform((result: ISubmittableResult) =>
      new BlueprintSubmittableResult(result, applyOnEvent(result, 'Instantiated', ([record]: EventRecord[]) =>
        new Contract<ApiType>(this.api, this.abi, record.event.data[1] as AccountId, this._decorateMethod)
      ))
    );
  }

  /**
   * @deprecated
   * @description Deprecated. Use `.tx.<constructorName>`. Creates a contract in a non-deterministic way.
   */
  public createContract (constructorOrId: AbiConstructor | string| number, endowment: BigInt | string | number | BN, gasLimit: BigInt | string | number | BN, ...params: CodecArg[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> {
    return this.#deploy(constructorOrId, { endowment, gasLimit }, params);
  }
}
