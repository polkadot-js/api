// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RegistryTypes } from '@polkadot/types/types';

export interface OverrideVersionedType {
  minmax: [number?, number?]; // min (v >= min) and max (v <= max)
  types: RegistryTypes;
}

export interface OverrideModuleType {
  name: string;
  override: string;
}
