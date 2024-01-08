// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';

export default {
  rpc,
  types: {
    RpcMethods: {
      version: 'u32',
      methods: 'Vec<Text>'
    }
  }
} as Definitions;
