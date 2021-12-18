// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExactDerive } from '@polkadot/api-derive';
import type { AnyFunction } from '@polkadot/types/types';
import type { ApiTypes, DecorateMethod, MethodResult } from '../types';

import { lazyDeriveSection } from '@polkadot/api-derive';

type AnyDeriveSection = Record<string, AnyFunction>;

// Most generic typings for `api.derive.*.*`
type AnyDerive = Record<string, AnyDeriveSection>;

// Exact typings for a particular section `api.derive.section.*`
type DeriveSection<ApiType extends ApiTypes, Section extends AnyDeriveSection> = {
  [M in keyof Section]: MethodResult<ApiType, Section[M]>
};

// Exact typings for all sections `api.derive.*.*`
export type AllDerives<ApiType extends ApiTypes> = {
  [S in keyof ExactDerive]: DeriveSection<ApiType, ExactDerive[S]>
};

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateDeriveSections<ApiType extends ApiTypes> (decorateMethod: DecorateMethod<ApiType>, derives: AnyDerive): AllDerives<ApiType> {
  const getKeys = (s: string) =>
    Object.keys(derives[s]);

  const creator = (s: string, m: string) =>
    decorateMethod(derives[s][m]) as AnyFunction;

  const result: AnyDerive = {};
  const names = Object.keys(derives);

  for (let i = 0; i < names.length; i++) {
    lazyDeriveSection(result, names[i], getKeys, creator);
  }

  return result as AllDerives<ApiType>;
}
