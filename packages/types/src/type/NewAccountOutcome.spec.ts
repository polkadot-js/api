// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import NewAccountOutcome from './NewAccountOutcome';

describe('NewAccountOutcome', (): void => {
  it('allows setting value in constructor', (): void => {
    expect(
      new NewAccountOutcome(2).toNumber()
    ).toEqual(2);
  });
});
