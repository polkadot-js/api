// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

const QUERY_PARAMS = [
  {
    name: 'extrinsic',
    type: 'Bytes'
  },
  {
    name: 'at',
    type: 'BlockHash',
    isHistoric: true,
    isOptional: true
  }
];

export default {
  rpc: {
    queryInfo: {
      description: 'Retrieves the fee information for an encoded extrinsic',
      params: QUERY_PARAMS,
      type: 'RuntimeDispatchInfo'
    },
    queryFeeDetails: {
      description: 'Query the detailed fee of a given encoded extrinsic',
      params: QUERY_PARAMS,
      type: 'FeeDetails'
    }
  },
  types: {
    FeeDetails: {
      inclusionFee: 'Option<InclusionFee>'
      // skipped in serde
      // tip: 'Balance'
    },
    InclusionFee: {
      baseFee: 'Balance',
      lenFee: 'Balance',
      adjustedWeightFee: 'Balance'
    },
    RuntimeDispatchInfo: {
      weight: 'Weight',
      class: 'DispatchClass',
      partialFee: 'Balance'
    }
  }
} as Definitions;
