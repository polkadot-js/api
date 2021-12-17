// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
export type DeriveAllSections<ApiType extends ApiTypes, AllSections extends AnyDerive> = {
  [S in keyof AllSections]: DeriveSection<ApiType, AllSections[S]>
};

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateDeriveSections<ApiType extends ApiTypes, A extends AnyDerive> (decorateMethod: DecorateMethod<ApiType>, derives: AnyDerive): DeriveAllSections<ApiType, A> {
  const getKeys = (s: string) =>
    Object.keys(derives[s]);

  const creator = (s: string, m: string) =>
    decorateMethod(derives[s][m]) as AnyFunction;

  const result: AnyDerive = {};
  const names = Object.keys(derives);

  for (let i = 0; i < names.length; i++) {
    lazyDeriveSection(result, names[i], getKeys, creator);
  }

  return result as DeriveAllSections<ApiType, A>;
}
