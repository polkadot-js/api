// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

type LazySection <T> = Record<string, T>;

type LazyRecord <T> = Record<string, LazySection<T>>;

function getStringName <K> (data: K): string {
  return (data as unknown as string).toString();
}

function lazyMethod <T, K> (result: Record<string, T>, item: K, creator: (d: K) => T, getName: (d: K) => string = getStringName): void {
  let cached: T | null = null;

  Object.defineProperty(result, getName(item), {
    enumerable: true,
    get: (): T => {
      if (!cached) {
        cached = creator(item);
      }

      return cached;
    }
  });
}

function lazyMethods <T, K> (items: K[], creator: (v: K) => T, getName: (m: K) => string = getStringName): Record<string, T> {
  const result: Record<string, T> = {};

  for (let i = 0; i < items.length; i++) {
    lazyMethod(result, items[i], creator, getName);
  }

  return result;
}

export function lazyDeriveSection <T> (result: LazyRecord<T>, section: string, getKeys: (s: string) => string[], creator: (s: string, m: string) => T): void {
  lazyMethod(result, section, (s) => lazyMethods(getKeys(s), (m) => creator(s, m)));
}
