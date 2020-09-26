// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import { Definitions } from '../../types';

export default {
  rpc: {},
  types: {
    Extrinsic: 'GenericExtrinsic',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    ExtrinsicV4: 'GenericExtrinsicV4',
    ExtrinsicPayloadV4: 'GenericExtrinsicPayloadV4',
    ExtrinsicSignatureV4: 'GenericExtrinsicSignatureV4',
    ExtrinsicUnknown: 'GenericExtrinsicUnknown',
    ExtrinsicPayloadUnknown: 'GenericExtrinsicPayloadUnknown',

    // eras
    ImmortalEra: 'GenericImmortalEra',
    MortalEra: 'GenericMortalEra',

    // signatures & signer
    MultiSignature: {
      _enum: {
        Ed25519: 'Ed25519Signature',
        Sr25519: 'Sr25519Signature',
        Ecdsa: 'EcdsaSignature'
      }
    },
    Signature: 'H512',
    SignerPayload: 'GenericSignerPayload',
    EcdsaSignature: '[u8; 65]',
    Ed25519Signature: 'H512',
    Sr25519Signature: 'H512'
  }
} as Definitions;
