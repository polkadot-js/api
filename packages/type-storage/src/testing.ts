// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Metadata from '@polkadot/api-codec/Metadata';
import json from '@polkadot/api-codec/Metadata.rpc.json';

import { storage } from './storage';
import { fromMetadata } from './fromMetadata';

export default fromMetadata(
  storage,
  new Metadata().fromJSON(json.result)
);
