// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV1 from '../v1/Metadata';
import MetadataV2 from '.';

export default function toV1 (v2: MetadataV2): MetadataV1 {
  // V2 and V1 have same interface
  return v2 as any as MetadataV1;
}
