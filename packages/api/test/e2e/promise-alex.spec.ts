// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventRecord, Hash, Header } from '@polkadot/types';

import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

import { ApiPromiseInterface } from '@polkadot/api/promise/types';

const WS_URL = 'wss://poc3-rpc.polkadot.io/';
// const WS_URL = 'wss://substrate-rpc.parity.io/';

describe.skip('alex queries', () => {
  let api: ApiPromiseInterface;

  beforeEach(() => {
    jest.setTimeout(30000);
  });

  beforeEach(async () => {
    api = await Api.create({
      provider: new WsProvider(WS_URL)
    });

    return api;
  });

  it('retrieves the list of validators', (done) => {
    api.query.staking.validators((res) => {
      console.error(res);

      console.log('api.query.staking.validators():', res.toJSON());

      done();
    }).then().catch();
  });

  describe('retrieves a single value', () => {
    it('retrieves the list of stash validators', (done) => {
      api.query.staking.validators('5DuiZFa184E9iCwbh4WjXYvJ88NHvWJbS8SARY8Ev1YEqrri', (res) => {
        console.error(res);
        console.log('api.query.staking.validators(id):', res.toJSON());

        done();
      }).then().catch();
    });

    it('Gets the hash of the last finalized header', async (done) => {
      api.rpc.chain.getFinalizedHead((head) => {
        expect(head instanceof Hash).toBe(true);
        done();
      }).then().catch();
    });

    it('Subscribes to the best finalized header on ALEX', async (done) => {
      api.rpc.chain.subscribeFinalizedHeads((heads) => {
        expect(heads instanceof Header).toBe(true);
        done();
      }).then().catch();
    });
  });

  it('derives a list of the controllers', (done) => {
    api.derive.staking.controllers((res) => {
      console.log('api.derive.staking.controllers:', JSON.stringify(res));

      done();
    }).then().catch();
  });

  it('makes a query at a latest block (specified)', async () => {
    const header: Header = await api.rpc.chain.getHeader();
    const events: Array<EventRecord> = await api.query.system.events.at(header.hash);

    events.forEach(({ event: { data, method, section }, phase, topics }, index) => {
      console.error(index, phase.toString(), `: ${section}.${method}`, data.toString(), topics.toString());
    });

    expect(events.length).not.toEqual(0);
  });

  it('subscribes to events', (done) => {
    api.query.system.events((events: Array<EventRecord>) => {
      console.error(JSON.stringify(events));

      events.forEach(({ event: { data, method, section }, phase, topics }, index) => {
        console.error(index, phase.toString(), `: ${section}.${method}`, data.toString(), topics.toString());
      });

      expect(events).not.toHaveLength(0);
      done();
    });
  });
});
