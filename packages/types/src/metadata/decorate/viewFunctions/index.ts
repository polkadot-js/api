// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, PalletMetadataV16, PalletViewFunctionMetadataV16 } from '../../interfaces/metadata/index.js';
import type { Text } from '@polkadot/types';
import type { DecoratedView, DecoratedViewFunction } from '../types.js';

import { stringCamelCase } from '@polkadot/util';

/** @internal */
function getLookup (registry: Registry) {
  // Helper to get the PortableRegistry lookup interface
  return registry.lookup;
}

/** @internal */
export function decorateViewFunctions (registry: Registry, metadata: MetadataLatest, _version: number): DecoratedView {
  const result: DecoratedView = {};
  const lookup = getLookup(registry);
  const pallets = metadata.pallets;

  for (let i = 0; i < pallets.length; i++) {
    const pallet = pallets[i] as PalletMetadataV16; // Cast here, assuming metadata is V16

    // Check if the pallet has viewFunctions (only V16+ will)
    // Need a safer check if MetadataLatest could contain older pallet types
    if (pallet.viewFunctions && pallet.viewFunctions.length > 0) {
      const palletName = stringCamelCase(pallet.name);
      const section: Record<string, DecoratedViewFunction> = {};

      for (let j = 0; j < pallet.viewFunctions.length; j++) {
        const viewMeta = pallet.viewFunctions[j];
        const functionName = stringCamelCase(viewMeta.name);

        section[functionName] = {
          args: viewMeta.args.map(({ name, type }) => ({
            name: name.toString(),
            // Get type definition from lookup
            typeDef: lookup.getTypeDef(type),
            typeName: name // Pass the Text name
          })),
          docs: viewMeta.docs.map((d) => d.toString()),
          meta: viewMeta, // Store the raw metadata
          method: functionName,
          name: viewMeta.name.toString(), // Original name
          pallet: palletName,
          // Get return type definition from lookup
          returnTypeDef: lookup.getTypeDef(viewMeta.returnType),
          section: palletName
        };
      }

      if (Object.keys(section).length !== 0) {
        result[palletName] = section;
      }
    }
  }

  return result;
} 