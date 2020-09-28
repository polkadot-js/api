// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {
    createBlock: {
      description: 'Instructs the manual-seal authorship task to create a new block',
      params: [
        {
          name: 'createEmpty',
          type: 'bool'
        },
        {
          name: 'finalize',
          type: 'bool'
        },
        {
          name: 'parentHash',
          type: 'BlockHash',
          isOptional: true
        }
      ],
      type: 'CreatedBlock'
    },
    finalizeBlock: {
      description: 'Instructs the manual-seal authorship task to finalize a block',
      params: [
        {
          name: 'hash',
          type: 'BlockHash'
        },
        {
          name: 'justification',
          type: 'Justification',
          isOptional: true
        }
      ],
      type: 'bool'
    }
  },
  types: {
    CreatedBlock: {
      hash: 'BlockHash',
      aux: 'ImportedAux'
    },
    ImportedAux: {
      headerOnly: 'bool',
      clearJustificationRequests: 'bool',
      needsJustification: 'bool',
      badJustification: 'bool',
      needsFinalityProof: 'bool',
      isNewBest: 'bool'
    }
  }
} as Definitions;
