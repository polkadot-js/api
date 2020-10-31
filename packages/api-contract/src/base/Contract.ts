// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import { AccountId, ContractExecResult, EventRecord } from '@polkadot/types/interfaces';
import { AnyJson, CodecArg, ISubmittableResult, Registry } from '@polkadot/types/types';
import { AbiMessage, ContractCallOutcome, DecodedEvent } from '../types';
import { ContractRead, MapMessageExec, MapMessageRead } from './types';

import BN from 'bn.js';
import { map } from 'rxjs/operators';
import { SubmittableResult } from '@polkadot/api';
import ApiBase from '@polkadot/api/base';
import { assert, bnToBn, isFunction, isUndefined, logger, stringCamelCase } from '@polkadot/util';

import Abi from '../Abi';
import { applyOnEvent, formatData } from '../util';
import Base from './Base';

const ERROR_NO_CALL = 'Your node does not expose the contracts.call RPC. This is most probably due to a runtime configuration.';
const l = logger('Contract');

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

export default class Contract<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly address: AccountId;

  readonly #tx: MapMessageExec<ApiType> = {};

  readonly #query: MapMessageRead<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: AnyJson | Abi, address: string | AccountId, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.address = this.registry.createType('AccountId', address);

    this.abi.messages.forEach((m): void => {
      const messageName = stringCamelCase(m.identifier);

      if (isUndefined(this.#tx[messageName])) {
        this.#tx[messageName] = (value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]) =>
          this.#exec(m, value, gasLimit, params);
      }

      if (isUndefined(this.#query[messageName])) {
        this.#query[messageName] = (origin: string | AccountId | Uint8Array, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]) =>
          this.#read(m, value, gasLimit, params).send(origin);
      }
    });
  }

  public get hasRpcContractsCall (): boolean {
    return isFunction(this.api.rx.rpc.contracts?.call);
  }

  public get query (): MapMessageRead<ApiType> {
    assert(this.hasRpcContractsCall, ERROR_NO_CALL);

    return this.#query;
  }

  public get tx (): MapMessageExec<ApiType> {
    return this.#tx;
  }

  #getGas = (_gasLimit: BigInt | BN | string | number): BN => {
    const gasLimit = bnToBn(_gasLimit);

    return gasLimit.lten(0)
      ? this.api.consts.system.maximumBlockWeight.muln(64).divn(100)
      : gasLimit;
  }

  #exec = (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, params: CodecArg[]): SubmittableExtrinsic<ApiType> => {
    return this.api.tx.contracts
      .call(this.address, value, this.#getGas(gasLimit), this.abi.findMessage(messageOrId).toU8a(params))
      .withResultTransform((result: ISubmittableResult) =>
        new ContractSubmittableResult(result, applyOnEvent(result, 'ContractExecution', (records: EventRecord[]) =>
          records
            .map(({ event: { data: [, data] } }): DecodedEvent | null => {
              try {
                return this.abi.decodeEvent(data.toU8a());
              } catch (error) {
                l.error(`Unable to decode contract event: ${(error as Error).message}`);

                return null;
              }
            })
            .filter((decoded): decoded is DecodedEvent => !!decoded)
        ))
      );
  }

  #read = (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, params: CodecArg[]): ContractRead<ApiType> => {
    assert(this.hasRpcContractsCall, ERROR_NO_CALL);

    const message = this.abi.findMessage(messageOrId);

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      send: this._decorateMethod((origin: string | AccountId | Uint8Array) =>
        this.api.rx.rpc.contracts.call.json({
          dest: this.address,
          gasLimit: this.#getGas(gasLimit),
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

  public exec (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): SubmittableExtrinsic<ApiType> {
    return this.#exec(messageOrId, value, gasLimit, params);
  }

  public read (messageOrId: AbiMessage | string | number, value: BigInt | BN | string | number, gasLimit: BigInt | BN | string | number, ...params: CodecArg[]): ContractRead<ApiType> {
    return this.#read(messageOrId, value, gasLimit, params);
  }
}
