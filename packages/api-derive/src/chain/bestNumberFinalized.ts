// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unused-vars */

// We require these imports for the build mapping
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { ApiInterfaceRx } from '@polkadot/api/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { BlockNumber } from '@polkadot/types/interfaces';

import { unwrapBlockNumber } from './util';

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
export const bestNumberFinalized = unwrapBlockNumber((api) => api.rpc.chain.subscribeFinalizedHeads());
