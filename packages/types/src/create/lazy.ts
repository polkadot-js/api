// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

type WithToString = { toString: () => string };

export function lazyMethod <T, K> (result: Record<string, T>, item: K, creator: (d: K) => T, getName?: (d: K) => string): void {
  let cached: T | null = null;

  Object.defineProperty(result, getName ? getName(item) : (item as WithToString).toString(), {
    enumerable: true,
    get: (): T => {
      if (!cached) {
        cached = creator(item);
      }

      return cached;
    }
  });
}

export function lazyMethods <T, K> (items: K[], creator: (v: K) => T, getName?: (m: K) => string, result: Record<string, T> = {}): Record<string, T> {
  for (let i = 0; i < items.length; i++) {
    lazyMethod(result, items[i], creator, getName);
  }

  return result;
}
