// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV1 from './Metadata';
import MetadataV2 from '../v2';

export default function toV2 (metadataV1: MetadataV1): MetadataV2 {
  return new MetadataV2(metadataV1);
}
