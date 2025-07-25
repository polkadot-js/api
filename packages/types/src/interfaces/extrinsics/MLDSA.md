# ML-DSA (Module-Lattice-Based Digital Signature Algorithm) Support

## Overview

This library now supports ML-DSA signatures, a post-quantum digital signature scheme standardized by NIST in FIPS 204. ML-DSA is designed to be secure against attacks from both classical and quantum computers, making it an important addition to the existing signature schemes (Ed25519, Sr25519, and ECDSA).

## ML-DSA Parameter Sets

ML-DSA comes in three parameter sets, each offering different security levels and performance characteristics:

| Parameter Set | Security Level | Public Key Size | Secret Key Size | Signature Size |
|--------------|----------------|-----------------|-----------------|----------------|
| ML-DSA-44    | NIST Level 2   | 1,312 bytes    | 2,560 bytes    | 2,420 bytes   |
| ML-DSA-65    | NIST Level 3   | 1,952 bytes    | 4,032 bytes    | 3,309 bytes   |
| ML-DSA-87    | NIST Level 5   | 2,592 bytes    | 4,896 bytes    | 4,627 bytes   |

## Type Definitions

### Signature Types

```typescript
// Individual ML-DSA signature types
Mldsa44Signature: '[u8; 2420]'
Mldsa65Signature: '[u8; 3309]'
Mldsa87Signature: '[u8; 4627]'
```

### MultiSignature Extension

The `MultiSignature` enum has been extended to include ML-DSA variants:

```typescript
MultiSignature: {
  _enum: {
    Ed25519: 'Ed25519Signature',
    Sr25519: 'Sr25519Signature',
    Ecdsa: 'EcdsaSignature',
    Mldsa44: 'Mldsa44Signature',
    Mldsa65: 'Mldsa65Signature',
    Mldsa87: 'Mldsa87Signature'
  }
}
```

### MultiSigner Extension

The `MultiSigner` enum now includes ML-DSA public key types:

```typescript
MultiSigner: {
  _enum: {
    Ed25519: '[u8; 32]',
    Sr25519: '[u8; 32]',
    Ecdsa: '[u8; 33]',
    Mldsa44: '[u8; 1312]',
    Mldsa65: '[u8; 1952]',
    Mldsa87: '[u8; 2592]'
  }
}
```

## Usage Examples

### Creating ML-DSA Signatures

```typescript
import { TypeRegistry } from '@polkadot/types';

const registry = new TypeRegistry();

// Create an ML-DSA-44 signature
const mldsaSignature = new Uint8Array(2420); // Your actual signature bytes
const signature = registry.createType('MultiSignature', {
  Mldsa44: mldsaSignature
});

// Check signature type
console.log(signature.isMldsa44); // true
console.log(signature.type); // 'Mldsa44'

// Access the signature data
const sigData = signature.asMldsa44.toU8a();
```

### Working with ML-DSA Public Keys

```typescript
// Create an ML-DSA-65 public key
const mldsaPublicKey = new Uint8Array(1952); // Your actual public key bytes
const signer = registry.createType('MultiSigner', {
  Mldsa65: mldsaPublicKey
});

// Check signer type
console.log(signer.isMldsa65); // true
console.log(signer.type); // 'Mldsa65'
```

### Using ML-DSA in Extrinsics

```typescript
// ML-DSA signatures can be used in extrinsics just like other signature types
const extrinsicSignature = registry.createType('ExtrinsicSignature', {
  Mldsa87: new Uint8Array(4627) // Your ML-DSA-87 signature
});
```

## Implementation Notes

1. **Size Considerations**: ML-DSA signatures and public keys are significantly larger than traditional signatures. This may impact:
   - Transaction size and fees
   - Network bandwidth requirements
   - Storage requirements

2. **Compatibility**: Ensure that the runtime you're connecting to supports ML-DSA signatures before using them.

3. **Parameter Set Selection**:
   - ML-DSA-44: Suitable for most applications, balancing security and performance
   - ML-DSA-65: Higher security level for sensitive applications
   - ML-DSA-87: Maximum security for critical applications requiring long-term protection

## Migration Guide

To migrate from classical signatures to ML-DSA:

1. Choose the appropriate ML-DSA parameter set based on your security requirements
2. Update your key generation to produce ML-DSA keys
3. Replace signature type specifications:
   ```typescript
   // Before
   const sig = registry.createType('MultiSignature', { Ed25519: edSig });
   
   // After
   const sig = registry.createType('MultiSignature', { Mldsa44: mldsaSig });
   ```

## Future Considerations

As quantum computing advances, ML-DSA provides a migration path to quantum-resistant cryptography. Consider implementing hybrid approaches that use both classical and post-quantum signatures during the transition period.