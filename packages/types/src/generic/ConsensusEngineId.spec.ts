// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { CID_AURA, CID_BABE, CID_GRPA, GenericConsensusEngineId as ConsensusEngineId } from './ConsensusEngineId';

describe('ConsensusEngineId', (): void => {
  it('creates a valid id for aura', (): void => {
    expect(ConsensusEngineId.stringToId('FRNK')).toEqual(CID_GRPA);
    expect(ConsensusEngineId.stringToId('aura')).toEqual(CID_AURA);
  });

  it('reverses an id to string for babe', (): void => {
    expect(ConsensusEngineId.idToString(CID_BABE)).toEqual('BABE');
  });
});
