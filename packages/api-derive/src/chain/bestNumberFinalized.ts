// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi } from '../types';

import { createBlockNumberDerive } from './util';

/**
 * @name bestNumberFinalized
 * @returns A BlockNumber
 * @description Get the latest finalized block number.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumberFinalized((blockNumber) => {
 *   console.log(`the current finalized block is #${blockNumber}`);
 * });
 * ```
 */
export const bestNumberFinalized = createBlockNumberDerive(
  (api: DeriveApi) =>
    api.rpc.chain.subscribeFinalizedHeads()
);
