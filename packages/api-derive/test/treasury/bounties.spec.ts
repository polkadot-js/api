// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Bytes, Option, StorageKey } from '@polkadot/types';
import type { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import type { Codec, InterfaceTypes } from '@polkadot/types/types';

import { of } from 'rxjs';

import { bounties } from '@polkadot/api-derive/treasury/bounties';

import { BountyFactory } from '../bountyFactory';
import { BytesFactory } from '../bytesFactory';
import { createApiWithAugmentations } from '../helpers';

const DEFAULT_PROPOSER = '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM';

describe('bounties derive', () => {
  let storageKey: (index: number) => StorageKey;
  let defaultBounty: () => Bounty;
  let emptyOption: <T extends Codec> (typeName: keyof InterfaceTypes) => Option<T>;
  let optionOf: <T extends Codec> (value: T)=> Option<T>;
  let bountyIndex: (index: number) => BountyIndex;
  let bytes: (value: string) => Bytes;

  beforeAll(() => {
    const api = createApiWithAugmentations();

    ({ bountyIndex, defaultBounty, emptyOption, optionOf, storageKey } = new BountyFactory(api));
    ({ bytes } = new BytesFactory(api.registry));
  });

  it('combines bounties with descriptions', async () => {
    const mockApi = {
      query: {
        treasury: {
          bounties: {
            keys: () => of([storageKey(0), storageKey(1), storageKey(2)]),
            multi: () => of([optionOf(defaultBounty()), emptyOption('Bounty'), optionOf(defaultBounty())])
          },
          bountyCount: () => of(bountyIndex(3)),
          bountyDescriptions: {
            multi: () => of([
              optionOf(bytes('make polkadot even better')),
              optionOf(bytes('this will be totally ignored')),
              emptyOption('Bytes')
            ])
          }
        }
      }
    } as unknown as ApiInterfaceRx;

    const result = await bounties('', mockApi)().toPromise();

    expect(result.bountyDescriptions).toHaveLength(2);
    expect(result.bounties).toHaveLength(2);
    expect(result.bounties[0].proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result.bountyDescriptions[0].toHuman()).toEqual('make polkadot even better');
    expect(result.bounties[1].proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result.bountyDescriptions[1].toHuman()).toEqual('');
  });
});
