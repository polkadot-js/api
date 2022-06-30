// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  OffchainWorkerApi: [
    {
      methods: {
        offchain_worker: {
          description: 'Starts the off-chain task for given block header.',
          params: [
            {
              name: 'header',
              type: 'Header'
            }
          ],
          type: 'Null'
        }
      },
      version: 2
    }
  ]
};
