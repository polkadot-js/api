// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';

export interface ModuleConstants {
  [key: string]: Codec;
}

export interface Constants {
  [key: string]: ModuleConstants; // Will hold modules returned by state_getMetadata
}
