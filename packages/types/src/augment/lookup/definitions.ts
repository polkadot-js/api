// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types';

import kusama from './kusama';
import substrate from './substrate';

export default {
  rpc: {},
  types: {
    ...kusama,
    ...substrate
  }
} as Definitions;
