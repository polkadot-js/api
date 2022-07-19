// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { rpc } from './rpc';
import { runtime } from './runtime';

export default {
  rpc,
  runtime,
  types: {
    StorageKind: {
      _enum: {
        PERSISTENT: 1,
        LOCAL: 2
      }
    }
  }
} as Definitions;
