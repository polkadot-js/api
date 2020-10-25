// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

import centrifugeChain from './centrifuge-chain';
import kusama from './kusama';
import nodeTemplate from './node-template';
import polkadot from './polkadot';
import rococo from './rococo';
import westend from './westend';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  'centrifuge-chain': centrifugeChain,
  kusama,
  'node-template': nodeTemplate,
  polkadot,
  rococo,
  westend
};

export default typesSpec;
