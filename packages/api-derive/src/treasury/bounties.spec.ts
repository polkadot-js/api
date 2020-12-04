// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { ApiPromise, WsProvider } from '@polkadot/api';
import { fetchBounties } from '@polkadot/api-derive/treasury/bounties';
import { ApiInterfaceRx } from '@polkadot/api/types';
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

    const mockApi = {
      query: {
        treasury: {
          bounties: {
            keys: () => of([storageKey(api, 0), storageKey(api, 1)]),
            multi: () => of([new Option<Bounty>(registry, 'Bounty', registry.createType('Bounty'))])
          },
          bountyCount: () => of(registry.createType('BountyIndex', [2]))
        }
      },
      registry
    } as unknown as ApiInterfaceRx;

    const bounties = await fetchBounties(mockApi).toPromise();

    expect(bounties.bounties[0].proposer.toString()).toEqual('5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM');
  });
});
