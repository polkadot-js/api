// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    Extrinsic: 'GenericExtrinsic',
    ExtrinsicEra: 'GenericExtrinsicEra',
    ExtrinsicPayload: 'GenericExtrinsicPayload',
    ExtrinsicV1: 'GenericExtrinsicV1',
    ExtrinsicPayloadV1: 'GenericExtrinsicPayloadV1',
    ExtrinsicSignatureV1: 'GenericExtrinsicSignatureV1',
    ExtrinsicV2: 'GenericExtrinsicV2',
    ExtrinsicPayloadV2: 'GenericExtrinsicPayloadV2',
    ExtrinsicSignatureV2: 'GenericExtrinsicSignatureV2',
    ExtrinsicV3: 'GenericExtrinsicV3',
    ExtrinsicPayloadV3: 'GenericExtrinsicPayloadV3',
    ExtrinsicSignatureV3: 'GenericExtrinsicSignatureV3',
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
};
