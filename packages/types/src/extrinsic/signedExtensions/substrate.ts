// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtDef } from './types';

import EmptyCheck from './emptyCheck';

const CheckMortality = {
  extra: {
    blockHash: 'Hash'
  },
  types: {
    era: 'ExtrinsicEra'
  }
};

export default {
  ChargeTransactionPayment: {
    extra: {},
    types: {
      tip: 'Compact<Balance>'
    }
  },
  CheckBlockGasLimit: EmptyCheck,
  CheckEra: CheckMortality,
  CheckGenesis: {
    extra: {
      genesisHash: 'Hash'
    },
    types: {}
  },
  CheckMortality,
  CheckNonce: {
    extra: {},
    types: {
      nonce: 'Compact<Index>'
    }
  },
  CheckSpecVersion: {
    extra: {
      specVersion: 'u32'
    },
    types: {}
  },
  CheckTxVersion: {
    extra: {
      transactionVersion: 'u32'
    },
    types: {}
  },
  CheckVersion: {
    extra: {
      specVersion: 'u32'
    },
    types: {}
  },
  CheckWeight: EmptyCheck,
  LockStakingStatus: EmptyCheck,
  ValidateEquivocationReport: EmptyCheck
} as ExtDef;
