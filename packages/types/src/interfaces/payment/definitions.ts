// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

import { rpc } from './rpc';
import { runtime } from './runtime';

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
      // NOTE: Generally we always point high -> low, however in this case we do have some _potential_
      // discrepancies where some nodes may not return the correct RPC responses. Basically any node that
      // is on WeightV2 and does not yet include https://github.com/paritytech/substrate/pull/12633 would
      // have unparsable results. So effectively this makes the API not fail in those cases, however it
      // will create "some" chaos on the side of the users who does expect the correct response.
      // TL:DR Somebody _will_ still break since in cases where the RPCs are "between fixes"
      __fallback: 'RuntimeDispatchInfoV2',
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
