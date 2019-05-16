
// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringUpperFirst } from '@polkadot/util';

import { Option, Vector } from '../../codec';
import MetadataV0 from './Metadata';
import { RuntimeModuleMetadata } from './Modules';
import { Text } from '../../primitive';
import { FunctionMetadata } from '../v1/Calls';
import { EventMetadata } from '../v1/Events';
import MetadataV1, { ModuleMetadata } from '../v1/Metadata';
import { StorageFunctionMetadata } from '../v1/Storage';

function toV1Calls (modul: RuntimeModuleMetadata) {
  return modul.module.call.functions.length === 0
    ? new Option(Vector.with(FunctionMetadata))
    : new Option(Vector.with(FunctionMetadata), modul.module.call.functions);
}

function toV1Events (metadataV0: MetadataV0, prefix: Text) {
  const events = metadataV0.events.find((event) => event.name.eq(prefix));

  return events
    ? new Option(Vector.with(EventMetadata), events.events)
    : new Option(Vector.with(EventMetadata));
}

function toV1Storage (modul: RuntimeModuleMetadata) {
  return modul.storage.isNone
    ? new Option(Vector.with(StorageFunctionMetadata))
    : new Option(
      Vector.with(StorageFunctionMetadata),
      modul.storage.unwrap().functions
    );
}

/**
 * Function that converts MetadataV0 to MetadataV1
 */
export default function toV1 (metadataV0: MetadataV0): MetadataV1 {
  return new MetadataV1({
    modules: metadataV0.modules.map((modul) => {
      // The prefix of this module (capitalized)
      const prefix = modul.storage.isSome
        ? modul.storage.unwrap().prefix.toString()
        : stringUpperFirst(modul.prefix.toString()); // If this module doesn't have storage, we just assume the prefix is the name capitalized

      return new ModuleMetadata({
        name: modul.prefix, // Not capitalized
        prefix, // Capitalized
        storage: toV1Storage(modul),
        calls: toV1Calls(modul),
        events: toV1Events(metadataV0, modul.prefix)
      });
    })
  });
}
