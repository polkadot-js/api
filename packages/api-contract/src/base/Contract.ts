// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { Bytes } from '@polkadot/types';
import type { AccountId, ContractExecResult, EventRecord, Weight } from '@polkadot/types/interfaces';
import type { AnyJson, CodecArg, ISubmittableResult, Registry } from '@polkadot/types/types';
import type { AbiMessage, ContractCallOutcome, ContractOptions, DecodedEvent } from '../types';
import type { ContractCallResult, ContractCallSend, ContractGeneric, ContractQuery, ContractTx, MapMessageQuery, MapMessageTx } from './types';

import BN from 'bn.js';

import { SubmittableResult } from '@polkadot/api';
import { ApiBase } from '@polkadot/api/base';
import { assert, bnToBn, isFunction, isUndefined, logger, stringCamelCase } from '@polkadot/util';
import { map } from '@polkadot/x-rxjs/operators';

import { Abi } from '../Abi';
import { applyOnEvent, extractOptions, formatData, isOptions } from '../util';
import { Base } from './Base';

// As per Rust, 5 * GAS_PER_SEC
const MAX_CALL_GAS = new BN(5_000_000_000_000).subn(1);
const ERROR_NO_CALL = 'Your node does not expose the contracts.call RPC. This is most probably due to a runtime configuration.';
const l = logger('Contract');

function createQuery <ApiType extends ApiTypes> (fn: (origin: string | AccountId | Uint8Array, options: ContractOptions, params: CodecArg[]) => ContractCallResult<ApiType, ContractCallOutcome>): ContractQuery<ApiType> {
  return (origin: string | AccountId | Uint8Array, options: BigInt | string | number | BN | ContractOptions, ...params: CodecArg[]): ContractCallResult<ApiType, ContractCallOutcome> =>
    isOptions(options)
      ? fn(origin, options, params)
      : fn(origin, ...extractOptions(options, params));
}

function createTx <ApiType extends ApiTypes> (fn: (options: ContractOptions, params: CodecArg[]) => SubmittableExtrinsic<ApiType>): ContractTx<ApiType> {
  return (options: BigInt | string | number | BN | ContractOptions, ...params: CodecArg[]): SubmittableExtrinsic<ApiType> =>
    isOptions(options)
      ? fn(options, params)
      : fn(...extractOptions(options, params));
}

function createWithId <T> (fn: (messageOrId: AbiMessage | string | number, options: ContractOptions, params: CodecArg[]) => T): ContractGeneric<ContractOptions, T> {
  return (messageOrId: AbiMessage | string | number, options: BigInt | string | number | BN | ContractOptions, ...params: CodecArg[]): T =>
    isOptions(options)
      ? fn(messageOrId, options, params)
      : fn(messageOrId, ...extractOptions(options, params));
}

export class ContractSubmittableResult extends SubmittableResult {
  public readonly contractEvents?: DecodedEvent[];

  constructor (result: ISubmittableResult, contractEvents?: DecodedEvent[]) {
    super(result);

    this.contractEvents = contractEvents;
  }
}

// map from a JSON result to current-style ContractExecResult
function mapExecResult (registry: Registry, json: Record<string, AnyJson>): ContractExecResult {
  if (!Object.keys(json).some((key) => ['error', 'success'].includes(key))) {
    return registry.createType('ContractExecResult', json);
  }

  const from = registry.createType('ContractExecResultTo260', json);

  if (from.isSuccess) {
    const s = from.asSuccess;

    return registry.createType('ContractExecResult', {
      gasConsumed: s.gasConsumed,
      result: {
        ok: {
          data: s.data,
          flags: s.flags
        }
      }
    });
  }

  // in the old format error has no additional information,
  // map it as-is with an "unknown" error
  return registry.createType('ContractExecResult', { result: { err: { other: 'unknown' } } });
}

