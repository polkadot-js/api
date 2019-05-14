// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV2 from '../v2/Metadata';
import MetadataV3 from '.';

export default function toV2 (v2: MetadataV3): MetadataV2 {
  return new MetadataV2(v2);
}
