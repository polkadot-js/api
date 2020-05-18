// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export interface DeriveCache {
  del: (key: string) => void;
  forEach: (cb: (key: string, value: any) => void) => void;
  get: <T = any> (key: string) => T | undefined;
  set: (key: string, value: any) => void;
}
