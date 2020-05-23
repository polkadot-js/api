// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import MockProvider from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types';

import Rpc from '.';

describe('Cached Observables', (): void => {
  const registry = new TypeRegistry();
  let rpc: Rpc;
  const keyring = testingPairs();

  beforeEach((): void => {
    rpc = new Rpc(registry, new MockProvider(registry));
  });

  it('creates a single observable for subscriptions (multiple calls)', (): void => {
    const observable1 = rpc.state.subscribeStorage([123]);
    const observable2 = rpc.state.subscribeStorage([123]);

    expect(observable2).toBe(observable1);
  });

  it('creates a single observable for subscriptions (multiple calls, no arguments)', (): void => {
    const observable1 = rpc.chain.subscribeNewHeads();
    const observable2 = rpc.chain.subscribeNewHeads();

    expect(observable2).toBe(observable1);
  });

  it('creates a single observable (multiple calls, different arguments that should be cached together)', (): void => {
    const observable1 = rpc.state.subscribeStorage([keyring.alice.address]);
    const observable2 = rpc.state.subscribeStorage([registry.createType('AccountId', keyring.alice.address)]);

    expect(observable2).toBe(observable1);
  });

  it('creates multiple observables for different values', (): void => {
    const observable1 = rpc.chain.getBlockHash(123);
    const observable2 = rpc.chain.getBlockHash(456);

    expect(observable2).not.toBe(observable1);
  });

  it('subscribes to the same one if within the period (unbsub delay)', (done): void => {
    const observable1 = rpc.chain.subscribeNewHeads();
    const sub1 = observable1.subscribe();

    sub1.unsubscribe();

    setTimeout((): void => {
      const observable2 = rpc.chain.subscribeNewHeads();
      const sub2 = observable2.subscribe();

      expect(observable1).toBe(observable2);

      sub2.unsubscribe();
      done();
    }, 500);
  });

  it('clears cache if there are no more subscribers', (done): void => {
    const observable1 = rpc.chain.subscribeNewHeads();
    const observable2 = rpc.chain.subscribeNewHeads();
    const sub1 = observable1.subscribe();
    const sub2 = observable2.subscribe();

    expect(observable1).toBe(observable2);

    sub1.unsubscribe();
    sub2.unsubscribe();

    setTimeout((): void => {
      // No more subscribers, now create a new observable
      const observable3 = rpc.chain.subscribeNewHeads();

      expect(observable3).not.toBe(observable1);
      done();
    }, 3500);
  });

  it('creates different observables for different methods but same arguments', (): void => {
    // params do not match here
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const observable1 = (rpc.chain as any).subscribeNewHeads([123]);
    const observable2 = rpc.state.subscribeStorage([123]);

    expect(observable2).not.toBe(observable1);
  });

  it('creates multiple observables for one-shots', (): void => {
    const observable1 = rpc.chain.getBlockHash(123);
    const observable2 = rpc.chain.getBlockHash(123);

    expect(observable2).not.toBe(observable1);
  });
});
