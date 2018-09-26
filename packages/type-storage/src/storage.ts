// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Storage } from './types';
import * as wellKnownKeys from './wellKnownKeys';

export const storage: Storage = {
  wellKnownKeys // Prefill storage with wellKnownKeys, as not returned by state_getMetadata
};
