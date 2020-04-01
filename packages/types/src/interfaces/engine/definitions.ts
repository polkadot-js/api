// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
