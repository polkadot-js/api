// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from '@polkadot/api';
import { HttpProvider } from '@polkadot/rpc-provider';

function createApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  process.env.NODE_ENV = 'test';

  const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');

  return new ApiPromise({ provider }).isReady;
}

function createHttpApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  process.env.NODE_ENV = 'test';

  const provider = new HttpProvider('https://kusama.api.onfinality.io/public');
  // const provider = new WsProvider('wss://westend-rpc.polkadot.io/');
  // const provider = new WsProvider('ws://127.0.0.1:9944/');

  return new ApiPromise({ provider }).isReady;
}

describe('test multi query', function () {
  it('api.query.system.account.multi()', async (): Promise<void> => {
    const api = await createApi();
    const b1 = await api.query.system.account('HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP');
    const b2 = await api.query.system.account('DSLxCoJ4VyjYvpqoEHciLFQdFzdXPyXpMw85QpgE3mVSz2Z');
    const [mb1, mb2] = await api.query.system.account.multi(['HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP', 'DSLxCoJ4VyjYvpqoEHciLFQdFzdXPyXpMw85QpgE3mVSz2Z']);
    expect(b1.eq(mb1)).toBeTruthy();
    expect(b2.eq(mb2)).toBeTruthy();
  });
  it('api.queryMulti()', async (): Promise<void> => {
    const api = await createApi();
    const b1 = await api.query.system.account('HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP');
    const i1 = await api.query.identity.identityOf('HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP');
    const [mb1, mi1] = await api.queryMulti([
      [api.query.system.account, 'HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP'],
      [api.query.identity.identityOf, 'HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP'],
    ])
    expect(b1.eq(mb1)).toBeTruthy();
    expect(i1.eq(mi1)).toBeTruthy();
  });

  it('api.query.system.account.multi() over HttpProvider', async (): Promise<void> => {
    const api = await createHttpApi();
    const b1 = await api.query.system.account('HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP');
    const b2 = await api.query.system.account('DSLxCoJ4VyjYvpqoEHciLFQdFzdXPyXpMw85QpgE3mVSz2Z');
    const [mb1, mb2] = await api.query.system.account.multi(['HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP', 'DSLxCoJ4VyjYvpqoEHciLFQdFzdXPyXpMw85QpgE3mVSz2Z']);
    expect(b1.eq(mb1)).toBeTruthy();
    expect(b2.eq(mb2)).toBeTruthy();
  });
  it('api.queryMulti() over HttpProvider', async (): Promise<void> => {
    const api = await createHttpApi();
    const b1 = await api.query.system.account('HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP');
    const i1 = await api.query.identity.identityOf('HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP');
    const [mb1, mi1] = await api.queryMulti([
      [api.query.system.account, 'HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP'],
      [api.query.identity.identityOf, 'HRuaGanNmkmeQgZPWPXmkZJb944raNS5ni2vhKzhz75zVYP'],
    ])
    expect(b1.eq(mb1)).toBeTruthy();
    expect(i1.eq(mi1)).toBeTruthy();
  });

  it('derive query over WsProvider', async (): Promise<void> => {
    const api = await createApi();
    const validators = await api.derive.staking.validators();
    expect(validators).toBeTruthy();
    const accounts = await api.derive.staking.accounts(validators.validators);
    expect(accounts).toBeTruthy();
    expect(accounts.length).toBeTruthy();
  })

  it('derive query over HttpProvider', async (): Promise<void> => {
    const api = await createHttpApi();
    const validators = await api.derive.staking.validators();
    expect(validators).toBeTruthy();
    const accounts = await api.derive.staking.accounts(validators.validators);
    expect(accounts).toBeTruthy();
    expect(accounts.length).toBeTruthy();
  })
});

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
