// Copyright 2017-2019 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { RpcInterface$Section } from '@polkadot/rpc-core/types';

jest.mock('@polkadot/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

import RpcRx from './index';

describe('createCachedObservable', () => {
  let api: RpcRx;
  let creator: (...params: Array<any>) => Observable<any>;
  let section: RpcInterface$Section;

  beforeEach(() => {
    api = new RpcRx();
  });

  beforeEach(() => {
    const subMethod = jest.fn((name, ...params) => {
      return Promise.resolve(12345);
    }) as any;

    section = {
      subMethod
    };

    // @ts-ignore
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
    ).toEqual(observable1);
  });

  it('creates multiple observables for different values', () => {
    const observable1 = creator(123);
    const observable2 = creator(456);

    expect(
      observable2
    ).not.toEqual(observable1);
  });
});
