// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { DefinitionsTypes } from '../../types';

export const v2: DefinitionsTypes = {
  MultiAssetsV2: 'MultiAssetsV1',
  MultiAssetV2: 'MultiAssetV1',
  MultiLocationV2: 'MultiLocation',
  ResponseV2: {
    _enum: {
      Null: 'Null',
      Assets: 'MultiAssetsV2',
      ExecutionResult: 'ResponseV2Result'
    }
  },
  ResponseV2Error: '(u32, XcmErrorV2)',
  ResponseV2Result: 'Result<Null, ResponseV2Error>',
  XcmErrorV2: {
    _enum: {
      Undefined: 'Null',
      Overflow: 'Null',
      Unimplemented: 'Null',
      UnhandledXcmVersion: 'Null',
      UnhandledXcmMessage: 'Null',
      UnhandledEffect: 'Null',
      EscalationOfPrivilege: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      DestinationBufferOverflow: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      FailedToDecode: 'Null',
      BadOrigin: 'Null',
      ExceedsMaxMessageSize: 'Null',
      FailedToTransactAsset: 'Null',
      WeightLimitReached: 'Weight',
      Wildcard: 'Null',
      TooMuchWeightRequired: 'Null',
      NotHoldingFees: 'Null',
      WeightNotComputable: 'Null',
      Barrier: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      TooExpensive: 'Null',
      AssetNotFound: 'Null',
      DestinationUnsupported: 'Null',
      RecursionLimitReached: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownWeightRequired: 'Null',
      Trap: 'u64',
      UnknownClaim: 'Null'
    }
  }
};
