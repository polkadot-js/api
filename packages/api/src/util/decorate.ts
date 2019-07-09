// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyFunction } from '@polkadot/types/types';
import { MethodResult } from '../types';

// A technically unsafe version of Object.keys(obj) that assumes that
// obj only has known properties of T
function keys<T extends object> (obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}

function decorateMethods<ApiType, Section extends Record<keyof Section, (...args: Array<any>) => any>> (
  section: Section,
  decorateMethod: <Method extends AnyFunction>(method: Method) => MethodResult<ApiType, Method>
) {
  return keys(section).reduce(
    <MethodName extends keyof Section>(
      acc: { [MethodName in keyof Section]: MethodResult<ApiType, Section[MethodName]> },
      methodName: MethodName
    ) => {
      const method = section[methodName];

      acc[methodName] = decorateMethod(method) as any;

      return acc;
    },
    {} as { [MethodName in keyof Section]: MethodResult<ApiType, Section[MethodName]> }
  );
}

/**
 * This is a section decorator which keeps all type information.
 */
export function decorateSections<ApiType, AllSections extends {
  [SectionName in keyof AllSections]: Record<keyof AllSections[SectionName], (...args: any[]) => any>
}> (
  allSections: AllSections,
  decorateMethod: <Method extends AnyFunction>(method: Method) => MethodResult<ApiType, Method>
) {
  return keys(allSections).reduce(
    <MethodName extends keyof AllSections>(
      acc: { [SectionName in keyof AllSections]: { [MethodName in keyof AllSections[SectionName]]: MethodResult<ApiType, AllSections[SectionName][MethodName]> } },
      sectionName: MethodName
    ) => {
      acc[sectionName] = decorateMethods(allSections[sectionName], decorateMethod);

      return acc;
    },
    {} as { [SectionName in keyof AllSections]: { [MethodName in keyof AllSections[SectionName]]: MethodResult<ApiType, AllSections[SectionName][MethodName]> } }
  );
}
