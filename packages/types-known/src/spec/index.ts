// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideVersionedType } from '@polkadot/types/types';

import centrifugeChain from './centrifuge-chain';
import kusama from './kusama';
import node from './node';
import nodeTemplate from './node-template';
import polkadot from './polkadot';
import rococo from './rococo';
import shell from './shell';
import statemint from './statemint';
import westend from './westend';

// Type overrides for specific spec types & versions as given in runtimeVersion
const typesSpec: Record<string, OverrideVersionedType[]> = {
  'centrifuge-chain': centrifugeChain,
  kusama,
  node,
  'node-template': nodeTemplate,
  polkadot,
  rococo,
  shell,
  statemine: statemint,
  statemint,
  westend,
  westmint: statemint
};

export default typesSpec;
