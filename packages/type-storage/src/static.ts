// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import metadataRpc from '@polkadot/types/Metadata.rpc';
import Metadata from '@polkadot/types/Metadata';

import fromMetadata from './fromMetadata';

export default fromMetadata(
  new Metadata().fromJSON(metadataRpc)
);
