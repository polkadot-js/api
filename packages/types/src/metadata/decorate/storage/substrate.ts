// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableType } from '../../../interfaces';
import type { StorageEntry } from '../../../primitive/types';
import type { Registry } from '../../../types';

import { createFunction } from './createFunction';

interface SubstrateMetadata {
  docs: string;
  type: string;
}

type Creator = (registry: Registry) => StorageEntry;

function findSiPrimitive (registry: Registry, _prim: string): PortableType | undefined {
  const prim = _prim.toLowerCase();

  const portable = registry.lookup.types.find((t) =>
    (
      t.type.def.isPrimitive &&
      t.type.def.asPrimitive.toString().toLowerCase() === prim
    ) || (
      t.type.def.isHistoricMetaCompat &&
      t.type.def.asHistoricMetaCompat.toString().toLowerCase() === prim
    )
  );

  return portable;
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
function createRuntimeFunction (method: string, key: string, { docs, type }: SubstrateMetadata): (registry: Registry) => StorageEntry {
  return (registry: Registry): StorageEntry =>
    createFunction(registry, {
      meta: registry.createType('StorageEntryMetadataLatest', {
        docs: registry.createType('Vec<Text>', [docs]),
        modifier: registry.createType('StorageEntryModifierLatest', 'Required'),
        name: registry.createType('Text', method),
        toJSON: (): any => key,
        type: registry.createType('StorageEntryTypeLatest', { Plain: findSiType(registry, type)?.id || 0 })
      }),
      method,
      prefix: 'Substrate',
      section: 'substrate'
    }, { key, skipHashing: true });
}

export const substrate: Record<string, Creator> = {
  changesTrieConfig: createRuntimeFunction('changesTrieConfig', ':changes_trie', {
    docs: ' Changes trie configuration is stored under this key.',
    type: 'u32'
  }),
  childStorageKeyPrefix: createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
    docs: ' Prefix of child storage keys.',
    type: 'u32'
  }),
  code: createRuntimeFunction('code', ':code', {
    docs: ' Wasm code of the runtime.',
    type: 'Bytes'
  }),
  extrinsicIndex: createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
    docs: ' Current extrinsic index (u32) is stored under this key.',
    type: 'u32'
  }),
  heapPages: createRuntimeFunction('heapPages', ':heappages', {
    docs: ' Number of wasm linear memory pages required for execution of the runtime.',
    type: 'u64'
  })
};
