// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

type LazySection <T> = Record<string, T>;

type LazyRecord <T> = Record<string, LazySection<T>>;

function defineProperty <T> (result: Record<string, T>, name: string, creator: (n: string) => T): void {
  let cached: T | null = null;

  Object.defineProperty(result, name, {
    enumerable: true,
    get: (): T => {
      if (!cached) {
        cached = creator(name);
      }

      return cached;
    }
  });
}

function lazyMethods <T> (methodKeys: string[], creator: (m: string) => T): Record<string, T> {
  const result: Record<string, T> = {};

  for (let i = 0; i < methodKeys.length; i++) {
    defineProperty(result, methodKeys[i], creator);
  }

  return result;
}

export function lazySection <T> (result: LazyRecord<T>, sectionName: string, getMethodKeys: (s: string) => string[], creator: (s: string, m: string) => T): void {
  defineProperty(result, sectionName, (s) => lazyMethods(getMethodKeys(s), (m) => creator(s, m)));
}
