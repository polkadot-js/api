// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyFunction } from '@polkadot/types/types';
import type { ApiTypes, DecorateMethod, MethodResult } from '../types';

// Most generic typings for `api.derive.*.*`
type AnyDerive = Record<string, Record<string, AnyFunction>>;
// Exact typings for a particular section `api.derive.section.*`
type DeriveSection<ApiType extends ApiTypes, Section extends Record<string, AnyFunction>> = { [MethodName in keyof Section]: MethodResult<ApiType, Section[MethodName]> };
// Exact typings for all sections `api.derive.*.*`
export type DeriveAllSections<ApiType extends ApiTypes, AllSections extends AnyDerive> = { [SectionName in keyof AllSections]: DeriveSection<ApiType, AllSections[SectionName]> };

// A technically unsafe version of Object.keys(obj) that assumes that
// obj only has known properties of T
function keys<T extends Record<string, unknown>> (obj: T): (keyof T)[] {
  return Object.keys(obj);
}

/**
 * This is a methods decorator which keeps all type information.
 */
function decorateMethods<ApiType extends ApiTypes, Section extends Record<string, AnyFunction>> (section: Section, decorateMethod: DecorateMethod<ApiType>): DeriveSection<ApiType, Section> {
  return keys(section).reduce(
    <MethodName extends keyof Section>(
      acc: DeriveSection<ApiType, Section>,
      methodName: MethodName
    ): DeriveSection<ApiType, Section> => {
      const method = section[methodName];

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      acc[methodName] = decorateMethod(method) as MethodResult<ApiType, Section[MethodName]>;

      return acc;
    },
    {} as DeriveSection<ApiType, Section>
  );
}

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateSections<ApiType extends ApiTypes, AllSections extends AnyDerive> (
  allSections: AllSections,
  decorateMethod: DecorateMethod<ApiType>
): DeriveAllSections<ApiType, AllSections> {
  return keys(allSections).reduce(
    <MethodName extends keyof AllSections>(
      acc: DeriveAllSections<ApiType, AllSections>,
      sectionName: MethodName
    ): DeriveAllSections<ApiType, AllSections> => {
      acc[sectionName] = decorateMethods(allSections[sectionName], decorateMethod);

      return acc;
    },
    {} as DeriveAllSections<ApiType, AllSections>
  );
}
