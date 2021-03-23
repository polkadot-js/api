// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { EventRecord } from '@polkadot/types/interfaces';
import type { AnyJson, CodecArg, ISubmittableResult } from '@polkadot/types/types';
import type { AbiConstructor, BlueprintOptions } from '../types';
import type { MapConstructorExec } from './types';

import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { assert, compactAddLength, isFunction, isUndefined, isWasm, logger, stringCamelCase, u8aToU8a } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { Abi } from '../Abi';
import { applyOnEvent } from '../util';
import { Base } from './Base';
import { Blueprint } from './Blueprint';
import { Contract } from './Contract';
import { createBluePrintTx, EMPTY_SALT, encodeSalt } from './util';

const l = logger('Code');

export class CodeSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly blueprint?: Blueprint<ApiType>;
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, blueprint?: Blueprint<ApiType>, contract?: Contract<ApiType>) {
    super(result);

    this.blueprint = blueprint;
    this.contract = contract;
  }
}

export class Code<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly code: Uint8Array;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, wasm: Uint8Array | string | Buffer | null | undefined, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.code = isWasm(this.abi.project.source.wasm)
      ? this.abi.project.source.wasm
      : u8aToU8a(wasm);

    assert(isWasm(this.code), 'No WASM code provided');

    this.abi.constructors.forEach((c): void => {
      const messageName = stringCamelCase(c.identifier);

      if (isUndefined(this.#tx[messageName])) {
        this.#tx[messageName] = createBluePrintTx((o, p) => this.#instantiate(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  /**
   * @description Deploy the code bundle and the contract, creating a Blueprint.
   * @deprecated Use the `code.tx.<constructor>(...) format to put code and deploy
   */
  public createContract (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> {
    l.warn('.createContract is deprecated, use code.tx.<constructorName>(...) instead (where code refers to this instance)');

    return this.#instantiate(constructorOrId, options, params);
  }

  #instantiate = (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> => {
    return isFunction(this.api.tx.contracts.instantiateWithCode)
      ? this.#instantiateCurrent(constructorOrId, options, params)
      : this.#instantiatePrev(constructorOrId, options, params);
  }

  #instantiateCurrent = (constructorOrId: AbiConstructor | string | number, { gasLimit = 0, salt, value = 0 }: BlueprintOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> => {
    return this.api.tx.contracts
      .instantiateWithCode(value, gasLimit, compactAddLength(this.code), this.abi.findConstructor(constructorOrId).toU8a(params), encodeSalt(salt))
      .withResultTransform(this.#transformEvents);
  }

  #instantiatePrev = (constructorOrId: AbiConstructor | string | number, { gasLimit = 0, salt, value = 0 }: BlueprintOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> => {
    assert(isFunction(this.api.tx.utility?.batch), 'Your chain does not include the utility pallet, for contracts v2 deployment, this is required');

    const encodedSalt = encodeSalt(salt);
    const withSalt = this.api.tx.contracts.instantiate.meta.args.length === 5;
    const encoded = this.abi.findConstructor(constructorOrId).toU8a(params, withSalt ? EMPTY_SALT : encodedSalt);
    const codeHash = blake2AsU8a(this.code);

    return this.api.tx.utility.batch([
      this.api.tx.contracts.putCode(compactAddLength(this.code)),
      withSalt
        ? this.api.tx.contracts.instantiate(value, gasLimit, codeHash, encoded, encodedSalt)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore old style with salt included in the params itself
        : this.api.tx.contracts.instantiate(value, gasLimit, codeHash, encoded)
    ]).withResultTransform(this.#transformEvents);
  }

  #transformEvents = (result: ISubmittableResult): CodeSubmittableResult<ApiType> => {
    return new CodeSubmittableResult(result, ...(applyOnEvent(result, ['CodeStored', 'Instantiated'], (records: EventRecord[]) =>
      records.reduce(([blueprint, contract], { event }): [Blueprint<ApiType>?, Contract<ApiType>?] =>
        this.api.events.contracts.Instantiated.is(event)
          ? [blueprint, new Contract<ApiType>(this.api, this.abi, event.data[1], this._decorateMethod)]
          : this.api.events.contracts.CodeStored.is(event)
            ? [new Blueprint<ApiType>(this.api, this.abi, event.data[0], this._decorateMethod), contract]
            : [blueprint, contract],
      [] as [Blueprint<ApiType>?, Contract<ApiType>?])
    ) || []));
  }
}
