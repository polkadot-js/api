// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import VoteThreshold from './VoteThreshold';

describe('VoteThreshold', (): void => {
  it('starts with default value', (): void => {
    expect(
      new VoteThreshold().toString()
    ).toEqual('Super majority approval');
  });

  it('allows setting value in constructor', (): void => {
    expect(
      new VoteThreshold(2).toNumber()
    ).toEqual(2);
  });
});
