// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type { SiLookupTypeId } from '../../primitive/types.js';
// import type { PalletCallMetadataV14, PalletConstantMetadataV14, PalletErrorMetadataV14, PalletEventMetadataV14, PalletStorageMetadataV14 } from './v14.js';

// NOTE: The imports above are commented out as they might not be directly needed
// if v16 reuses v15 structures or has its own complete definitions.
// This will need to be adjusted based on the actual V16 spec.

export interface PalletViewFunctionArgumentMetadataV16 extends Struct {
  readonly name: Text;
  readonly type: SiLookupTypeId; // Assuming it uses SiLookupTypeId like other metadata parts
  // readonly typeName: Option<Text>; // Optionally, if type name is directly included
}

export interface PalletViewFunctionMetadataV16 extends Struct {
  readonly name: Text;
  readonly args: Vec<PalletViewFunctionArgumentMetadataV16>;
  readonly returnType: SiLookupTypeId; // Assuming it uses SiLookupTypeId
  // readonly returnTypeName: Option<Text>; // Optionally, if type name is directly included
  readonly docs: Vec<Text>;
}

export interface PalletMetadataV16 extends Struct {
  readonly name: Text;
  readonly storage: Option<PalletStorageMetadataV14>; // Assuming V14/V15 structure for now
  readonly calls: Option<PalletCallMetadataV14>;     // Assuming V14/V15 structure for now
  readonly events: Option<PalletEventMetadataV14>;    // Assuming V14/V15 structure for now
  readonly constants: Vec<PalletConstantMetadataV14>; // Assuming V14/V15 structure for now
  readonly errors: Option<PalletErrorMetadataV14>;    // Assuming V14/V15 structure for now
  readonly viewFunctions: Vec<PalletViewFunctionMetadataV16>; // The new field
  readonly index: u8;
} 