// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockState } from './types';

import createState from './state';

describe('state', () => {
  let state: MockState;

  beforeEach(() => {
    state = createState();
  });

  it('generates a sane initial state', () => {
    expect(
      state
    ).toMatchObject({
      subscriptionId: 0,
      subscriptionMap: {}
    });
  });

  it('generates a proper section_method map', () => {
    expect(
      state.subscriptions
    ).toMatchObject({
      'chain_subscribeNewHead': {
        callbacks: {},
        lastValue: null
      }
    });
  });
});
