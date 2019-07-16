// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, EventRecord, Hash, Header, Option, Vector } from '@polkadot/types';

import WsProvider from '@polkadot/rpc-provider/ws';

import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

describeE2E({
  only: ['docker-polkadot-alexander', 'remote-polkadot-alexander']
})('Promise e2e alex queries', (wsUrl): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  it('retrieves the list of validators', (done): Promise<() => void> => {
    return (
      api.query.staking.validators((res): void => {
        console.error(res);
        console.log('api.query.staking.validators():', res.toJSON());

        done();
      })
    );
  });

  describe('retrieves a single value', (): void => {
    it('retrieves the list of stash validators', (done): Promise<() => void> => {
      return (
        api.query.staking.validators('5DuiZFa184E9iCwbh4WjXYvJ88NHvWJbS8SARY8Ev1YEqrri', (res): void => {
          console.error(res);
          console.log('api.query.staking.validators(id):', res.toJSON());
          done();
        })
      );
    });

    it('Gets the hash of the last finalized header', async (done): Promise<() => void> => {
      return (
        api.rpc.chain.getFinalizedHead((head): void => {
          expect(head instanceof Hash).toBe(true);
          done();
        })
      );
    });

    it('Subscribes to the best finalized header on ALEX', async (done): Promise<() => void> => {
      return (
        api.rpc.chain.subscribeFinalizedHeads((head): void => {
          expect(head instanceof Header).toBe(true);
          done();
        })
      );
    });
  });

  it('derives a list of the controllers', (done): Promise<() => void> => {
    return (
      api.derive.staking.controllers((res: [AccountId[], Option<AccountId>[]]): void => {
        console.log('api.derive.staking.controllers:', JSON.stringify(res));

        done();
      })
    );
  });

  it('makes a query at a latest block (specified)', async (): Promise<void> => {
    const header = await api.rpc.chain.getHeader() as Header;
    const events = await api.query.system.events.at(header.hash) as Vector<EventRecord>;

    expect(events.length).not.toEqual(0);
  });

  it('subscribes to events', (done): Promise<() => void> => {
    return api.query.system.events((events: Vector<EventRecord>): void => {
      expect(events).not.toHaveLength(0);
      done();
    });
  });
});
