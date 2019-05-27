// Copyright 2017-2019 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';

import { RpcInterface$Section } from '@plugnet/rpc-core/types';

jest.mock('@plugnet/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

import RpcRx from '.';

describe('replay', () => {
  const params = [123, false];
  let api: RpcRx;
  let section: RpcInterface$Section;
  let observable: Observable<any>;
  let update: any;

  beforeEach(() => {
    api = new RpcRx();
  });

  beforeEach(() => {
    const subMethod: any = jest.fn((name, ...params) => {
      update = params.pop();

      return Promise.resolve(12345);
    });

    subMethod.unsubscribe = jest.fn(() => {
      return Promise.resolve(true);
    });

    section = {
      subMethod
    };

    // @ts-ignore
    observable = api.createObservable('subMethod', section)(...params);
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
