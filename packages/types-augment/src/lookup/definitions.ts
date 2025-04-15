// Copyright 2017-2025 @polkadot/types-lookup authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import polkadot from './polkadot.js';
import substrate from './substrate.js';
import assetHubPolkadot from './assetHubPolkadot.js';
import assetHubKusama from './assetHubKusama.js';
import kusama from './kusama.js';


export default {
  rpc: {},
  // Not 100% sure it is relevant, however the order here is the same
  // as exposed in the typegen lookup order
  types: objectSpread({}, substrate, polkadot, assetHubPolkadot, kusama, assetHubKusama)
} as Definitions;
