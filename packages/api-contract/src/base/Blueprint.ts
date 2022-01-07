// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { AccountId, CodeSource, ContractInstantiateResult, EventRecord, Hash } from '@polkadot/types/interfaces';
import type { ISubmittableResult } from '@polkadot/types/types';
import type { AbiConstructor, BlueprintOptions, ContractInstantiateOutcome } from '../types';
import type { BlueprintQuery, BlueprintTx, ContractInstantiateSend, ContractResult, MapConstructorExec, MapConstructorQuery } from './types';

import BN from 'bn.js';
import { map } from 'rxjs';

import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { assert, BN_ZERO, compactAddLength, isFunction, isUndefined } from '@polkadot/util';

import { Abi } from '../Abi';
import { applyOnEvent, extractOptions, isOptions } from '../util';
import { Base } from './Base';
import { Contract } from './Contract';
import { encodeSalt } from './util';

const ERROR_NO_INSTANTIATE = 'Your node does not expose the contracts.instantiate RPC. This is most probably due to a runtime configuration.';

function createQuery <ApiType extends ApiTypes> (hasStorageDeposit = false, fn: (origin: string | AccountId | Uint8Array, options: BlueprintOptions, params: unknown[]) => ContractResult<ApiType, ContractInstantiateOutcome>): BlueprintQuery<ApiType> {
  return (origin: string | AccountId | Uint8Array, options: bigint | string | number | BN | BlueprintOptions, ...params: unknown[]): ContractResult<ApiType, ContractInstantiateOutcome> =>
    isOptions(options)
      ? fn(origin, options, params)
      : fn(origin, ...extractOptions<BlueprintOptions>(hasStorageDeposit, options, params));
}

function createTx <ApiType extends ApiTypes, R extends SubmittableResult> (hasStorageDeposit = false, fn: (options: BlueprintOptions, params: unknown[]) => SubmittableExtrinsic<ApiType, R>): BlueprintTx<ApiType> {
  return (options: bigint | string | number | BN | BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType, R> =>
    isOptions(options)
      ? fn(options, params)
      : fn(...extractOptions<BlueprintOptions>(hasStorageDeposit, options, params));
}

export interface BlueprintConstructor<ApiType extends ApiTypes> {
  new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array): Blueprint<ApiType>;
}

export class BlueprintSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  public readonly blueprint?: Blueprint<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>, blueprint?: Blueprint<ApiType>) {
    super(result);

    this.contract = contract;
    this.blueprint = blueprint;
  }
}

export class Blueprint<ApiType extends ApiTypes> extends Base<ApiType> {
  /**
   * @description The source code for this blueprint, either an on-chain code hash or a WASM blob upload
   */
  public readonly source: CodeSource;

  readonly #hasStorageDeposit: boolean = false;

  readonly #tx: MapConstructorExec<ApiType> = {};

  readonly #query: MapConstructorQuery<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, source: string | Record<string, unknown> | CodeSource | Uint8Array, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.source = this.registry.createType('CodeSource', source);

    this.#hasStorageDeposit = this.api.tx.contracts.instantiate.meta.args.length === 6;

    this.abi.constructors.forEach((c): void => {
      if (isUndefined(this.#tx[c.method])) {
        this.#tx[c.method] = createTx(this.#hasStorageDeposit, (o, p) => this.#deploy(c, o, p));
      }

      if (isUndefined(this.#query[c.method])) {
        this.#query[c.method] = createQuery(this.#hasStorageDeposit, (f, o, p) => this.#read(c, o, p).send(f));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  public get query (): MapConstructorQuery<ApiType> {
    assert(this.hasRpcInstantiate, ERROR_NO_INSTANTIATE);

    return this.#query;
  }

  public get hasRpcInstantiate (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.instantiate);
  }

  #prepareRequest = (constructorOrId: AbiConstructor | string | number, { salt: _salt }: BlueprintOptions, params: unknown[]): [Uint8Array, Uint8Array] => {
    const data = this.abi.findConstructor(constructorOrId).toU8a(params);

    const salt = encodeSalt(_salt);

    return [data, salt];
  };

  #deploy = (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: unknown[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    const { gasLimit = BN_ZERO, storageDepositLimit = null, value = BN_ZERO } = options;

    const [instantiate, source] = this.source.isUpload
      ? [this.api.tx.contracts.instantiateWithCode, compactAddLength(this.source.asUpload)]
      : [this.api.tx.contracts.instantiate, this.source.asExisting];

    const [data, salt] = this.#prepareRequest(constructorOrId, options, params);

    const tx = this.#hasStorageDeposit
      ? instantiate(value, gasLimit, storageDepositLimit, source, data, salt)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore old style without storage deposit
      : instantiate(value, gasLimit, source, data, salt);

    return tx
      .withResultTransform((result: ISubmittableResult) =>
        new BlueprintSubmittableResult(result, ...(applyOnEvent(result, ['CodeStored', 'Instantiated'], (records: EventRecord[]) =>
          records.reduce<[Contract<ApiType>?, Blueprint<ApiType>?]>(([contract, blueprint], { event }) =>
            this.api.events.contracts.Instantiated.is(event)
              ? [new Contract<ApiType>(this.api, this.abi, (event as unknown as { data: [unknown, AccountId] }).data[1], this._decorateMethod), blueprint]
              : this.api.events.contracts.CodeStored.is(event)
                ? [contract, new Blueprint<ApiType>(this.api, this.abi, { Existing: (event as unknown as { data: [Hash] }).data[0] }, this._decorateMethod)]
                : [contract, blueprint],
          [])
        ) || []))

      );
  };

  #read = (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: unknown[]): ContractInstantiateSend<ApiType> => {
    assert(this.hasRpcInstantiate, ERROR_NO_INSTANTIATE);

    const { gasLimit = BN_ZERO, storageDepositLimit, value = BN_ZERO } = options;

    const [data, salt] = this.#prepareRequest(constructorOrId, options, params);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((origin: string | AccountId | Uint8Array) => {
        // const hasStorageDeposit = this.api.tx.contracts.instantiate.meta.args.length === 6;
        const rpc = this.api.rx.rpc.contracts.instantiate({
          code: this.source,
          data,
          gasLimit,
          origin,
          salt,
          storageDepositLimit: this.#hasStorageDeposit ? storageDepositLimit : undefined,
          value
        });

        const mapFn = ({ debugMessage, gasConsumed, gasRequired, result, storageDeposit }: ContractInstantiateResult): ContractInstantiateOutcome => ({
          accountId: result.isOk
            ? result.asOk.accountId
            : null,
          debugMessage,
          gasConsumed,
          gasRequired: gasRequired && !gasRequired.isZero()
            ? gasRequired
            : gasConsumed,
          result,
          storageDeposit
        });

        return rpc.pipe(map(mapFn));
      })
    };
  };
}

export function extendBlueprint <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): BlueprintConstructor<ApiType> {
  return class extends Blueprint<ApiType> {
    static __BlueprintType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, source: string | Record<string, unknown> | CodeSource | Uint8Array) {
      super(api, abi, source, decorateMethod);
    }
  };
}
