// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  TransactionPaymentApi: [
    {
      methods: {
        query_fee_details: {
          description: 'The transaction fee details',
          params: [
            {
              name: 'uxt',
              type: 'Bytes'
            },
            {
              name: 'len',
              type: 'u32'
            }
          ],
          type: 'FeeDetails'
        },
        query_info: {
          description: 'The transaction info',
          params: [
            {
              name: 'uxt',
              type: 'Bytes'
            },
            {
              name: 'len',
              type: 'u32'
            }
          ],
          type: 'RuntimeDispatchInfo'
        }
      },
      version: 1
    }
  ]
};
