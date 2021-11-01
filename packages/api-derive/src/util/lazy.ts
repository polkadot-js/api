// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

type LazySection <T> = Record<string, T>;

type LazyRecord <T> = Record<string, LazySection<T>>;

function lazyMethod <T> (result: LazySection<T>, methodName: string, creator: (m: string) => T) {
  let cached: T | null = null;

  Object.defineProperty(result, methodName, {
    enumerable: true,
    get: (): T => {
      if (!cached) {
        cached = creator(methodName);
      }

      return cached;
    }
  });
}

function lazyMethods <T> (methodKeys: string[], creator: (m: string) => T): Record<string, T> {
  const result: Record<string, T> = {};

  for (let j = 0; j < methodKeys.length; j++) {
    lazyMethod(result, methodKeys[j], creator);
  }

  return result;
}

export function lazySection <T> (result: LazyRecord<T>, sectionName: string, getMethodKeys: (s: string) => string[], creator: (s: string, m: string) => T): void {
  let cached: Record<string, T> | null = null;

  Object.defineProperty(result, sectionName, {
    enumerable: true,
    get: (): Record<string, T> => {
      if (!cached) {
        cached = lazyMethods(getMethodKeys(sectionName), (m) => creator(sectionName, m));
      }

      return cached;
    }
  });
}
