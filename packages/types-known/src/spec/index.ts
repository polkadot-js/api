// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideVersionedType } from '@polkadot/types/types';

import kusama from './kusama';
import polkadot from './polkadot';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  kusama,
  polkadot
};

export default typesSpec;
