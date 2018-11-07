// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

jest.mock('@polkadot/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

const RpcRx = require('./index').default;

describe('createCachedObservable', () => {
  let api;
  let creator;
  let section;

  beforeEach(() => {
    api = new RpcRx();
  });

  beforeEach(() => {
    const subMethod = jest.fn((name, ...params) => {
      return Promise.resolve(12345);
    });

    subMethod.unsubscribe = jest.fn(() => {
      return Promise.resolve(true);
    });

    const resMethod = jest.fn((name, ...params) => {
      return Promise.resolve(12345);
    });

    section = {
      resMethod,
      subMethod
    };

    creator = api.createCachedObservable('test', 'subMethod', section);
  });

  it('creates a single observable', () => {
    creator(123).subscribe((value) => {});

    expect(
      section.subMethod
    ).toHaveBeenCalledWith(123, expect.anything());
  });

  it('creates a single observable (multiple calls)', () => {
    const observable1 = creator(123);

    observable1.subscribe((value) => {});

    const observable2 = creator(123);

    observable2.subscribe((value) => {});

    expect(
      observable2
    ).toEqual(observable1);
  });

  it('creates multiple observers for different values', () => {
    const observable1 = creator(123);

    observable1.subscribe((value) => {});

    const observable2 = creator(456);

    observable2.subscribe((value) => {});

    expect(
      observable2
    ).not.toEqual(observable1);
  });
});
