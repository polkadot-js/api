// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction } from '@polkadot/types/types';
import type { ApiTypes, DecorateMethod, MethodResult } from '../types';

// Most generic typings for `api.derive.*.*`
type AnyDerive = Record<string, Record<string, AnyFunction>>;

// Exact typings for a particular section `api.derive.section.*`
type DeriveSection<ApiType extends ApiTypes, Section extends Record<string, AnyFunction>> = {
  [MethodName in keyof Section]: MethodResult<ApiType, Section[MethodName]>
};

// Exact typings for all sections `api.derive.*.*`
export type DeriveAllSections<ApiType extends ApiTypes, AllSections extends AnyDerive> = {
  [SectionName in keyof AllSections]: DeriveSection<ApiType, AllSections[SectionName]>
};

// A technically unsafe version of Object.keys(obj) that assumes that
// obj only has known properties of T
function keys<T extends Record<string, unknown>> (obj: T): (keyof T)[] {
  return Object.keys(obj);
}

/**
 * This is a methods decorator which keeps all type information.
 */
function decorateMethods<ApiType extends ApiTypes, Section extends Record<string, AnyFunction>> (section: Section, decorateMethod: DecorateMethod<ApiType>): DeriveSection<ApiType, Section> {
  const result = {} as DeriveSection<ApiType, Section>;
  const names = keys(section);

  for (let k = 0; k < names.length; k++) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    result[names[k]] = decorateMethod(section[names[k]]);
  }

  return result;
}

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateDeriveSections<ApiType extends ApiTypes, AllSections extends AnyDerive> (allSections: AllSections, decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<ApiType, AllSections> {
  const result = {} as DeriveAllSections<ApiType, AllSections>;
  const names = keys(allSections);

  for (let k = 0; k < names.length; k++) {
    result[names[k]] = decorateMethods(allSections[names[k]], decorateMethod);
  }

  return result;
}
