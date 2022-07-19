// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableType } from '../../../interfaces';
import type { StorageEntry } from '../../../primitive/types';
import type { Registry } from '../../../types';

import { createFunction } from './createFunction';

export interface ManualMetadata {
  docs: string;
  type: string;
}

interface ManualDefinition {
  method: string;
  prefix: string;
  section: string;
}

function findSiPrimitive (registry: Registry, _prim: string): PortableType | undefined {
  const prim = _prim.toLowerCase();

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

function findSiType (registry: Registry, orig: string): PortableType | undefined {
  let portable = findSiPrimitive(registry, orig);

  if (!portable && orig === 'Bytes') {
    const u8 = findSiPrimitive(registry, 'u8');

    if (u8) {
      portable = registry.lookup.types.find((t) =>
        (
          t.type.def.isSequence &&
          t.type.def.asSequence.type.eq(u8.id)
        ) || (
          t.type.def.isHistoricMetaCompat &&
          t.type.def.asHistoricMetaCompat.eq(orig)
        )
      );
    }
  }

  if (!portable) {
    console.warn(`Unable to map ${orig} to a lookup index`);
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
