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
    TransactionSource: {
      _enum: ['InBlock', 'Local', 'External']
    },
    TransactionValidity: 'Result<ValidTransaction, TransactionValidityError>',
    ValidTransaction: {
      priority: 'TransactionPriority',
      requires: 'Vec<TransactionTag>',
      provides: 'Vec<TransactionTag>',
      longevity: 'TransactionLongevity',
      propagate: 'bool'
    }
  }
} as Definitions;
