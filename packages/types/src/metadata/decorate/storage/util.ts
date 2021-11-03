// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

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

// Small helper function to factorize code on this page.
/** @internal */
export function createRuntimeFunction ({ method, prefix, section }: ManualDefinition, key: Uint8Array | string, { docs, type }: ManualMetadata): (registry: Registry) => StorageEntry {
  return (registry: Registry): StorageEntry =>
    createFunction(registry, {
      meta: registry.createType('StorageEntryMetadataLatest', {
        docs: registry.createType('Vec<Text>', [docs]),
        modifier: registry.createType('StorageEntryModifierLatest', 'Required'),
        name: registry.createType('Text', method),
        toJSON: (): any => key,
        type: registry.createType('StorageEntryTypeLatest', {
          Plain: registry.lookup.stringToSiType(type)?.id
        })
      }),
      method,
      prefix,
      section
    }, { key, skipHashing: true });
}
