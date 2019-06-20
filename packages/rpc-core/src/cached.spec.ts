// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import MockProvider from '@polkadot/rpc-provider/mock';
import { AccountId } from '@polkadot/types';

import Rpc from '.';

describe('Cached Observables', () => {
  let rpc: Rpc;
  const keyring = testingPairs();

  beforeEach(() => {
    rpc = new Rpc(new MockProvider());
  });

  it('creates a single observable for subscriptions (multiple calls)', () => {
    const observable1 = rpc.chain.subscribeNewHead(123);
    const observable2 = rpc.chain.subscribeNewHead(123);

    expect(observable2).toBe(observable1);
  });

  it('creates a single observable for subscriptions (multiple calls, no arguments)', () => {
    const observable1 = rpc.chain.subscribeNewHead();
    const observable2 = rpc.chain.subscribeNewHead();

    expect(observable2).toBe(observable1);
  });

  it('creates a single observable (multiple calls, different arguments that should be cached together)', () => {
    const observable1 = rpc.chain.subscribeNewHead(keyring.alice.address);
    const observable2 = rpc.chain.subscribeNewHead(new AccountId(keyring.alice.address));

    expect(observable2).toBe(observable1);
  });

  it('creates multiple observables for different values', () => {
    const observable1 = rpc.chain.subscribeNewHead(123);
    const observable2 = rpc.chain.subscribeNewHead(456);

    expect(observable2).not.toBe(observable1);
  });

  it('clears cache if there are no more subscribers', () => {
    const observable1 = rpc.chain.subscribeNewHead();
    const observable2 = rpc.chain.subscribeNewHead();

    expect(observable1).toBe(observable2);

    const sub1 = observable1.subscribe();
    const sub2 = observable2.subscribe();

    sub1.unsubscribe();
    sub2.unsubscribe();

    // No more subscribers, now create a new observable
    const observable3 = rpc.chain.subscribeNewHead();

    expect(observable3).not.toBe(observable1);
  });

  it('creates different observables for different methods but same arguments', () => {
    const observable1 = rpc.chain.subscribeNewHead(123);
    const observable2 = rpc.state.subscribeStorage(123);

    expect(observable2).not.toBe(observable1);
  });

  it('creates multiple observables for one-shots', () => {
    const observable1 = rpc.system.chain(123);
    const observable2 = rpc.system.chain(123);

    expect(observable2).not.toBe(observable1);
  });
});
