// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import json3 from '../json/Header.003.json';
import block1 from '../json/SignedBlock.003.00.json';
import Digest, { ConsensusEngineId, CID_AURA, CID_BABE, CID_GRPA } from './Digest';

describe('Digest', () => {
  it('decodes logs with consensus', () => {
    const digest = new Digest(json3.result.digest);

    expect(digest.logs.length).toEqual(1);

    const log = digest.logs[0];

    expect(log.type).toBe('Consensus');
    expect(log.value.toJSON()).toEqual([
      1634891105,
      '0x69c97e0f00000000479c09f7ace12ed3e1af2dba6cca6831e257e80feef56c7474d6c69bae6f4e8a6e0045a87afe14296992c38b7d55abcbe617c441cd35e8667abbcb1678f31802'
    ]);
  });

  it('filters logs, excluding items', () => {
    const logs = new Digest(block1.result.block.header.digest).logsWith('PreRuntime');

    expect(logs.length).toEqual(1);
    expect(logs[0].type).toEqual('PreRuntime');
  });

  it('filters logs, including items', () => {
    const logs = new Digest(block1.result.block.header.digest).logsWithout('PreRuntime');

    expect(logs.length).toEqual(1);
    expect(logs[0].type).toEqual('Seal');
  });

  describe('ConsensusId', () => {
    it('creates a valid id for aura', () => {
      expect(ConsensusEngineId.stringToId('FRNK')).toEqual(CID_GRPA);
      expect(ConsensusEngineId.stringToId('aura')).toEqual(CID_AURA);
    });

    it('reverses an id to string for babe', () => {
      expect(ConsensusEngineId.idToString(CID_BABE)).toEqual('babe');
    });
  });
});
