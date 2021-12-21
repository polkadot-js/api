// Copyright 2017-2021 @polkadot/types-lookup authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '@polkadot/types/types';

import { objectSpread } from '@polkadot/util';

import kusama from './kusama';
import polkadot from './polkadot';
import substrate from './substrate';

export default {
  rpc: {},
  // Not 100% sure it is relevant, however the order here is the same
  // as exposed in the typegen lookup order
  types: objectSpread({}, substrate, polkadot, kusama)
} as Definitions;
