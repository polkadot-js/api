// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableType } from '../../../interfaces/index.js';
import type { StorageEntry } from '../../../primitive/types.js';
import type { Registry } from '../../../types/index.js';

import { getTypeDef } from '@polkadot/types-create';

import { createFunction } from './createFunction.js';

export interface ManualMetadata {
  docs: string;
  type: string;
}

interface ManualDefinition {
  method: string;
  prefix: string;
  section: string;
}

function findSiPrimitive (registry: Registry, type: string): PortableType | undefined {
  const prim = type.toLowerCase();

  return registry.lookup.types.find((t) =>
    (
      t.type.def.isPrimitive &&
      t.type.def.asPrimitive.toString().toLowerCase() === prim
    ) || (
      t.type.def.isHistoricMetaCompat &&
      t.type.def.asHistoricMetaCompat.toString().toLowerCase() === prim
    )
  );
}

function findSiType (registry: Registry, type: string): PortableType | undefined {
  let portable = findSiPrimitive(registry, type);

  // some types are either Sequence or Arrays, cater for these
  // specifically (these all come from the base substrate known keys)
  if (!portable && (type === 'Bytes' || type.startsWith('[u8;'))) {
    const u8 = findSiPrimitive(registry, 'u8');

    if (u8) {
      if (type === 'Bytes') {
        portable = registry.lookup.types.find((t) =>
          (
            t.type.def.isSequence &&
            t.type.def.asSequence.type.eq(u8.id)
          ) || (
            t.type.def.isHistoricMetaCompat &&
            t.type.def.asHistoricMetaCompat.eq(type)
          )
        );
      } else {
        const td = getTypeDef(type);

        portable = registry.lookup.types.find((t) =>
          (
            t.type.def.isArray &&
            t.type.def.asArray.eq({
              len: td.length,
              type: u8.id
            })
          ) || (
            t.type.def.isHistoricMetaCompat &&
            t.type.def.asHistoricMetaCompat.eq(type)
          )
        );
      }
    }
  }

  if (!portable) {
    // Not fatal, however if this happens the storage key using this
    // type will not return valid values, rather it will most probably
    // be decoded incorrectly
    console.warn(`Unable to map ${type} to a lookup index`);
  }

  return portable;
}

// Small helper function to factorize code on this page.
/** @internal */
export function createRuntimeFunction ({ method, prefix, section }: ManualDefinition, key: Uint8Array | string, { docs, type }: ManualMetadata): (registry: Registry) => StorageEntry {
  return (registry: Registry): StorageEntry =>
    createFunction(registry, {
      meta: registry.createTypeUnsafe('StorageEntryMetadataLatest', [{
        docs: registry.createTypeUnsafe('Vec<Text>', [[docs]]),
        modifier: registry.createTypeUnsafe('StorageEntryModifierLatest', ['Required']),
        name: registry.createTypeUnsafe('Text', [method]),
        toJSON: (): any => key,
        type: registry.createTypeUnsafe('StorageEntryTypeLatest', [{ Plain: findSiType(registry, type)?.id || 0 }])
      }]),
      method,
      prefix,
      section
    }, { key, skipHashing: true });
}
