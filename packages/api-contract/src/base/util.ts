// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from '@polkadot/api';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes } from '@polkadot/api/types';
import type { CodecArg } from '@polkadot/types/types';
import type { AbiConstructor, BlueprintOptions } from '../types';
import type { BlueprintDeploy, ContractGeneric } from './types';

import BN from 'bn.js';

import { Bytes } from '@polkadot/types';
import { compactAddLength, u8aToU8a } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

import { extractOptions, isOptions } from '../util';

export const EMPTY_SALT = new Uint8Array();

export function createBluePrintTx <ApiType extends ApiTypes, R extends SubmittableResult> (fn: (options: BlueprintOptions, params: CodecArg[]) => SubmittableExtrinsic<ApiType, R>): BlueprintDeploy<ApiType> {
  return (options: BigInt | string | number | BN | BlueprintOptions, ...params: CodecArg[]): SubmittableExtrinsic<ApiType, R> =>
    isOptions(options)
      ? fn(options, params)
      : fn(...extractOptions(options, params));
}

export function createBluePrintWithId <T> (fn: (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: CodecArg[]) => T): ContractGeneric<BlueprintOptions, T> {
  return (constructorOrId: AbiConstructor | string | number, options: BigInt | string | number | BN | BlueprintOptions, ...params: CodecArg[]): T =>
    isOptions(options)
      ? fn(constructorOrId, options, params)
      : fn(constructorOrId, ...extractOptions(options, params));
}

export function encodeSalt (salt: Uint8Array | string | null = randomAsU8a()): Uint8Array {
  return salt instanceof Bytes
    ? salt
    : salt && salt.length
      ? compactAddLength(u8aToU8a(salt))
      : EMPTY_SALT;
}
