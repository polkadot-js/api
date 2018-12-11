// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

jest.mock('@polkadot/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

const RpcRx = require('./index').default;

describe('replay', () => {
  const params = [123, false];
  let api;
  let update;
  let section;
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

    observable = api.createReplay('subMethod', params, section);
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
    observable.subscribe((value) => {
      if (value) {
        expect(value).toEqual('test');
        done();
      }
    });

    update('test');
  });

  it('unsubscribes as required', (done) => {
    section.subMethod.unsubscribe = async () => {
      done();
    };

    let subscription = observable.subscribe((value) => {
      if (value) {
        subscription.unsubscribe();
      }
    });

    update('test');
  });
});
