// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create/index.js';

describe('ML-DSA Signatures', (): void => {
  const registry = new TypeRegistry();

  describe('Mldsa44Signature', (): void => {
    it('creates a valid Mldsa44Signature', (): void => {
      const signature = new Uint8Array(2420).fill(1);
      const sig = registry.createType('Mldsa44Signature', signature);

      expect(sig.toU8a()).toHaveLength(2420);
      expect(sig.toU8a()).toEqual(signature);
    });

    it('encodes to the correct length', (): void => {
      const sig = registry.createType('Mldsa44Signature');
      expect(sig.encodedLength).toEqual(2420);
    });
  });

  describe('Mldsa65Signature', (): void => {
    it('creates a valid Mldsa65Signature', (): void => {
      const signature = new Uint8Array(3309).fill(2);
      const sig = registry.createType('Mldsa65Signature', signature);

      expect(sig.toU8a()).toHaveLength(3309);
      expect(sig.toU8a()).toEqual(signature);
    });

    it('encodes to the correct length', (): void => {
      const sig = registry.createType('Mldsa65Signature');
      expect(sig.encodedLength).toEqual(3309);
    });
  });

  describe('Mldsa87Signature', (): void => {
    it('creates a valid Mldsa87Signature', (): void => {
      const signature = new Uint8Array(4627).fill(3);
      const sig = registry.createType('Mldsa87Signature', signature);

      expect(sig.toU8a()).toHaveLength(4627);
      expect(sig.toU8a()).toEqual(signature);
    });

    it('encodes to the correct length', (): void => {
      const sig = registry.createType('Mldsa87Signature');
      expect(sig.encodedLength).toEqual(4627);
    });
  });

  describe('MultiSignature with ML-DSA', (): void => {
    it('creates ML-DSA-44 variant of MultiSignature', (): void => {
      const signature = new Uint8Array(2420).fill(4);
      const multiSig = registry.createType('MultiSignature', {
        Mldsa44: signature
      });

      expect(multiSig.isMldsa44).toBe(true);
      expect(multiSig.asMldsa44.toU8a()).toEqual(signature);
      expect(multiSig.type).toBe('Mldsa44');
    });

    it('creates ML-DSA-65 variant of MultiSignature', (): void => {
      const signature = new Uint8Array(3309).fill(5);
      const multiSig = registry.createType('MultiSignature', {
        Mldsa65: signature
      });

      expect(multiSig.isMldsa65).toBe(true);
      expect(multiSig.asMldsa65.toU8a()).toEqual(signature);
      expect(multiSig.type).toBe('Mldsa65');
    });

    it('creates ML-DSA-87 variant of MultiSignature', (): void => {
      const signature = new Uint8Array(4627).fill(6);
      const multiSig = registry.createType('MultiSignature', {
        Mldsa87: signature
      });

      expect(multiSig.isMldsa87).toBe(true);
      expect(multiSig.asMldsa87.toU8a()).toEqual(signature);
      expect(multiSig.type).toBe('Mldsa87');
    });

    it('encodes ML-DSA signatures correctly in MultiSignature', (): void => {
      const signature = new Uint8Array(2420).fill(7);
      const multiSig = registry.createType('MultiSignature', {
        Mldsa44: signature
      });

      // MultiSignature encoding: 1 byte for enum variant + signature bytes
      const encoded = multiSig.toU8a();
      expect(encoded).toHaveLength(2421); // 1 byte for variant + 2420 bytes for signature
      expect(encoded[0]).toBe(3); // Mldsa44 is the 4th variant (0-indexed)
      expect(encoded.slice(1)).toEqual(signature);
    });

    it('decodes ML-DSA signatures correctly from MultiSignature', (): void => {
      // Create encoded data: variant byte (3 for Mldsa44) + signature
      const signature = new Uint8Array(2420).fill(8);
      const encoded = new Uint8Array(2421);
      encoded[0] = 3; // Mldsa44 variant
      encoded.set(signature, 1);

      const multiSig = registry.createType('MultiSignature', encoded);

      expect(multiSig.isMldsa44).toBe(true);
      expect(multiSig.asMldsa44.toU8a()).toEqual(signature);
    });
  });

  describe('MultiSigner with ML-DSA', (): void => {
    it('creates ML-DSA-44 variant of MultiSigner', (): void => {
      const publicKey = new Uint8Array(1312).fill(9);
      const signer = registry.createType('MultiSigner', {
        Mldsa44: publicKey
      });

      expect(signer.isMldsa44).toBe(true);
      expect(signer.asMldsa44.toU8a()).toEqual(publicKey);
      expect(signer.type).toBe('Mldsa44');
    });

    it('creates ML-DSA-65 variant of MultiSigner', (): void => {
      const publicKey = new Uint8Array(1952).fill(10);
      const signer = registry.createType('MultiSigner', {
        Mldsa65: publicKey
      });

      expect(signer.isMldsa65).toBe(true);
      expect(signer.asMldsa65.toU8a()).toEqual(publicKey);
      expect(signer.type).toBe('Mldsa65');
    });

    it('creates ML-DSA-87 variant of MultiSigner', (): void => {
      const publicKey = new Uint8Array(2592).fill(11);
      const signer = registry.createType('MultiSigner', {
        Mldsa87: publicKey
      });

      expect(signer.isMldsa87).toBe(true);
      expect(signer.asMldsa87.toU8a()).toEqual(publicKey);
      expect(signer.type).toBe('Mldsa87');
    });

    it('encodes ML-DSA public keys correctly in MultiSigner', (): void => {
      const publicKey = new Uint8Array(1312).fill(12);
      const signer = registry.createType('MultiSigner', {
        Mldsa44: publicKey
      });

      // MultiSigner encoding: 1 byte for enum variant + public key bytes
      const encoded = signer.toU8a();
      expect(encoded).toHaveLength(1313); // 1 byte for variant + 1312 bytes for public key
      expect(encoded[0]).toBe(3); // Mldsa44 is the 4th variant (0-indexed)
      expect(encoded.slice(1)).toEqual(publicKey);
    });
  });

  describe('ML-DSA integration', (): void => {
    it('handles ML-DSA in extrinsic signatures', (): void => {
      // This test verifies that ML-DSA signatures can be used in the context
      // of extrinsic signatures, similar to Ed25519, Sr25519, and ECDSA
      const signature = new Uint8Array(2420).fill(13);
      const extrinsicSig = registry.createType('ExtrinsicSignature', {
        Mldsa44: signature
      });

      expect(extrinsicSig.isMldsa44).toBe(true);
      expect(extrinsicSig.asMldsa44.toU8a()).toEqual(signature);
    });

    it('supports all ML-DSA parameter sets', (): void => {
      // ML-DSA-44
      const sig44 = registry.createType('MultiSignature', {
        Mldsa44: new Uint8Array(2420).fill(14)
      });
      expect(sig44.isMldsa44).toBe(true);
      expect(sig44.asMldsa44.encodedLength).toBe(2420);

      // ML-DSA-65
      const sig65 = registry.createType('MultiSignature', {
        Mldsa65: new Uint8Array(3309).fill(15)
      });
      expect(sig65.isMldsa65).toBe(true);
      expect(sig65.asMldsa65.encodedLength).toBe(3309);

      // ML-DSA-87
      const sig87 = registry.createType('MultiSignature', {
        Mldsa87: new Uint8Array(4627).fill(16)
      });
      expect(sig87.isMldsa87).toBe(true);
      expect(sig87.asMldsa87.encodedLength).toBe(4627);
    });
  });
});
