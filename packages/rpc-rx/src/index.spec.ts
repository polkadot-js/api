// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isFunction } from '@polkadot/util';
import RpcRx from './index';

jest.mock('@polkadot/rpc-provider/ws', () => class {
  isConnected = () => true;
  on = () => true;
  send = () => true;
});

describe('RpcRx', () => {
  let api: any;

  beforeEach(() => {
    api = new RpcRx();
  });

  it('creates an instance with all sections', () => {
    expect(
      Object
        .keys(api)
        .filter((key) =>
          !key.startsWith('_')
        )
    ).toEqual([
      'author', 'chain', 'state', 'system'
    ]);
  });

  it('has isConnected', () => {
    expect(
      isFunction(api.isConnected)
    ).toBe(true);
  });
});
