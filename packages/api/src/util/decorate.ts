// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecArg } from '@polkadot/types/types';
import { Callback, HKT, ObsInnerType, OnCallDefinition } from '../types';

import { isFunction } from '@polkadot/util';

// An API Method type. For example:
// `typeof api.query.balances.freeBalance === Method; // true`
type Method<URI, Args extends Array<CodecArg>, Ret> = (...params: Args) => HKT<URI, Ret>;

// A technically unsafe version of Object.keys(obj) that assumes that
// obj only has known properties of T
function keys<T extends object> (obj: T) {
  return Object.keys(obj) as Array<keyof T>;
}

function decorateMethods<URI, Section extends Record<keyof Section, (...args: Array<any>) => any>> (
  section: Section,
  onCall: OnCallDefinition<URI>
) {
  return keys(section).reduce(
    <MethodName extends keyof Section>(
      acc: { [MethodName in keyof Section]: Method<URI, Parameters<Section[MethodName]>, ObsInnerType<Section[MethodName]>> },
      methodName: MethodName
    ) => {
      const method = section[methodName];

      const decorated = (...args: Parameters<typeof method>) => {
        let callback: Callback<ObsInnerType<typeof method>> | undefined;
        let params: Array<CodecArg> = args;

        if (args.length && isFunction(args[args.length - 1])) {
          callback = args[args.length - 1];
          params = args.slice(0, args.length - 1);
        }

        return onCall(
          method,
          params,
          callback
        );
      };

      // Casting as any here does not affect the final user-facing type
      acc[methodName] = decorated as Method<URI, Parameters<Section[MethodName]>, ObsInnerType<Section[MethodName]>>;

      return acc;
    },
    {} as { [MethodName in keyof Section]: Method<URI, Parameters<Section[MethodName]>, ObsInnerType<Section[MethodName]>> }
  );
}

export function decorateSections<URI, AllSections extends {
  [SectionName in keyof AllSections]: Record<keyof AllSections[SectionName], (...args: any[]) => any>
}> (
  allSections: AllSections,
  onCall: OnCallDefinition<URI>
) {
  return keys(allSections).reduce(
    <MethodName extends keyof AllSections>(
      acc: { [SectionName in keyof AllSections]: { [MethodName in keyof AllSections[SectionName]]: Method<URI, Parameters<AllSections[SectionName][MethodName]>, ObsInnerType<AllSections[SectionName][MethodName]>> } },
      sectionName: MethodName
    ) => {
      acc[sectionName] = decorateMethods(allSections[sectionName], onCall);
      return acc;
    },
    {} as { [SectionName in keyof AllSections]: { [MethodName in keyof AllSections[SectionName]]: Method<URI, Parameters<AllSections[SectionName][MethodName]>, ObsInnerType<AllSections[SectionName][MethodName]>> } }
  );
}
