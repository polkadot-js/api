// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '../create/index.js';
import { CID_AURA, GenericConsensusEngineId as ConsensusEngineId } from './ConsensusEngineId.js';

describe('ConsensusEngineId', (): void => {
  const registry = new TypeRegistry();

  it('creates a valid id for aura', (): void => {
    expect(new ConsensusEngineId(registry, 'aura').toU8a()).toEqual(CID_AURA);
  });

  it('reverses an id to string for babe', (): void => {
    expect(new ConsensusEngineId(registry, 'BABE').toString()).toEqual('BABE');
  });
});
