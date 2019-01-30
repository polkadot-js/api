// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OuterDispatchCall, OuterDispatchMetadata } from '../v0/Calls';
import { EventMetadata, OuterEventMetadata, OuterEventMetadataEvent } from '../v0/Events';
import { CallMetadata, FunctionMetadata, RuntimeModuleMetadata, ModuleMetadata, StorageFunctionMetadata, StorageMetadata } from '../v0/Modules';

import MetadataV0 from '../v0';
import MetadataV1 from './index';

function modulesV0 (v1: MetadataV1): Array<RuntimeModuleMetadata> {
  return v1.modules.map((mod) => {
    return new RuntimeModuleMetadata({
      prefix: mod.name, // passed from name, compact with casing
      module: new ModuleMetadata({
        name: 'Module',
        call: new CallMetadata({
          name: 'Call',
          functions: mod.calls.isNone
            ? []
            : mod.calls.unwrap().map((fn, id) =>
              new FunctionMetadata({
                id,
                name: fn.name,
                arguments: fn.arguments,
                documentation: fn.documentation
              })
            )
        })
      }),
      storage: mod.storage.isNone
        ? null
        : new StorageMetadata({
          prefix: mod.prefix,
          functions: mod.storage.unwrap().map((fn) =>
            new StorageFunctionMetadata({
              name: fn.name,
              modifier: 0, // unused, don't specify
              type: fn.type,
              default: fn.default,
              documentation: fn.documentation
            })
          )
        })
    });
  });
}

function outerDispatchV0 (v1: MetadataV1): OuterDispatchMetadata {
  return new OuterDispatchMetadata({
    name: 'Call', // unused, don't specify
    // only add the where we have an actual outer dispatch available, only these
    // are assigned indexes for this dispatch
    calls: v1.modules
      .filter(({ calls }) => calls.isSome)
      .map((mod, index) =>
        new OuterDispatchCall({
          // these are swapped in the actual V0 data, i.e. name is UpperCase
          name: mod.prefix,
          prefix: mod.name,
          index
        })
      )
  });
}

function outerEventV0 (v1: MetadataV1): OuterEventMetadata {
  return new OuterEventMetadata({
    name: 'Event',
    events: v1.modules
      .filter(({ events }) => events.isSome)
      .map((mod) =>
        new OuterEventMetadataEvent([
          mod.prefix,
          mod.events.unwrap().map((event) =>
            new EventMetadata({
              name: event.name,
              arguments: event.arguments,
              documentation: event.documentation
            })
          )
        ])
      )
  });
}

export default function toV0 (v1: MetadataV1): MetadataV0 {
  const outerEvent = outerEventV0(v1);
  const modules = modulesV0(v1);
  const outerDispatch = outerDispatchV0(v1);

  return new MetadataV0({
    outerEvent,
    modules,
    outerDispatch
  });
}
