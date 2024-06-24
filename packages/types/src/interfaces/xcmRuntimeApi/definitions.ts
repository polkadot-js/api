// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    Error: {
      _enum: ['Unsupported']
    },
    Ss58: {
      address: 'Text',
      version: 'u16'
    },
    Account: {
      id: 'Vec<u8>',
      ss58: 'Ss58'
    },
  }
} as Definitions;
