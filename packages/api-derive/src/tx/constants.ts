// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN } from '@polkadot/util';

export const FALLBACK_MAX_HASH_COUNT = 250;

// default here to 5 min eras, adjusted based on the actual blocktime
export const FALLBACK_PERIOD = new BN(6 * 1000);

export const MAX_FINALITY_LAG = new BN(5);

export const MORTAL_PERIOD = new BN(5 * 60 * 1000);
