
// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV1, FunctionMetadataV1, MetadataV0, MetadataV1, ModuleMetadataV1, RuntimeModuleMetadataV0, StorageFunctionMetadataV1 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';

import { stringUpperFirst } from '@polkadot/util';

import { createType, Option, Vec } from '@polkadot/types/codec';
import { Text } from '@polkadot/types/primitive';

/** @internal */
function toV1Calls (registry: Registry, { module: { call: { functions } } }: RuntimeModuleMetadataV0): Option<FunctionMetadataV1> {
  return functions.length
    ? new Option(registry, Vec.with('FunctionMetadataV1'), functions)
    : new Option(registry, Vec.with('FunctionMetadataV1'));
}

/** @internal */
function toV1Events (registry: Registry, metadataV0: MetadataV0, prefix: Text): Option<EventMetadataV1> {
  const events = metadataV0.outerEvent.events.find((event): boolean => event[0].eq(prefix));

  return events
    ? new Option(registry, Vec.with('EventMetadataV1'), events[1])
    : new Option(registry, Vec.with('EventMetadataV1'));
}

/** @internal */
function toV1Storage (registry: Registry, { storage }: RuntimeModuleMetadataV0): Option<StorageFunctionMetadataV1> {
  return storage.isSome
    ? new Option(registry, 'Vec<StorageFunctionMetadataV1>', storage.unwrap().functions)
    : new Option(registry, 'Vec<StorageFunctionMetadataV1>');
}

/** @internal */
export default function toV1 (registry: Registry, metadataV0: MetadataV0): MetadataV1 {
  return createType(registry, 'MetadataV1', {
    modules: metadataV0.modules.map((mod): ModuleMetadataV1 => {
      // The prefix of this module (capitalized)
      const prefix = mod.storage.isSome
        ? mod.storage.unwrap().prefix.toString()
        : stringUpperFirst(mod.prefix.toString()); // If this module doesn't have storage, we just assume the prefix is the name capitalized

      return createType(registry, 'ModuleMetadataV1', {
        name: mod.prefix, // Not capitalized
        prefix, // Capitalized
        storage: toV1Storage(registry, mod),
        calls: toV1Calls(registry, mod),
        events: toV1Events(registry, metadataV0, mod.prefix)
      });
    })
  });
}
