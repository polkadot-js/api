// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV2 from './Metadata';
import MetadataV3 from '../v3';

export default function toV3 (metadataV2: MetadataV2): MetadataV3 {
  return new MetadataV3(metadataV2);
}
