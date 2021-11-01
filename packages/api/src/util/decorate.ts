// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction } from '@polkadot/types/types';
import type { ApiTypes, DecorateMethod, MethodResult } from '../types';

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
export function decorateDeriveSections<ApiType extends ApiTypes, A extends AnyDerive> (decorateMethod: DecorateMethod<ApiType>, allSections: AnyDerive): DeriveAllSections<ApiType, A> {
  function lazyMethod (result: AnyDeriveSection, source: AnyDeriveSection, methodName: string): void {
    let cached: AnyFunction | null = null;

    Object.defineProperty(result, methodName, {
      enumerable: true,
      get: (): AnyFunction => {
        if (!cached) {
          cached = decorateMethod(source[methodName]) as AnyFunction;
        }

        return cached;
      }
    });
  }

  function lazyMethods (source: AnyDeriveSection): AnyDeriveSection {
    const result: AnyDeriveSection = {};
    const names = Object.keys(source);

    for (let i = 0; i < names.length; i++) {
      lazyMethod(result, source, names[i]);
    }

    return result;
  }

  function lazySection (result: AnyDerive, sectionName: string): void {
    let cached: AnyDeriveSection | null = null;

    Object.defineProperty(result, sectionName, {
      enumerable: true,
      get: (): AnyDeriveSection => {
        if (!cached) {
          cached = lazyMethods(allSections[sectionName]);
        }

        return cached;
      }
    });
  }

  const result: AnyDerive = {};
  const names = Object.keys(allSections);

  for (let i = 0; i < names.length; i++) {
    lazySection(result, names[i]);
  }

  return result as DeriveAllSections<ApiType, A>;
}
