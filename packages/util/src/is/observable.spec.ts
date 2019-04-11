// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isObservable } from '.';

describe('isObservable', () => {
  it('returns true on valid observables', () => {
    expect(
      isObservable({ next: () => true })
    ).toEqual(true);
  });

  it('returns false on invalid objects', () => {
    expect(
      isObservable('notAnObservable')
    ).toEqual(false);
  });

  it('returns false on invalid next functions', () => {
    expect(
      isObservable({ next: true })
    ).toEqual(false);
  });
});
