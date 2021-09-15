// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types';

import kusama from './kusama';
import polkadot from './polkadot';
import substrate from './substrate';

export default {
  rpc: {},
  types: {
    ...polkadot,
    ...kusama,
    ...substrate
  }
} as Definitions;
