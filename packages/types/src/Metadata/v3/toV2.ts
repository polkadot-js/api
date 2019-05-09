// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Option from '../../codec/Option';
import Vector from '../../codec/Vector';
import MetadataV2 from '../v2/Metadata';
import MetadataV3 from '.';
import { MetadataModule } from './Metadata';
import { StorageFunctionMetadata } from './Storage';

function storageV2 (storage: Option<Vector<StorageFunctionMetadata>>): Option<Vector<StorageFunctionMetadata>> {
  if (storage.isNone) {
    return storage;
  }

  const storageV2 = storage.unwrap().filter(({ type }) => !type.isDoubleMap);

  return new Option<Vector<StorageFunctionMetadata>>(
    Vector.with(StorageFunctionMetadata),
    new Vector<StorageFunctionMetadata>(StorageFunctionMetadata, storageV2)
  );
}

function modulesV2 (v3: MetadataV3): Array<MetadataModule> {
  return v3.modules.map((mod) =>
    new MetadataModule({
      name: mod.name,
      prefix: mod.prefix,
      storage: storageV2(mod.storage)
    }));
}

export default function toV2 (v3: MetadataV3): MetadataV2 {
  return new MetadataV2({
    modules: modulesV2(v3)
  });
}
