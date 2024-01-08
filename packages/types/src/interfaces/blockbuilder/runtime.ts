// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsCallEntry } from '../../types/index.js';

const BB_V2_TO_V4: DefinitionsCallEntry['methods'] = {
  // this was removed after V4
  random_seed: {
    description: 'Generate a random seed.',
    params: [],
    type: 'Hash'
  }
};

const BB_V2_TO_V5: DefinitionsCallEntry['methods'] = {
  apply_extrinsic: {
    description: 'Apply the given extrinsic.',
    params: [
      {
        name: 'extrinsic',
        type: 'Extrinsic'
      }
    ],
    type: 'ApplyExtrinsicResultPre6'
  }
};

const BB_V2_TO_V6: DefinitionsCallEntry['methods'] = {
  check_inherents: {
    description: 'Check that the inherents are valid.',
    params: [
      {
        name: 'block',
        type: 'Block'
      },
      {
        name: 'data',
        type: 'InherentData'
      }
    ],
    type: 'CheckInherentsResult'
  },
  inherent_extrinsics: {
    description: 'Generate inherent extrinsics.',
    params: [
      {
        name: 'inherent',
        type: 'InherentData'
      }
    ],
    type: 'Vec<Extrinsic>'
  }
};

const BB_V3_TO_V6: DefinitionsCallEntry['methods'] = {
  // renamed in v3 from finalize_block
  finalize_block: {
    description: 'Finish the current block.',
    params: [],
    type: 'Header'
  }
};

export const runtime: DefinitionsCall = {
  BlockBuilder: [
    {
      methods: {
        apply_extrinsic: {
          description: 'Apply the given extrinsic.',
          params: [
            {
              name: 'extrinsic',
              type: 'Extrinsic'
            }
          ],
          type: 'ApplyExtrinsicResult'
        },
        ...BB_V2_TO_V6,
        ...BB_V3_TO_V6
      },
      version: 6
    },
    {
      methods: {
        // apply_extrinsic result changed in 6
        ...BB_V2_TO_V5,
        ...BB_V2_TO_V6,
        ...BB_V3_TO_V6
      },
      version: 5
    },
    {
      methods: {
        // random_seed removed
        ...BB_V2_TO_V4,
        ...BB_V2_TO_V5,
        ...BB_V2_TO_V6,
        ...BB_V3_TO_V6
      },
      version: 4
    },
    {
      methods: {
        // finalize_block renamed
        ...BB_V2_TO_V4,
        ...BB_V2_TO_V6,
        ...BB_V3_TO_V6
      },
      version: 3
    },
    {
      methods: {
        finalise_block: {
          description: 'Finish the current block.',
          params: [],
          type: 'Header'
        },
        ...BB_V2_TO_V4,
        ...BB_V2_TO_V6
      },
      version: 2
    }
  ]
};
