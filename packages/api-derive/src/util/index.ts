// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

export { drr, memo } from '@polkadot/rpc-core';

export * from './approvalFlagsToBools';
export * from './cache';
export * from './cacheImpl';

export function first <T> ([a]: T[]): T {
  return a;
}
