// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import metadataRpc from '@polkadot/types/Metadata.rpc';
import Metadata from '@polkadot/types/Metadata';

import extrinsics from './index';
import fromMetadata from './fromMetadata';

export default fromMetadata(
  extrinsics,
  new Metadata().fromJSON(metadataRpc)
);
