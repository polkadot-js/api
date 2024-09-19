// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    PostDispatchInfo: {
      actualWeight: 'Option<Weight>',
      paysFee: 'Pays'
    },
    DispatchResultWithPostInfo: 'Result<PostDispatchInfo, DispatchError>',
    CallDryRunEffects: {
      executionResult: 'DispatchResultWithPostInfo',
      emittedEvents: 'Vec<Event>',
      localXcm: 'Option<VersionedXcm>',
      forwardedXcms: 'Vec<(VersionedMultiLocation, Vec<VersionedXcm>)>'
    },
    XcmDryRunEffects: {
      executionResult: 'OutcomeV4',
      emittedEvents: 'Vec<Event>',
      forwardedXcms: 'Vec<(VersionedMultiLocation, Vec<VersionedXcm>)>'
    },
    XcmDryRunApiError: {
      _enum: [
        'Unimplemented',
        'VersionedConversionFailed'
      ]
    }
  }
} as Definitions;
