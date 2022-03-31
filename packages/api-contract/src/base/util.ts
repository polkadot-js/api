// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { ApiTypes } from '@polkadot/api/types';
import type { ISubmittableResult } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { AbiConstructor, AbiMessage, BlueprintOptions } from '../types';
import type { BlueprintDeploy, ContractGeneric, MapConstructorExec, Namespaced } from './types';

import { Bytes } from '@polkadot/types';
import { compactAddLength, isUndefined, u8aToU8a } from '@polkadot/util';
import { randomAsU8a } from '@polkadot/util-crypto';

import { extractOptions, isOptions } from '../util';

export const EMPTY_SALT = new Uint8Array();

interface WithPath {
  path: string[];
}

type ConstructorTx <ApiType extends ApiTypes, R extends ISubmittableResult> = (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: unknown[]) => SubmittableExtrinsic<ApiType, R>;

export function withMeta <T extends { meta: AbiMessage }> (meta: AbiMessage, creator: Omit<T, 'meta'>): T {
  (creator as T).meta = meta;

  return creator as T;
}

export function createBluePrintTx <ApiType extends ApiTypes, R extends ISubmittableResult> (meta: AbiMessage, fn: ConstructorTx<ApiType, R>): BlueprintDeploy<ApiType> {
  return withMeta(meta, (options: bigint | string | number | BN | BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType, R> =>
    isOptions(options)
      ? fn(meta, options, params)
      : fn(meta, ...extractOptions<BlueprintOptions>(options, params))
  );
}

export function createBluePrintWithId <T> (fn: (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: unknown[]) => T): ContractGeneric<BlueprintOptions, T> {
  return (constructorOrId: AbiConstructor | string | number, options: bigint | string | number | BN | BlueprintOptions, ...params: unknown[]): T =>
    isOptions(options)
      ? fn(constructorOrId, options, params)
      : fn(constructorOrId, ...extractOptions<BlueprintOptions>(options, params));
}

export function encodeSalt (salt: Uint8Array | string | null = randomAsU8a()): Uint8Array {
  return salt instanceof Bytes
    ? salt
    : salt && salt.length
      ? compactAddLength(u8aToU8a(salt))
      : EMPTY_SALT;
}

export function expandNs <T> (ns: Namespaced<T>, { path }: WithPath, call: T): T {
  if (path.length > 1) {
    for (let i = 0; i < path.length - 1; i++) {
      if (!ns[path[i]]) {
        ns[path[i]] = {};
      }

      ns = ns[path[i]];
    }
  }

  ns[path[path.length - 1]] = call as unknown as Namespaced<T>;

  return call;
}

export function expandConstructors <ApiType extends ApiTypes, R extends ISubmittableResult> (constructors: AbiMessage[], ns: Namespaced<BlueprintDeploy<ApiType>>, tx: MapConstructorExec<ApiType>, creator: ConstructorTx<ApiType, R>): void {
  constructors.forEach((c): void => {
    if (isUndefined(tx[c.method])) {
      tx[c.method] = expandNs(ns, c, createBluePrintTx(c, creator));
    }
  });
}
