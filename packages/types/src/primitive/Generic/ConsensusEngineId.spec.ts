// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import ConsensusEngineId, { CID_AURA, CID_BABE, CID_GRPA } from './ConsensusEngineId';

describe('ConsensusEngineId', (): void => {
  it('creates a valid id for aura', (): void => {
    expect(ConsensusEngineId.stringToId('FRNK')).toEqual(CID_GRPA);
    expect(ConsensusEngineId.stringToId('aura')).toEqual(CID_AURA);
  });

  it('reverses an id to string for babe', (): void => {
    expect(ConsensusEngineId.idToString(CID_BABE)).toEqual('BABE');
  });
});
