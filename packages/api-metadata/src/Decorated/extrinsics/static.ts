// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModulesWithCalls } from '@polkadot/types/types';

import Metadata from '../../Metadata';
import metadataRpc from '../../Metadata/static';
import fromMetadata from './fromMetadata';

const staticMetadata: ModulesWithCalls = fromMetadata(
  new Metadata(metadataRpc)
);
export default staticMetadata;