export class Contract<ApiType extends ApiTypes> extends Base<ApiType> {
  /**
   * @description The on-chain address for this contract
   */
  public readonly address: AccountId;

  /**
   * @deprecated
   * @description Deprecated. Use `.tx.<messageName>` to send a transaction.
   */
  public readonly exec: ContractGeneric<ContractOptions, SubmittableExtrinsic<ApiType>>;

  /**
   * @deprecated
   * @description Deprecated. Use `.tx.<messageName>` to send a transaction.
   */
  public readonly read: ContractGeneric<ContractOptions, ContractCallSend<ApiType>>;

  readonly #query: MapMessageQuery<ApiType> = {};

  readonly #tx: MapMessageTx<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, address: string | AccountId, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('AccountId', address);
    this.exec = createWithId(this.#exec);
    this.read = createWithId(this.#read);

    this.abi.messages.forEach((m): void => {
      const messageName = stringCamelCase(m.identifier);

      if (isUndefined(this.#tx[messageName])) {
        this.#tx[messageName] = createTx((o, p) => this.#exec(m, o, p));
      }

      if (isUndefined(this.#query[messageName])) {
        this.#query[messageName] = createQuery((f, o, p) => this.#read(m, o, p).send(f));
      }
    });
  }

  public get hasRpcContractsCall (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.call);
  }

  public get query (): MapMessageQuery<ApiType> {
    assert(this.hasRpcContractsCall, ERROR_NO_CALL);

    return this.#query;
  }

  public get tx (): MapMessageTx<ApiType> {
    return this.#tx;
  }

  #getGas = (_gasLimit: BigInt | BN | string | number, isCall = false): BN => {
    const gasLimit = bnToBn(_gasLimit);

    return gasLimit.lten(0)
      ? isCall
        ? MAX_CALL_GAS
        : this.api.consts.system.blockWeights
          ? this.api.consts.system.blockWeights.perClass.normal.maxExtrinsic.sub(this.api.consts.system.blockWeights.perClass.normal.baseExtrinsic)
          : (this.api.consts.system.maximumBlockWeight as Weight).muln(64).divn(100)
      : gasLimit;
  }

  #exec = (messageOrId: AbiMessage | string | number, { gasLimit = 0, value = 0 }: ContractOptions, params: CodecArg[]): SubmittableExtrinsic<ApiType> => {
    return this.api.tx.contracts
      .call(this.address, value, this.#getGas(gasLimit), this.abi.findMessage(messageOrId).toU8a(params))
      .withResultTransform((result: ISubmittableResult) =>
        new ContractSubmittableResult(result, applyOnEvent(result, 'ContractExecution', (records: EventRecord[]) =>
          records
            .map(({ event: { data: [, data] } }): DecodedEvent | null => {
              try {
                return this.abi.decodeEvent(data as Bytes);
              } catch (error) {
                l.error(`Unable to decode contract event: ${(error as Error).message}`);

                return null;
              }
            })
            .filter((decoded): decoded is DecodedEvent => !!decoded)
        ))
      );
  }

  #read = (messageOrId: AbiMessage | string | number, { gasLimit = 0, value = 0 }: ContractOptions, params: CodecArg[]): ContractCallSend<ApiType> => {
    assert(this.hasRpcContractsCall, ERROR_NO_CALL);

    const message = this.abi.findMessage(messageOrId);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((origin: string | AccountId | Uint8Array) =>
        this.api.rx.rpc.contracts.call.json({
          dest: this.address,
          gasLimit: this.#getGas(gasLimit, true),
          inputData: message.toU8a(params),
          origin,
          value
        }).pipe(map((json): ContractCallOutcome => {
          const { debugMessage, gasConsumed, result } = mapExecResult(this.registry, json.toJSON());

          return {
            debugMessage,
            gasConsumed,
            output: result.isOk && message.returnType
              ? formatData(this.registry, result.asOk.data, message.returnType)
              : null,
            result
          };
        }))
      )
    };
  }
}
