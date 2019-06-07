// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyFunction, Callback, CodecArg } from '@polkadot/types/types';
import { DecorateMethod, ObsInnerType, HktType, URIS } from '../types';

// A technically unsafe version of Object.keys(obj) that assumes that
// obj only has known properties of T
function keys<T extends object> (obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}

function decorateMethods<Section extends Record<keyof Section, (...args: Array<any>) => any>> (
  section: Section,
  decorateMethod: <Method extends AnyFunction>(method: Method) => <Result>(...args: Parameters<Method>) => Result
) {
  return keys(section).reduce(
    <MethodName extends keyof Section>(
      acc: { [MethodName in keyof Section]: ReturnType<DecorateMethod<Section[MethodName]>> },
      methodName: MethodName
    ) => {
      const method = section[methodName];

      acc[methodName] = decorateMethod(method) as any;

      return acc;
    },
    {} as { [MethodName in keyof Section]: ReturnType<DecorateMethod<Section[MethodName]>> }
  );
}

export function decorateSections<AllSections extends {
  [SectionName in keyof AllSections]: Record<keyof AllSections[SectionName], (...args: any[]) => any>
}> (
  allSections: AllSections,
  decorateMethod: <Method extends AnyFunction>(method: Method) => <Result>(...args: Parameters<Method>) => Result
) {
  return keys(allSections).reduce(
    <MethodName extends keyof AllSections>(
      acc: { [SectionName in keyof AllSections]: { [MethodName in keyof AllSections[SectionName]]: ReturnType<DecorateMethod<AllSections[SectionName][MethodName]>> } },
      sectionName: MethodName
    ) => {
      acc[sectionName] = decorateMethods(allSections[sectionName], decorateMethod);

      return acc;
    },
    {} as { [SectionName in keyof AllSections]: { [MethodName in keyof AllSections[SectionName]]: ReturnType<DecorateMethod<AllSections[SectionName][MethodName]>> } }
  );
}
