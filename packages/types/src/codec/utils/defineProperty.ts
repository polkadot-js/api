// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function defineProperty (that: object, key: string, get: () => unknown): void {
  if (!Object.prototype.hasOwnProperty.call(that, key)) {
    Object.defineProperty(that, key, { enumerable: true, get });
  }
}
