// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from '@polkadot/api';

function createApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  process.env.NODE_ENV = 'test';

  const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');

  return new ApiPromise({ provider }).isReady;
}

describe.skip('misc quick tests', (): void => {
  it.skip('retrieves balances correctly', async (): Promise<void> => {
    const api = await createApi();

    console.error(JSON.stringify(
      await api.query.system.account('FPzukZw2mphWsXDqdkNzLaxnanjZEWH9i2vqwobTdtde5me')
    ));
    console.error(JSON.stringify(
      await api.query.system.account('HUewJvzVuEeyaxH2vx9XiyAPKrpu1Zj5r5Pi9VrGiBVty7q')
    ));
  });

  it.skip('handles map keys', async (): Promise<void> => {
    const api = await createApi();

    console.time('map.keys');

    const keys = await api.query.system.account.keys();

    console.error('# keys', keys.length);

    console.timeEnd('map.keys');
  });

  it.skip('handles map entries', async (): Promise<void> => {
    const api = await createApi();

    console.time('map.entries');

    const entries = await api.query.system.account.entries(); // api.query.indices.accounts.entries();

    console.error('# entries', entries.length);

    console.timeEnd('map.entries');
  });

  it.skip('handles doublemap entries', async (): Promise<void> => {
    const api = await createApi();
    const activeEra = await api.query.staking.activeEra();

    console.error(JSON.stringify(
      await api.query.staking.erasStakers.entries(activeEra.unwrapOrDefault().index)
    ));
  });

  it.skip('does something in society', async (): Promise<void> => {
    const api = await createApi();

    console.error(JSON.stringify(
      await api.query.society.defenderVotes('Dab4bfYTZRUDMWjYAUQuFbDreQ9mt7nULWu3Dw7jodbzVe9')
    ));
  });

  it.skip('allows for range queries', async (): Promise<void> => {
    const api = await createApi();
    const header = await api.rpc.chain.getHeader();

    console.error(JSON.stringify(
      (await api.query.staking.activeEra.range([header.parentHash, header.hash], 'Dab4bfYTZRUDMWjYAUQuFbDreQ9mt7nULWu3Dw7jodbzVe9'))
        .map(([block, value]) => [block, value.toRawType(), value.toHuman()])
    ));
  });
});
