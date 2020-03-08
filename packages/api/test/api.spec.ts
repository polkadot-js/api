// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, WsProvider } from '@polkadot/api';

describe.skip('misc quick tests', (): void => {
  it.skip('handles doublemap entries', async (): Promise<void> => {
    const api = await new ApiPromise().isReady;
    const activeEra = await api.query.staking.activeEra();

    console.log(JSON.stringify(
      await api.query.staking.erasStakers.entries(activeEra.unwrapOrDefault().index)
    ));
  });

  it.skip('does something in society', async (): Promise<void> => {
    const provider = new WsProvider('wss://kusama-rpc.polkadot.io');
    const api = await new ApiPromise({ provider }).isReady;

    console.log(JSON.stringify(
      await api.query.society.defenderVotes('Dab4bfYTZRUDMWjYAUQuFbDreQ9mt7nULWu3Dw7jodbzVe9')
    ));
  });
});
