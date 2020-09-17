// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    WeightToFeeCoefficient: {
      coeffInteger: 'Balance',
      coeffFrac: 'Perbill',
      negative: 'bool',
      degree: 'u8'
    }
  }
} as Definitions;
