// Copyright 2017-2019 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';

import testingPairs from '@plugnet/keyring/testingPairs';
import { RpcInterface$Section } from '@plugnet/rpc-core/types';
import { AccountId } from '@plugnet/types';

jest.mock('@plugnet/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

import RpcRx from '.';

describe('createCachedObservable', () => {
  let api: RpcRx;
  let creator: (...params: Array<any>) => Observable<any>;
  const keyring = testingPairs();
  let section: RpcInterface$Section;

  beforeEach(() => {
    api = new RpcRx();
  });

  beforeEach(() => {
    // Create two methods in our section
    const subMethod: any = jest.fn(() => Promise.resolve('subMethodResult'));
    subMethod.unsubscribe = jest.fn(() => Promise.resolve(true));
    const subMethod2: any = jest.fn(() => Promise.resolve('subMethod2Result'));
    subMethod2.unsubscribe = jest.fn(() => Promise.resolve(true));

    section = {
      subMethod,
      subMethod2
    };

    // @ts-ignore Private method
    creator = api.createObservable('subMethod', section);
  });

  it('creates a single observable', () => {
    creator(123).subscribe();

    expect(
      section.subMethod
    ).toHaveBeenCalledWith(123, expect.anything());
  });

  it('creates a single observable (multiple calls)', () => {
    const observable1 = creator(123);
    const observable2 = creator(123);

    expect(
      observable2
    ).toBe(observable1);
  });

  it('creates a single observable (multiple calls, different arguments that should be cached together)', () => {
    const observable1 = creator(keyring.alice.address());
    const observable2 = creator(new AccountId(keyring.alice.address()));

    expect(
      observable2
    ).toBe(observable1);
  });

  it('creates multiple observables for different values', () => {
    const observable1 = creator(123);
    const observable2 = creator(456);

    expect(
      observable2
    ).not.toBe(observable1);
  });

  it('creates different observables for different methods but same arguments', () => {
    const observable1 = creator(123);
    // @ts-ignore Private method
    const observable2 = api.createObservable('subMethod2', section)(123);

    expect(
      observable2
    ).not.toBe(observable1);
  });
});
