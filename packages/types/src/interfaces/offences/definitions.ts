// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    DeferredOffenceOf: '(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)',
    Kind: '[u8; 16]',
    OffenceDetails: {
      offender: 'Offender',
      reporters: 'Vec<Reporter>'
    },
    Offender: 'IdentificationTuple',
    OpaqueTimeSlot: 'Bytes',
    ReportIdOf: 'Hash',
    Reporter: 'AccountId'
  }
} as Definitions;
