// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { ApiPromise, WsProvider } from '@polkadot/api';
import { fetchBounties, FetchBountiesInputs } from '@polkadot/api-derive/treasury/bounties';
import { Metadata } from '@polkadot/metadata';
import metaStatic from '@polkadot/metadata/static';
import { Option, StorageKey, TypeRegistry } from '@polkadot/types';
import { Bounty } from '@polkadot/types/interfaces';
import { of } from 'rxjs';

function storageKey (api: ApiPromise, index: number): StorageKey {
  return new StorageKey(api.registry, api.query.treasury.bounties.key(api.registry.createType('BountyIndex', index)));
}

describe('bounties derive', () => {
  it('combines bounties with descriptions', async () => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metaStatic);
    const api = new ApiPromise({ provider: new WsProvider() });

    api.injectMetadata(metadata, true);

    const inputs: FetchBountiesInputs = {
      bountiesQuery: () => of([new Option<Bounty>(registry, 'Bounty', registry.createType('Bounty'))]),
      count: () => of(registry.createType('BountyIndex', [2])),
      keys: () => of([storageKey(api, 0), storageKey(api, 1)])
    };

    const bounties = await fetchBounties(inputs).toPromise();

    expect(bounties.bounties[0].proposer.toString()).toEqual('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM');
  });
});
