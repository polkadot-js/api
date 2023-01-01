// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { rpc } from './rpc';

export default {
  rpc,
  types: {
    RpcMethods: {
      version: 'u32',
      methods: 'Vec<Text>'
    }
  }
} as Definitions;
