// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import RpcRx from './index';

jest.mock('@polkadot/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

describe('subject', () => {
  const params = [123, false];
  let api;
  let update;
  let section;
  let subscription;
  let observable;

  beforeEach(() => {
    api = new RpcRx();
  });

  beforeEach(() => {
    const subMethod = jest.fn((name, ...params) => {
      update = params.pop();

      return Promise.resolve(12345);
    });

    subMethod.unsubscribe = jest.fn(() => {
      return Promise.resolve(true);
    });

    section = {
      subMethod
    };

    observable = api.createSubject('subMethod', params, section);
  });

  afterEach(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  it('subscribes via the api section', (done) => {
    observable.subscribe((value) => {
      if (value) {
        expect(
          section.subMethod
        ).toHaveBeenCalledWith(123, false, expect.anything());

        done();
      }
    });

    update('test');
  });

  it('returns the observable value', (done) => {
    subscription = observable.subscribe((value) => {
      if (value) {
        expect(value).toEqual('test');
        done();
      }
    });

    update('test');
  });
});
