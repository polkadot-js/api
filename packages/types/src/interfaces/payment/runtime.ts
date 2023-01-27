// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionCall, DefinitionsCall } from '../../types';

import { objectSpread } from '@polkadot/util';

const V1_V2_V3_SHARED_PAY: Record<string, DefinitionCall> = {
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
  }
};

const V1_V2_V3_SHARED_CALL: Record<string, DefinitionCall> = {
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
  }
};

const V2_V3_SHARED_PAY: Record<string, DefinitionCall> = {
  query_info: {
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

const V2_V3_SHARED_CALL: Record<string, DefinitionCall> = {
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

const V3_SHARED_PAY_CALL: Record<string, DefinitionCall> = {
  query_length_to_fee: {
    description: 'Query the output of the current LengthToFee given some input',
    params: [
      {
        name: 'length',
        type: 'u32'
      }
    ],
    type: 'Balance'
  },
  query_weight_to_fee: {
    description: 'Query the output of the current WeightToFee given some input',
    params: [
      {
        name: 'weight',
        type: 'Weight'
      }
    ],
    type: 'Balance'
  }
};

export const runtime: DefinitionsCall = {
  TransactionPaymentApi: [
    {
      methods: objectSpread(
        {},
        V3_SHARED_PAY_CALL,
        V2_V3_SHARED_PAY,
        V1_V2_V3_SHARED_PAY
      ),
      version: 3
    },
    {
      methods: objectSpread(
        {},
        V2_V3_SHARED_PAY,
        V1_V2_V3_SHARED_PAY
      ),
      version: 2
    },
    {
      methods: objectSpread({
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
          // NOTE: _Should_ be V1 (as per current Substrate), however the interface was
          // changed mid-flight between versions. So we have some of each depending on
          // runtime. (We do detect the weight type, so correct)
          type: 'RuntimeDispatchInfo'
        }
      }, V1_V2_V3_SHARED_PAY),
      version: 1
    }
  ],
  TransactionPaymentCallApi: [
    {
      methods: objectSpread(
        {},
        V3_SHARED_PAY_CALL,
        V2_V3_SHARED_CALL,
        V1_V2_V3_SHARED_CALL
      ),
      version: 3
    },
    {
      methods: objectSpread(
        {},
        V2_V3_SHARED_CALL,
        V1_V2_V3_SHARED_CALL
      ),
      version: 2
    },
    {
      methods: objectSpread({
        CALL: {
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
          // NOTE: As per the above comment, the below is correct according to Substrate, but
          // _may_ yield fallback decoding on some versions of the runtime
          type: 'RuntimeDispatchInfo'
        }
      }, V1_V2_V3_SHARED_CALL),
      version: 1
    }
  ]
};
