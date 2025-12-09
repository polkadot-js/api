// Copyright 2017-2025 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignerPayload } from '@polkadot/types/interfaces';
import type { Codec, Registry } from '@polkadot/types-codec/types';

type ExtensionHandler = (payload: SignerPayload, registry: Registry) => { extra?: Codec; additionalSigned?: Codec };

export const EXTENSION_MATCHER: Record<string, ExtensionHandler | undefined> = {
  ChargeAssetTxPayment: (payload, registry) => ({
    extra: payload.assetId
      ? registry.createType('Option<TAssetConversion>', payload.assetId)
      : registry.createType('Null')
  }),
  ChargeTransactionPayment: (payload) => ({
    extra: payload.tip
  }),
  CheckGenesis: (payload, registry) => ({
    additionalSigned: registry.createType('Hash', payload.genesisHash)
  }),
  CheckMetadataHash: (_, registry) => ({
    additionalSigned: registry.metadata.hash
  }),
  CheckMortality: (payload, registry) => {
    const genesisHash = registry.createType('Hash', payload.genesisHash);

    return {
      additional: payload.era.isMortalEra
        ? payload.blockHash || genesisHash
        : genesisHash,
      extra: payload.era
    };
  },
  CheckNonZeroSender: (payload, registry) => ({
    extra: registry.createType('Address', payload.address)
  }),
  CheckNonce: (payload, registry) => ({
    extra: registry.createType('Compact<Index>', payload.nonce)
  }),
  CheckSpecVersion: (payload, registry) => ({
    additionalSigned: registry.createType('u32', payload.runtimeVersion.specVersion)
  }),
  CheckTxVersion: (payload, registry) => ({
    additionalSigned: registry.createType('u32', payload.version)
  })
};
