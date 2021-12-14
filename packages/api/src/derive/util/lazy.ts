// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { lazyMethod, lazyMethods } from '@polkadot/util';

type LazySection <T> = Record<string, T>;

type LazyRecord <T> = Record<string, LazySection<T>>;

export function lazyDeriveSection <T> (result: LazyRecord<T>, section: string, getKeys: (s: string) => string[], creator: (s: string, m: string) => T): void {
  lazyMethod(result, section, () =>
    lazyMethods({}, getKeys(section), (method: string) =>
      creator(section, method)
    )
  );
}
