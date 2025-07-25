# ML-DSA Implementation in Polkadot.js API

## Overview

This document summarizes the implementation of ML-DSA (Module-Lattice-Based Digital Signature Algorithm) support in the Polkadot.js API library. ML-DSA is a post-quantum digital signature scheme standardized by NIST in FIPS 204, designed to be secure against both classical and quantum computer attacks.

## Key Changes

### 1. Type Definitions

Added three ML-DSA parameter sets with their corresponding signature sizes:
- **ML-DSA-44**: 2,420-byte signatures, 1,312-byte public keys (NIST Level 2)
- **ML-DSA-65**: 3,309-byte signatures, 1,952-byte public keys (NIST Level 3)
- **ML-DSA-87**: 4,627-byte signatures, 2,592-byte public keys (NIST Level 5)

### 2. Modified Files

#### Core Type Definitions
- `api/packages/types/src/interfaces/extrinsics/definitions.ts`
  - Added `Mldsa44Signature`, `Mldsa65Signature`, `Mldsa87Signature` type definitions
  - Extended `MultiSignature` enum to include ML-DSA variants

- `api/packages/types/src/interfaces/runtime/definitions.ts`
  - Extended `MultiSigner` enum to include ML-DSA public key types

#### TypeScript Interfaces
- `api/packages/types/src/interfaces/extrinsics/types.ts`
  - Added ML-DSA signature interfaces
  - Extended `MultiSignature` interface with ML-DSA properties

- `api/packages/types/src/interfaces/runtime/types.ts`
  - Extended `MultiSigner` interface with ML-DSA properties

#### Augmented Types
- `api/packages/types-augment/src/lookup/substrate.ts`
  - Updated `SpRuntimeMultiSignature` to include ML-DSA variants
  - Added ML-DSA signature size definitions

- `api/packages/types-augment/src/lookup/types-substrate.ts`
  - Extended `SpRuntimeMultiSignature` interface

- `api/packages/types-augment/src/lookup/types-polkadot.ts`
  - Extended `SpRuntimeMultiSigner` interface

### 3. New Files

- `api/packages/types/src/test/mldsa.spec.ts`
  - Comprehensive test suite for ML-DSA functionality
  - Tests for all three parameter sets
  - Integration tests with `MultiSignature` and `MultiSigner`

## Implementation Details

### Type Structure

The implementation follows the existing pattern for signature types:

```typescript
// Signature types as fixed-size byte arrays
Mldsa44Signature: '[u8; 2420]'
Mldsa65Signature: '[u8; 3309]'
Mldsa87Signature: '[u8; 4627]'

// MultiSignature enum extended
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

// MultiSigner enum for public keys
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

### Enum Ordering

ML-DSA variants are added after existing signature types to maintain backward compatibility:
- Index 0: Ed25519
- Index 1: Sr25519
- Index 2: Ecdsa
- Index 3: Mldsa44
- Index 4: Mldsa65
- Index 5: Mldsa87

## Usage Example

```typescript
import { TypeRegistry } from '@polkadot/types';

const registry = new TypeRegistry();

// Create an ML-DSA-44 signature
const mldsaSignature = new Uint8Array(2420).fill(0); // Your signature bytes
const signature = registry.createType('MultiSignature', {
  Mldsa44: mldsaSignature
});

// Check signature type
console.log(signature.isMldsa44); // true
console.log(signature.type); // 'Mldsa44'

// Use in extrinsics
const extrinsicSig = registry.createType('ExtrinsicSignature', {
  Mldsa44: mldsaSignature
});
```

## Considerations

### Size Impact
ML-DSA signatures are significantly larger than classical signatures:
- Ed25519/Sr25519: 64 bytes
- ECDSA: 65 bytes
- ML-DSA-44: 2,420 bytes (~38x larger)
- ML-DSA-65: 3,309 bytes (~52x larger)
- ML-DSA-87: 4,627 bytes (~72x larger)

This impacts:
- Transaction size and fees
- Network bandwidth
- Storage requirements

### Runtime Support
Chains must explicitly support ML-DSA signatures in their runtime before they can be used. Attempting to use ML-DSA signatures on chains without support will result in transaction rejection.

### Future Work
1. Add key generation utilities for ML-DSA
2. Implement signature verification methods
3. Add support for hybrid signatures (classical + post-quantum)
4. Performance optimization for large signature handling

## Testing

Run the ML-DSA test suite:
```bash
cd api/packages/types
yarn test src/test/mldsa.spec.ts
```

The test suite covers:
- Individual signature type creation
- MultiSignature enum variants
- MultiSigner enum variants
- Encoding/decoding
- Integration with extrinsic signatures
