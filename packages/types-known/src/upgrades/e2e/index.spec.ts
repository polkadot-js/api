// Copyright 2017-2023 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ChainUpgradesExpanded } from '../types';

import fs from 'node:fs';

import { ApiPromise, WsProvider } from '@polkadot/api';

import * as allMan from '../manual';
import * as allGen from '.';

const keys = ['kusama', 'polkadot', 'westend'] as const;
const urls = {
  kusama: 'wss://kusama-rpc.polkadot.io',
  polkadot: 'wss://rpc.polkadot.io',
  westend: 'wss://westend-rpc.polkadot.io'
};

for (const chain of keys) {
  describe(`generate ${chain}`, (): void => {
    const avail = allGen[chain];
    const final: ChainUpgradesExpanded = [];
    let api: ApiPromise;

    beforeAll(async (): Promise<void> => {
      api = await ApiPromise.create({ provider: new WsProvider(urls[chain]) });
    });

    afterAll(async (): Promise<void> => {
      fs.writeFileSync(`packages/types-known/src/upgrades/e2e/${chain}.ts`, `// Copyright 2017-${new Date().getFullYear()} @polkadot/types-known authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  // Auto-generated from on-chain data & manual definitions, do not edit
  /* eslint-disable quotes, comma-spacing */

  import type { ChainUpgradesExpanded } from '../types';

  const upgrades: ChainUpgradesExpanded = ${JSON.stringify(final, null, 2)};

  export default upgrades;
  `);
      await api.disconnect();
    });

    for (const [blockNumber, specVersion] of allMan[chain]) {
      it(`blockNumber=${blockNumber}, specVersion=${specVersion}`, async (): Promise<void> => {
        const found = avail.find(([n, s]) => n === blockNumber && s === specVersion);

        if (found) {
          final.push(found);
        } else {
          const blockHash = await api.rpc.chain.getBlockHash(blockNumber + 1);
          const runtime = await api.rpc.state.getRuntimeVersion(blockHash);
          const apis = runtime.apis.map(([api, version]): [HexString, number] => [api.toHex(), version.toNumber()]);

          final.push([blockNumber, specVersion, apis]);
        }
      });
    }
  });
}
