// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from '@polkadot/api/types';
import type { Bytes, Option, StorageKey } from '@polkadot/types';
import type { Bounty, BountyIndex, Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import type { Codec, InterfaceTypes } from '@polkadot/types/types';
import type { DeriveApi, DeriveCollectiveProposal } from '../types';

import { firstValueFrom, of } from 'rxjs';

import { ApiPromise } from '@polkadot/api';

import { BountyFactory } from '../test/bountyFactory';
import { BytesFactory } from '../test/bytesFactory';
import { createApiWithAugmentations } from '../test/helpers';
import { ProposalFactory } from '../test/proposalFactory';
import { bounties } from '.';

const DEFAULT_PROPOSER = '5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM';

describe('bounties derive', () => {
  let storageKey: (index: number) => StorageKey;
  let defaultBounty: () => Bounty;
  let emptyOption: <T extends Codec> (typeName: keyof InterfaceTypes) => Option<T>;
  let optionOf: <T extends Codec> (value: T) => Option<T>;
  let bountyIndex: (index: number) => BountyIndex;
  let proposalIndex: (index: number) => ProposalIndex;
  let bytes: (value: string) => Bytes;
  let api: ApiPromise;
  let createProposal: (method: SubmittableExtrinsic<'promise'>) => Proposal;
  let defaultMockApi: DeriveApi;

  beforeAll(() => {
    api = createApiWithAugmentations();

    ({ bountyIndex, defaultBounty, emptyOption, optionOf, storageKey } = new BountyFactory(api));
    ({ bytes } = new BytesFactory(api.registry));
    ({ createProposal, proposalIndex } = new ProposalFactory(api));
  });

  beforeEach(() => {
    defaultMockApi = {
      derive: {
        council: {
          proposals: () => of([] as DeriveCollectiveProposal[])
        }
      },
      query: {
        council: {
          proposalCount: () => of(proposalIndex(2))
        },
        treasury: {
          bounties: {
            keys: () => of([storageKey(0), storageKey(1)]),
            multi: () => of([optionOf(defaultBounty()), optionOf(defaultBounty())])
          },
          bountyCount: () => of(bountyIndex(2)),
          bountyDescriptions: {
            multi: () => of([
              optionOf(bytes('make polkadot even better')),
              optionOf(bytes('some other bounty'))
            ])
          }
        }
      },
      tx: api.tx
    } as unknown as DeriveApi;
  });

  it('creates storage key', function () {
    expect(storageKey(194).args[0].eq(194)).toBe(true);
  });

  it('creates proposal', function () {
    expect(createProposal(api.tx.balances.transfer('5EYCAe5ijiYfyeZ2JJCGq56LmPyNRAKzpG4QkoQkkQNB5e6Z', 1))).toBeTruthy();
  });

  it('combines bounties with descriptions', async () => {
    const mockApi = {
      ...defaultMockApi,
      query: {
        ...defaultMockApi.query,
        treasury: {
          bounties: {
            keys: () => of([storageKey(0), storageKey(2), storageKey(3)]),
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
    } as unknown as DeriveApi;

    const result = await firstValueFrom(bounties('', mockApi)());

    expect(result).toHaveLength(2);
    expect(result[0].bounty.proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result[0].description).toEqual('make polkadot even better');
    expect(result[0].index.eq(0)).toBe(true);
    expect(result[1].bounty.proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result[1].description).toEqual('');
    expect(result[1].index.eq(3)).toBe(true);
  });

  it('returns motions', async () => {
    const result = await firstValueFrom(bounties('', defaultMockApi)());

    expect(result).toHaveLength(2);
    expect(result[0].proposals).toHaveLength(0);
    expect(result[1].proposals).toHaveLength(0);
  });

  it('when no council, returns bounties without motions', async () => {
    const mockApi = {
      ...defaultMockApi,
      query: {
        ...defaultMockApi.query,
        council: null
      }
    } as unknown as DeriveApi;

    const result = await firstValueFrom(bounties('', mockApi)());

    expect(result).toHaveLength(2);
    expect(result[0].bounty.proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result[0].description).toEqual('make polkadot even better');
    expect(result[0].index.eq(0)).toBe(true);
    expect(result[0].proposals).toHaveLength(0);
    expect(result[1].bounty.proposer.toString()).toEqual(DEFAULT_PROPOSER);
    expect(result[1].description).toEqual('some other bounty');
    expect(result[1].index.eq(1)).toBe(true);
    expect(result[1].proposals).toHaveLength(0);
  });

  it('combines bounties with motions', async () => {
    const mockApi = {
      ...defaultMockApi,
      derive: {
        council: {
          proposals: () => of([
            { proposal: createProposal(api.tx.bounties.approveBounty(1)) },
            { proposal: createProposal(api.tx.treasury.approveProposal(1)) }] as DeriveCollectiveProposal[])
        }
      }
    } as unknown as DeriveApi;

    const result = await firstValueFrom(bounties('', mockApi)());

    expect(result).toHaveLength(2);
    expect(result[0].proposals).toHaveLength(0);
    expect(result[1].proposals).toHaveLength(1);
    expect(result[1].proposals[0].proposal.method).toEqual('approveBounty');
  });
});
