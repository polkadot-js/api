// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface DeriveCache {
  get: <T = any> (ket: string) => T | undefined;
  set: <T = any> (key: string, value: T) => T;
}
