// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';
import { runtime } from './runtime.js';

export default {
  rpc,
  runtime,
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
    },
    RuntimeDispatchInfoV1: {
      weight: 'WeightV1',
      class: 'DispatchClass',
      partialFee: 'Balance'
    },
    RuntimeDispatchInfoV2: {
      weight: 'WeightV2',
      class: 'DispatchClass',
      partialFee: 'Balance'
    }
  }
} as Definitions;
