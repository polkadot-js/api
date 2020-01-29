// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RegistryTypes } from '../types';

export interface OverrideVersionedType {
  minmax: [number?, number?]; // min (v >= min) and max (v <= max)
  types: RegistryTypes;
}

export type OverrideModuleType = Record<string, string>;
