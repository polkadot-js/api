// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import { CID_AURA, CID_NMBS, GenericConsensusEngineId as ConsensusEngineId } from './ConsensusEngineId';

describe('ConsensusEngineId', (): void => {
  const registry = new TypeRegistry();

  it('creates a valid id for aura', (): void => {
    expect(new ConsensusEngineId(registry, 'aura').toU8a()).toEqual(CID_AURA);
  });

  it('reverses an id to string for babe', (): void => {
    expect(new ConsensusEngineId(registry, 'BABE').toString()).toEqual('BABE');
  });

  it('creates a valid id for nimbus', (): void => {
    expect(new ConsensusEngineId(registry, 'nmbs').toU8a()).toEqual(CID_NMBS);
  });
});
