// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isUndefined } from '@polkadot/util';

export function defineProperty (that: object, key: string, get: () => unknown): void {
  // The first checks for property names, the second actually does
  // catch items such as own getters (well, it _is_ needed, Babel?)
  if (!Object.prototype.hasOwnProperty.call(that, key) && isUndefined((that as Record<string, unknown>)[key])) {
    Object.defineProperty(that, key, { enumerable: true, get });
  }
}
