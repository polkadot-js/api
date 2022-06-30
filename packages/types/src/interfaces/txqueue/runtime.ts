// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  TaggedTransactionQueue: [
    {
      methods: {
        validate_transaction: {
          description: 'Validate the transaction.',
          params: [
            {
              name: 'source',
              type: 'TransactionSource'
            },
            {
              name: 'tx',
              type: 'Extrinsic'
            },
            {
              name: 'blockHash',
              type: 'BlockHash'
            }
          ],
          type: 'TransactionValidity'
        }
      },
      version: 3
    }
  ]
};
