// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OuterDispatchCall, OuterDispatchMetadata } from '../v0/Calls';
import { OuterEventMetadata, OuterEventMetadataEvent } from '../v0/Events';
import { RuntimeModuleMetadata, ModuleMetadata } from '../v0/Modules';

import MetadataV0 from '../v0';
import MetadataV1 from './index';

function modulesV0 (v1: MetadataV1): Array<RuntimeModuleMetadata> {
  return v1.modules.map((mod) => {
    return new RuntimeModuleMetadata({
      prefix: mod.prefix,
      module: new ModuleMetadata({
        name: 'Module',
        call: mod.calls
      }),
      storage: mod.storage.isNone
        ? null
        : mod.storage.unwrap()
    });
  });
}

function outerDispatchV0 (v1: MetadataV1): OuterDispatchMetadata {
  return new OuterDispatchMetadata({
    name: 'Call',
    calls: v1.modules
      .filter((mod) => mod.outerDispatch.isSome)
      .map((mod) => {
        const dispatch = mod.outerDispatch.unwrap();

        return new OuterDispatchCall({
          name: dispatch.name,
          prefix: mod.prefix,
          index: dispatch.index
        });
      })
  });
}

function outerEventV0 (v1: MetadataV1): OuterEventMetadata {
  return new OuterEventMetadata({
    name: 'Event',
    events: v1.modules.map((mod) =>
      new OuterEventMetadataEvent([mod.prefix, mod.events])
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
