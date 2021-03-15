// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hexToBn } from '@polkadot/util';

import { CID_AURA, CID_BABE, CID_GRPA, GenericConsensusEngineId as ConsensusEngineId } from './ConsensusEngineId';

describe('ConsensusEngineId', (): void => {
  it('creates a valid id for aura', (): void => {
    expect(ConsensusEngineId.stringToId('FRNK')).toEqual(CID_GRPA);
    expect(ConsensusEngineId.stringToId('aura')).toEqual(CID_AURA);
  });

  it('reverses an id to string for babe', (): void => {
    expect(ConsensusEngineId.idToString(CID_BABE)).toEqual('BABE');
  });

  it('reverses a non-ASCII id to a hex string', (): void => {
    expect(ConsensusEngineId.idToString(hexToBn('0x01020304', { isLe: true }))).toEqual('0x01020304');
    expect(ConsensusEngineId.idToString(0x04030201)).toEqual('0x01020304');
  });
});
