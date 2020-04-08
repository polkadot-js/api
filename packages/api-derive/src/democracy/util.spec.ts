// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { TypeRegistry } from '@polkadot/types';

import { approxChanges, calcPassing } from './util';

const ACTUAL = {
  sqrtElectorate: new BN('2949443240'),
  votedAye: new BN('358406690000000000'),
  votedNay: new BN('18942000000000000'),
  votedTotal: new BN('136099900000000000')
};

const registry = new TypeRegistry();

describe('approxChanges', (): void => {
  it('approximates where the points are', (): void => {
    const threshold = registry.createType('VoteThreshold', 0);

    console.time('approxChanges');

    const { changeAye, changeNay, isPassing } = approxChanges(threshold, ACTUAL.sqrtElectorate, ACTUAL);

    console.timeEnd('approxChanges');

    console.error(isPassing, changeAye.toString().padStart(20).substr(0, 8), changeNay.toString().padStart(20).substr(0, 8));

    expect(isPassing).toBe(true);
    expect(
      calcPassing(threshold, ACTUAL.sqrtElectorate, ACTUAL.votedAye.sub(changeAye), ACTUAL.votedNay, ACTUAL.votedTotal.sub(changeAye))
    ).toBe(false);
    expect(
      calcPassing(threshold, ACTUAL.sqrtElectorate, ACTUAL.votedAye, ACTUAL.votedNay.add(changeNay), ACTUAL.votedTotal.add(changeNay))
    ).toBe(false);
  });
});
