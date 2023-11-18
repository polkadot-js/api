// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef, ExtInfo } from './types.js';

import { emptyCheck } from './emptyCheck.js';

const CheckMortality: ExtInfo = {
  extrinsic: {
    era: 'ExtrinsicEra'
  },
  payload: {
    blockHash: 'Hash'
  }
};

const ChargeTransactionPayment: ExtInfo = {
  extrinsic: {
    tip: 'Compact<Balance>'
  },
  payload: {}
};

export const substrate: ExtDef = {
  ChargeTransactionPayment,
  CheckBlockGasLimit: emptyCheck,
  CheckEra: CheckMortality,
  CheckGenesis: {
    extrinsic: {},
    payload: {
      genesisHash: 'Hash'
    }
  },
  CheckMortality,
  CheckNonZeroSender: emptyCheck,
  CheckNonce: {
    extrinsic: {
      nonce: 'Compact<Index>'
    },
    payload: {}
  },
  CheckSpecVersion: {
    extrinsic: {},
    payload: {
      specVersion: 'u32'
    }
  },
  CheckTxVersion: {
    extrinsic: {},
    payload: {
      transactionVersion: 'u32'
    }
  },
  CheckVersion: {
    extrinsic: {},
    payload: {
      specVersion: 'u32'
    }
  },
  CheckWeight: emptyCheck,
  LockStakingStatus: emptyCheck,
  SkipCheckIfFeeless: ChargeTransactionPayment,
  ValidateEquivocationReport: emptyCheck
};
