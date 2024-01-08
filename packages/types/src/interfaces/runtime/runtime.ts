// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsCallEntry } from '../../types/index.js';

const CORE_V1_TO_V4: DefinitionsCallEntry['methods'] = {
  execute_block: {
    description: 'Execute the given block.',
    params: [
      {
        name: 'block',
        type: 'Block'
      }
    ],
    type: 'Null'
  }
};

const CORE_V1_TO_V2: DefinitionsCallEntry['methods'] = {
  version: {
    description: 'Returns the version of the runtime.',
    params: [],
    type: 'RuntimeVersionPre3'
  }
};

const CORE_V2_TO_V4: DefinitionsCallEntry['methods'] = {
  initialize_block: {
    description: 'Initialize a block with the given header.',
    params: [
      {
        name: 'header',
        type: 'Header'
      }
    ],
    type: 'Null'
  }
};

export const runtime: DefinitionsCall = {
  Core: [
    {
      methods: {
        version: {
          description: 'Returns the version of the runtime.',
          params: [],
          type: 'RuntimeVersion'
        },
        ...CORE_V1_TO_V4,
        ...CORE_V2_TO_V4
      },
      version: 4
    },
    {
      methods: {
        version: {
          description: 'Returns the version of the runtime.',
          params: [],
          type: 'RuntimeVersionPre4'
        },
        ...CORE_V1_TO_V4,
        ...CORE_V2_TO_V4
      },
      version: 3
    },
    {
      methods: {
        ...CORE_V1_TO_V2,
        ...CORE_V1_TO_V4,
        ...CORE_V2_TO_V4
      },
      version: 2
    },
    {
      methods: {
        initialise_block: {
          description: 'Initialize a block with the given header.',
          params: [
            {
              name: 'header',
              type: 'Header'
            }
          ],
          type: 'Null'
        },
        ...CORE_V1_TO_V2,
        ...CORE_V1_TO_V4
      },
      version: 1
    }
  ]
};
