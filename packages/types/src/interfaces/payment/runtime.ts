// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionCall, DefinitionsCall } from '../../types';

import { objectSpread } from '@polkadot/util';

const V1_V2_SHARED_PAY: Record<string, DefinitionCall> = {
  query_fee_details: {
    description: 'The transaction fee details',
    params: [
      {
        name: 'uxt',
        type: 'Extrinsic'
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
        type: 'Extrinsic'
      },
      {
        name: 'len',
        type: 'u32'
      }
    ],
    // NOTE: Since we detect the Weight type based on the runtime, we can have the same
    // result for V1 & V2 (additionally, the v2 API came a bit later, so we don't want
    // to fix this to V1 weights, since _some_ chains may be incorrect)
    type: 'RuntimeDispatchInfo'
  }
};

const V1_V2_SHARED_CALL: Record<string, DefinitionCall> = {
  query_call_fee_details: {
    description: 'The call fee details',
    params: [
      {
        name: 'call',
        type: 'Call'
      },
      {
        name: 'len',
        type: 'u32'
      }
    ],
    type: 'FeeDetails'
  },
  query_call_info: {
    description: 'The call info',
    params: [
      {
        name: 'call',
        type: 'Call'
      },
      {
        name: 'len',
        type: 'u32'
      }
    ],
    type: 'RuntimeDispatchInfo'
  }
};

export const runtime: DefinitionsCall = {
  TransactionPaymentApi: [
    {
      methods: objectSpread({}, V1_V2_SHARED_PAY),
      version: 2
    },
    {
      methods: objectSpread({}, V1_V2_SHARED_PAY),
      version: 1
    }
  ],
  TransactionPaymentCallApi: [
    {
      methods: objectSpread({}, V1_V2_SHARED_CALL),
      version: 2
    },
    {
      methods: objectSpread({}, V1_V2_SHARED_CALL),
      version: 1
    }
  ]
};
