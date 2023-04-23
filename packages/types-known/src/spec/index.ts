// Copyright 2017-2023 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideVersionedType } from '@polkadot/types/types';

import { versioned as centrifugeChain } from './centrifuge-chain.js';
import { versioned as kusama } from './kusama.js';
import { versioned as node } from './node.js';
import { versioned as nodeTemplate } from './node-template.js';
import { versioned as polkadot } from './polkadot.js';
import { versioned as rococo } from './rococo.js';
import { versioned as shell } from './shell.js';
import { versioned as statemint } from './statemint.js';
import { versioned as westend } from './westend.js';

// Type overrides for specific spec types & versions as given in runtimeVersion
export const typesSpec: Record<string, OverrideVersionedType[]> = {
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
