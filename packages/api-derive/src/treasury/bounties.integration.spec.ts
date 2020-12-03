// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { ApiPromise, WsProvider } from '@polkadot/api';

function createApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  process.env.NODE_ENV = 'test';

  // const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
  const provider = new WsProvider('wss://cc3-5.kusama.network');
  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');

  return new ApiPromise({ provider }).isReady;
}

describe('with kusama', () => {
  it('gets derived bounties', async () => {
    const api = await createApi();

    const deriveBounties = await api.derive.treasury.bounties();

    expect(deriveBounties.bounties[0].proposer.toString()).toEqual('GLVeryFRbg5hEKvQZcAnLvXZEXhiYaBjzSDwrXBXrfPF7wj');
  });
});
