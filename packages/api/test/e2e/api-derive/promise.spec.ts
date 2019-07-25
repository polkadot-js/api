// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from '@polkadot/api/promise/Api';
import { WsProvider } from '@polkadot/rpc-provider';
import { HeaderExtended } from '@polkadot/api-derive/type';
import { DerivedElectionsInfo, DerivedFees, DerivedSessionInfo } from '@polkadot/api-derive/types';

import { describeE2E } from '../../util';

describeE2E()('Derive Promise e2e', (wsUrl: string): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));
    done();
  });

  it('Get the latest block number', async (): Promise<void> => {
    // https://github.com/polkadot-js/api/issues/777
    const block1 = await api.derive.chain.bestNumber();

    await new Promise((resolve): void => {
      setTimeout(resolve, 10000);
    });

    const block2 = await api.derive.chain.bestNumber();

    expect(block1.eq(block2)).toBe(false);
  });

  it('subscribes to newHead, retrieving the actual validator', (done): Promise<() => void> => {
    return api.derive.chain.subscribeNewHead(({ author }: HeaderExtended): void => {
      console.log('author', author && author.toString());

      if (author) {
        done();
      }
    });
  });

  it('retrieves the fees (api.queryMulti)', (done): Promise<() => void> => {
    return api.derive.balances.fees((fees: DerivedFees): void => {
      console.error('fees', JSON.stringify(fees));

      done();
    });
  });

  it('retrieves elections info', (done): Promise<() => void> => {
    return api.derive.elections.info((info: DerivedElectionsInfo): void => {
      console.error('fees', JSON.stringify(info));

      done();
    });
  });


  it('retrieves all session info', (done): Promise<() => void> => {
    let count = 0;

    return api.derive.session.info((info: DerivedSessionInfo): void => {
      console.error(JSON.stringify(info));

      // 5 blocks only, then go our merry way
      if (++count === 5) {
        done();
      }
    });
  });
});
