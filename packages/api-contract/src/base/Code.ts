// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@polkadot/api/base';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes, DecorateMethod } from '@polkadot/api/types';
import type { AccountId, EventRecord } from '@polkadot/types/interfaces';
import type { ISubmittableResult } from '@polkadot/types/types';
import type { Codec } from '@polkadot/types-codec/types';
import type { Abi } from '../Abi/index.js';
import type { AbiConstructor, BlueprintOptions } from '../types.js';
import type { MapConstructorExec } from './types.js';

import { SubmittableResult } from '@polkadot/api';
import { BN_ZERO, compactAddLength, isU8a, isUndefined, isWasm, u8aEq, u8aToU8a } from '@polkadot/util';

import { applyOnEvent } from '../util.js';
import { Base } from './Base.js';
import { Blueprint } from './Blueprint.js';
import { Contract } from './Contract.js';
import { convertWeight, createBluePrintTx, encodeSalt } from './util.js';

export type CodeConstructor<ApiType extends ApiTypes> = new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) => Code<ApiType>;

export class CodeSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  readonly blueprint?: Blueprint<ApiType> | undefined;
  readonly contract?: Contract<ApiType> | undefined;

  constructor (result: ISubmittableResult, blueprint?: Blueprint<ApiType> | undefined, contract?: Contract<ApiType> | undefined) {
    super(result);

    this.blueprint = blueprint;
    this.contract = contract;
  }
}

function isRiscV (bytes: unknown): bytes is Uint8Array {
  const ELF_MAGIC = new Uint8Array([0x7f, 0x45, 0x4c, 0x46]); // ELF magic bytes: 0x7f, 'E', 'L', 'F'

  return isU8a(bytes) && u8aEq(bytes.subarray(0, 4), ELF_MAGIC);
}

function isValidCode (code: Uint8Array) {
  return isWasm(code) || isRiscV(code);
}

export class Code<ApiType extends ApiTypes> extends Base<ApiType> {
  readonly code: Uint8Array;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.code = isValidCode(this.abi.info.source.wasm)
      ? this.abi.info.source.wasm
      : u8aToU8a(wasm);

    if (!isValidCode(this.code)) {
      throw new Error('Invalid code provided');
    }

    this.abi.constructors.forEach((c): void => {
      if (isUndefined(this.#tx[c.method])) {
        this.#tx[c.method] = createBluePrintTx(c, (o, p) => this.#instantiate(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #instantiate = (constructorOrId: AbiConstructor | string | number, { gasLimit = BN_ZERO, salt, storageDepositLimit = null, value = BN_ZERO }: BlueprintOptions, params: unknown[]): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> => {
    return this.api.tx.contracts.instantiateWithCode(
      value,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore jiggle v1 weights, metadata points to latest
      this._isWeightV1
        ? convertWeight(gasLimit).v1Weight
        : convertWeight(gasLimit).v2Weight,
      storageDepositLimit,
      compactAddLength(this.code),
      this.abi.findConstructor(constructorOrId).toU8a(params),
      encodeSalt(salt)
    ).withResultTransform((result: ISubmittableResult) =>
      new CodeSubmittableResult(result, ...(applyOnEvent(result, ['CodeStored', 'Instantiated'], (records: EventRecord[]) =>
        records.reduce<[Blueprint<ApiType> | undefined, Contract<ApiType> | undefined]>(([blueprint, contract], { event }) =>
          this.api.events.contracts.Instantiated.is(event)
            ? [blueprint, new Contract<ApiType>(this.api, this.abi, (event as unknown as { data: [Codec, AccountId] }).data[1], this._decorateMethod)]
            : this.api.events.contracts.CodeStored.is(event)
              ? [new Blueprint<ApiType>(this.api, this.abi, (event as unknown as { data: [AccountId] }).data[0], this._decorateMethod), contract]
              : [blueprint, contract],
        [undefined, undefined])
      ) || [undefined, undefined]))
    );
  };
}

export function extendCode <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): CodeConstructor<ApiType> {
  return class extends Code<ApiType> {
    static __CodeType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
      super(api, abi, wasm, decorateMethod);
    }
  };
}
