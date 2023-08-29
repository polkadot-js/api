// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from '@polkadot/api';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes } from '@polkadot/api/types';
import type { WeightV1, WeightV2 } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import type { AbiConstructor, AbiMessage, BlueprintOptions, WeightAll } from '../types.js';
import type { BlueprintDeploy, ContractGeneric } from './types.js';

import { Bytes } from '@polkadot/types';
import { bnToBn, compactAddLength, u8aToU8a } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

export const EMPTY_SALT = new Uint8Array();

export function withMeta <T extends { meta: AbiMessage }> (meta: AbiMessage, creator: Omit<T, 'meta'>): T {
  (creator as T).meta = meta;

  return creator as T;
}

export function createBluePrintTx <ApiType extends ApiTypes, R extends SubmittableResult> (meta: AbiMessage, fn: (options: BlueprintOptions, params: unknown[]) => SubmittableExtrinsic<ApiType, R>): BlueprintDeploy<ApiType> {
  return withMeta(meta, (options: BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType, R> =>
    fn(options, params)
  );
}

export function createBluePrintWithId <T> (fn: (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: unknown[]) => T): ContractGeneric<BlueprintOptions, T> {
  return (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, ...params: unknown[]): T =>
    fn(constructorOrId, options, params);
}

export function encodeSalt (salt: Uint8Array | string | null = randomAsU8a()): Uint8Array {
  return salt instanceof Bytes
    ? salt
    : salt?.length
      ? compactAddLength(u8aToU8a(salt))
      : EMPTY_SALT;
}

export function convertWeight (weight: WeightV1 | WeightV2 | bigint | string | number | BN): WeightAll {
  const [refTime, proofSize] = isWeightV2(weight)
    ? [weight.refTime.toBn(), weight.proofSize.toBn()]
    : [bnToBn(weight), undefined];

  return {
    v1Weight: refTime,
    v2Weight: { proofSize, refTime }
  };
}

export function isWeightV2 (weight: WeightV1 | WeightV2 | bigint | string | number | BN): weight is WeightV2 {
  return !!(weight as WeightV2).proofSize;
}
