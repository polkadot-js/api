// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockRequest } from '../types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from './index';

let ws: any;
let mock: any;

function createWs (requests: MockRequest, autoConnect: boolean) {
  mock = mockWs(requests);
  ws = new Ws(TEST_WS_URL, autoConnect);

  return ws;
}

describe('Ws', () => {
  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('returns the connected state', () => {
    expect(
      // @ts-ignore Failing test
      createWs([]).isConnected()
    ).toEqual(false);
  });
});
