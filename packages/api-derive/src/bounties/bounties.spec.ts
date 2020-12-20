// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Bytes, Option, StorageKey } from '@polkadot/types';
import type { Bounty, BountyIndex } from '@polkadot/types/interfaces';
import type { Codec, InterfaceTypes } from '@polkadot/types/types';

import { of } from '@polkadot/x-rxjs';

import { BountyFactory } from '../../test/bountyFactory';
import { BytesFactory } from '../../test/bytesFactory';
import { createApiWithAugmentations } from '../../test/helpers';
import { bounties } from '.';

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

    expect(result).toHaveLength(2);
    expect(result[0].bounty.proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result[0].description).toEqual('make polkadot even better');
    expect(result[1].bounty.proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result[1].description).toEqual('');
  });
});
