// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata } from '@polkadot/types';
import metadataRpc from '@polkadot/types/Metadata/v0/static';
import { ModulesWithMethods } from '@polkadot/types/primitive/Method';

import fromMetadata from './fromMetadata';

const staticMetadata: ModulesWithMethods = fromMetadata(
  new Metadata(metadataRpc).asV0
);
export default staticMetadata;
