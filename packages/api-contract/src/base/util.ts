// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from '@polkadot/api';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes } from '@polkadot/api/types';
import type { BN } from '@polkadot/util';
import type { AbiConstructor, AbiMessage, BlueprintOptions, WeightAll, WeightV2 } from '../types';
import type { BlueprintDeploy, ContractGeneric } from './types';

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
    : salt && salt.length
      ? compactAddLength(u8aToU8a(salt))
      : EMPTY_SALT;
}

export function convertWeight (orig: WeightV2 | bigint | string | number | BN): WeightAll {
  const v1Weight = (orig as WeightV2).proofSize
    ? (orig as WeightV2).refTime.toBn()
    : bnToBn(orig as BN);

  return { v1Weight, v2Weight: { refTime: v1Weight } };
}
