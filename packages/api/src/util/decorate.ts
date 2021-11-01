// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction } from '@polkadot/types/types';
import type { ApiTypes, DecorateMethod, MethodResult } from '../types';

import { lazySection } from '@polkadot/api-derive/util/lazy';

type AnyDeriveSection = Record<string, AnyFunction>;

// Most generic typings for `api.derive.*.*`
type AnyDerive = Record<string, AnyDeriveSection>;

// Exact typings for a particular section `api.derive.section.*`
type DeriveSection<ApiType extends ApiTypes, Section extends AnyDeriveSection> = {
  [MethodName in keyof Section]: MethodResult<ApiType, Section[MethodName]>
};

// Exact typings for all sections `api.derive.*.*`
export type DeriveAllSections<ApiType extends ApiTypes, AllSections extends AnyDerive> = {
  [SectionName in keyof AllSections]: DeriveSection<ApiType, AllSections[SectionName]>
};

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateDeriveSections<ApiType extends ApiTypes, A extends AnyDerive> (decorateMethod: DecorateMethod<ApiType>, derive: AnyDerive): DeriveAllSections<ApiType, A> {
  const getKeys = (s: string) =>
    Object.keys(derive[s]);

  const creator = (s: string, m: string) =>
    decorateMethod(derive[s][m]) as AnyFunction;

  const result: AnyDerive = {};
  const names = Object.keys(derive);

  for (let i = 0; i < names.length; i++) {
    lazySection(result, names[i], getKeys, creator);
  }

  return result as DeriveAllSections<ApiType, A>;
}
