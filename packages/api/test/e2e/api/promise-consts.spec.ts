// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@polkadot/rpc-provider/ws';
import { BlockNumber } from '@polkadot/types';

import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

describeE2E({
  only: [
    'local',
    'docker-polkadot-master',
    'docker-substrate-master',
    'docker-substrate-2.0'
  ]
})('Promise e2e consts', (wsUrl): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  it('democracy.cooloffPeriod parameter type', (): void => {
    expect(api.consts.democracy.cooloffPeriod).toBeInstanceOf(BlockNumber);
    expect(
      api.consts.democracy.cooloffPeriod.eq(432000) || // Substrate
      api.consts.democracy.cooloffPeriod.eq(259200) // Polkadot
    ).toBeTruthy();
  });
});
