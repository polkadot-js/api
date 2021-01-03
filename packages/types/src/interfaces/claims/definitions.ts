// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    EthereumAddress: 'H160',
    StatementKind: {
      _enum: ['Regular', 'Saft']
    }
  }
} as Definitions;
