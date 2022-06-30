// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  Core: [
    {
      methods: {
        version: {
          description: 'Returns the version of the runtime.',
          params: [],
          type: 'RuntimeVersion'
        }
      },
      version: 4
      // TODO Add execute_block & initialize_block
    }
  ]
};
