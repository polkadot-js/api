// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtDef } from './types';

export default {
  ChargeTransactionPayment: {
    extra: {},
    types: {
      tip: 'Compact<Balance>'
    }
  },
  CheckBlockGasLimit: {
    extra: {},
    types: {}
  },
  CheckEra: {
    extra: {
      blockHash: 'Hash'
    },
    types: {
      era: 'ExtrinsicEra'
    }
  },
  CheckGenesis: {
    extra: {
      genesisHash: 'Hash'
    },
    types: {}
  },
  CheckNonce: {
    extra: {},
    types: {
      nonce: 'Compact<Index>'
    }
  },
  CheckVersion: {
    extra: {
      specVersion: 'u32'
    },
    types: {}
  },
  CheckWeight: {
    extra: {},
    types: {}
  },
  LockStakingStatus: {
    extra: {},
    types: {}
  },
  ValidateEquivocationReport: {
    extra: {},
    types: {}
  }
} as ExtDef;
