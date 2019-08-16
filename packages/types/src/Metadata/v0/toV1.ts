
// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV1, FunctionMetadataV1 } from '../../interfaces/metadata/types';
import { stringUpperFirst } from '@polkadot/util';

import { Option, Vec } from '../../codec';
import MetadataV0 from './Metadata';
import { RuntimeModuleMetadataV0 } from './Modules';
import { Text } from '../../primitive';
import MetadataV1, { ModuleMetadata as ModuleMetadataV1 } from '../v1/Metadata';
import { StorageFunctionMetadata } from '../v1/Storage';

function toV1Calls (modul: RuntimeModuleMetadataV0): Option<FunctionMetadataV1> {
  return modul.module.call.functions.length === 0
    ? new Option(Vec.with('FunctionMetadataV1'))
    : new Option(Vec.with('FunctionMetadataV1'), modul.module.call.functions);
}

function toV1Events (metadataV0: MetadataV0, prefix: Text): Option<EventMetadataV1> {
  const events = metadataV0.events.find((event): boolean => event.name.eq(prefix));

  return events
    ? new Option(Vec.with('EventMetadataV1'), events.events)
    : new Option(Vec.with('EventMetadataV1'));
}

function toV1Storage (modul: RuntimeModuleMetadataV0): Option<StorageFunctionMetadata> {
  return modul.storage.isNone
    ? new Option(Vec.with(StorageFunctionMetadata))
    : new Option(
      Vec.with(StorageFunctionMetadata),
      modul.storage.unwrap().functions
    );
}

/**
 * Function that converts MetadataV0 to MetadataV1
 */
export default function toV1 (metadataV0: MetadataV0): MetadataV1 {
  return new MetadataV1({
    modules: metadataV0.modules.map((modul): ModuleMetadataV1 => {
      // The prefix of this module (capitalized)
      const prefix = modul.storage.isSome
        ? modul.storage.unwrap().prefix.toString()
        : stringUpperFirst(modul.prefix.toString()); // If this module doesn't have storage, we just assume the prefix is the name capitalized

      return new ModuleMetadataV1({
        name: modul.prefix, // Not capitalized
        prefix, // Capitalized
        storage: toV1Storage(modul),
        calls: toV1Calls(modul),
        events: toV1Events(metadataV0, modul.prefix)
      });
    })
  });
}
