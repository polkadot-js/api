import { fetchBounties, FetchBountiesInputs } from '@polkadot/api-derive/treasury/bounties';
import { StorageEntryDoubleMap } from '@polkadot/api/types';
import { Metadata, storageFromMeta } from '@polkadot/metadata';
import metaStatic from '@polkadot/metadata/static';
import { Option, StorageKey, TypeRegistry } from '@polkadot/types';
import { Bounty } from '@polkadot/types/interfaces';
import { of } from 'rxjs';

describe('bounties derive', () => {
  it('combines bounties with descriptions', async () => {
    let id = 0;

    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, metaStatic);
    const storage = storageFromMeta(registry, metadata);

    const count = () => of(registry.createType('BountyIndex', [2]));
    const keys = () =>of([registry.createType('StorageKey', [id++]), registry.createType('StorageKey', [id++])]);
    const bountiesQuery = (keys: StorageKey[]) => of([new Option<Bounty>(registry, 'Bounty', registry.createType('Bounty') as Bounty)]);

    const inputs: FetchBountiesInputs = {
      count,
      keys,
      bountiesQuery
    }

    const bounties = await fetchBounties(inputs).toPromise();
    expect(bounties).toEqual([{}]);
  });
});
