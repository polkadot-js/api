// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {
    subscribeJustifications: {
      description: 'Retrieves the best header via subscription',
      params: [],
      pubsub: [
        'justifications',
        'subscribeJustifications',
        'unsubscribeJustifications'
      ],
      type: 'BeefySignedCommitment'
    }
  },
  types: {
    BeefyCommitment: {
      payload: 'BeefyPayload',
      blockNumber: 'BlockNumber',
      validatorSetId: 'ValidatorSetId'
    },
    BeefySignedCommitment: {
      commitment: 'BeefyCommitment',
      signatures: 'Vec<Option<Signature>>'
    },
    BeefyNextAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyPayload: 'MmrRootHash',
    MmrRootHash: 'H256',
    ValidatorSetId: 'u64'
  }
} as Definitions;
