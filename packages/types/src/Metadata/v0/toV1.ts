
// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV1, FunctionMetadataV1, ModuleMetadataV1, RuntimeModuleMetadataV0, StorageFunctionMetadataV1 } from '../../interfaces/metadata';

import { stringUpperFirst } from '@polkadot/util';

import { createType, Option, Vec } from '../../codec';
import MetadataV0 from './Metadata';
import { Text } from '../../primitive';
import MetadataV1 from '../v1/Metadata';

function toV1Calls ({ module: { call: { functions } } }: RuntimeModuleMetadataV0): Option<FunctionMetadataV1> {
  return functions.length
    ? new Option(Vec.with('FunctionMetadataV1'), functions)
    : new Option(Vec.with('FunctionMetadataV1'));
}

function toV1Events (metadataV0: MetadataV0, prefix: Text): Option<EventMetadataV1> {
  const events = metadataV0.events.find((event): boolean => event[0].eq(prefix));

  return events
    ? new Option(Vec.with('EventMetadataV1'), events[1])
    : new Option(Vec.with('EventMetadataV1'));
}

function toV1Storage ({ storage }: RuntimeModuleMetadataV0): Option<StorageFunctionMetadataV1> {
  return storage.isSome
    ? new Option('Vec<StorageFunctionMetadataV1>', storage.unwrap().functions)
    : new Option('Vec<StorageFunctionMetadataV1>');
}

/**
 * Function that converts MetadataV0 to MetadataV1
 */
export default function toV1 (metadataV0: MetadataV0): MetadataV1 {
  return new MetadataV1({
    modules: metadataV0.modules.map((mod): ModuleMetadataV1 => {
      // The prefix of this module (capitalized)
      const prefix = mod.storage.isSome
        ? mod.storage.unwrap().prefix.toString()
        : stringUpperFirst(mod.prefix.toString()); // If this module doesn't have storage, we just assume the prefix is the name capitalized

      return createType('ModuleMetadataV1', {
        name: mod.prefix, // Not capitalized
        prefix, // Capitalized
        storage: toV1Storage(mod),
        calls: toV1Calls(mod),
        events: toV1Events(metadataV0, mod.prefix)
      });
    })
  });
}
