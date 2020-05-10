// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

export const FALLBACK_MAX_HASH_COUNT = 250;

// default here to 5 min eras, adjusted based on the actual blocktime
export const FALLBACK_PERIOD = new BN(6 * 1000);

export const MAX_FINALITY_LAG = new BN(5);

export const MORTAL_PERIOD = new BN(5 * 60 * 1000);
