// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { jest } from '@jest/globals';

import { ApiPromise, WsProvider } from '@polkadot/api';

describe.skip('misc online tests', (): void => {
  let api: ApiPromise;

  beforeEach(async () => {
    jest.setTimeout(30000);
    process.env.NODE_ENV = 'test';

    // const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
    const provider = new WsProvider('wss://westend-rpc.polkadot.io/');

    api = await ApiPromise.create({ provider });
  });

  afterEach(async () => {
    await api.disconnect();
  });

  it('expose rpc and rx definition', (): void => {
    console.error(api.rpc.payment.queryFeeDetails.meta);
    console.error(api.rx.rpc.chain.getBlock.meta);
  });

  it.skip('retrieves balances correctly', async (): Promise<void> => {
    console.error(JSON.stringify(
      await api.query.system.account('FPzukZw2mphWsXDqdkNzLaxnanjZEWH9i2vqwobTdtde5me')
    ));
    console.error(JSON.stringify(
      await api.query.system.account('HUewJvzVuEeyaxH2vx9XiyAPKrpu1Zj5r5Pi9VrGiBVty7q')
    ));
  });

  it.skip('handles map keys', async (): Promise<void> => {
    console.time('map.keys');

    const keys = await api.query.system.account.keys();

    console.error('# keys', keys.length);

    console.timeEnd('map.keys');
  });

  it.skip('handles map entries', async (): Promise<void> => {
    console.time('map.entries');

    const entries = await api.query.system.account.entries(); // api.query.indices.accounts.entries();

    console.error('# entries', entries.length);

    console.timeEnd('map.entries');
  });

  it.skip('handles doublemap entries', async (): Promise<void> => {
    const activeEra = await api.query.staking.activeEra();

    console.error(JSON.stringify(
      await api.query.staking.erasStakers.entries(activeEra.unwrapOrDefault().index)
    ));
  });

  it.skip('does something in society', async (): Promise<void> => {
    console.error(JSON.stringify(
      await api.query.society.defenderVotes('Dab4bfYTZRUDMWjYAUQuFbDreQ9mt7nULWu3Dw7jodbzVe9')
    ));
  });
});
