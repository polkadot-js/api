// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi } from '../types.js';

import { createBlockNumberDerive } from './util.js';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { BlockNumber } from '@polkadot/types/interfaces';

/**
 * @name bestNumber
 * @returns The latest block number.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumber((blockNumber) => {
 *   console.log(`the current best block is #${blockNumber}`);
 * });
 * ```
 */
export const bestNumber = /*#__PURE__*/ createBlockNumberDerive(
  (api: DeriveApi) =>
    api.rpc.chain.subscribeNewHeads()
);
