// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
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
export function createRuntimeFunction ({ method, prefix, section }: ManualDefinition, key: Uint8Array | string, { docs, type }: ManualMetadata): (registry: CodecRegistry) => StorageEntry {
  return (registry: CodecRegistry): StorageEntry =>
    createFunction(registry, {
      meta: registry.createType('StorageEntryMetadataLatest', {
        docs: registry.createType('Vec<Text>', [docs]),
        modifier: registry.createType('StorageEntryModifierLatest', 'Required'),
        name: registry.createType('Text', method),
        toJSON: (): any => key,
        type: registry.createType('StorageEntryTypeLatest', { Plain: findSiType(registry as Registry, type)?.id || 0 })
      }),
      method,
      prefix,
      section
    }, { key, skipHashing: true });
}
