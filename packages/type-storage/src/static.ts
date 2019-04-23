// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, TypeRegistry } from '@polkadot/types';
import metadataRpc from '@polkadot/types/Metadata/v0/static';

import fromMetadata from './fromMetadata';

export default (typeRegistry: TypeRegistry) => TypeRegistry.withRegistry(typeRegistry, () => fromMetadata(
  new Metadata(metadataRpc)
));
