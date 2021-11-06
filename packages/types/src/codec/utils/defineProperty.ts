// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isUndefined } from '@polkadot/util';

const SKIP_KEYS = ['hash'];

export function defineProperty (that: object, key: string, get: () => unknown): void {
  if (SKIP_KEYS.includes(key)) {
    return defineProperty(that, `_${key}`, get);
  }

  // We use an isUndefined check here, not hasOwwnProperty since there are set in derived
  // classes (inside with) and _Own_ properties refers to the class only, not parents
  if (isUndefined((that as Record<string, unknown>)[key])) {
    Object.defineProperty(that, key, { enumerable: true, get });
  }
}
