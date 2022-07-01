// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall, DefinitionsCallEntry } from '../../types';

import { objectSpread } from '@polkadot/util';

const BB_V5_TO_V6: DefinitionsCallEntry['methods'] = {
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
  finalize_block: {
    description: 'Finish the current block.',
    params: [],
    type: 'Header'
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

export const runtime: DefinitionsCall = {
  BlockBuilder: [
    {
      methods: objectSpread({
        apply_extrinsic: {
          description: 'Apply the given extrinsic.',
          params: [
            {
              name: 'extrinsic',
              type: 'Extrinsic'
            }
          ],
          type: 'ApplyExtrinsicResult'
        }
      }, BB_V5_TO_V6),
      version: 6
    },
    {
      methods: objectSpread({
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
      }, BB_V5_TO_V6),
      version: 5
    }
  ]
};
