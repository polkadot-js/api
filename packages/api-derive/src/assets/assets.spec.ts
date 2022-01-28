// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi } from '@polkadot/api-derive/types';
import type { GenericEventData, Vec } from '@polkadot/types';
import type { AssetId, EventRecord, Hash, Header } from '@polkadot/types/interfaces';
import type { PalletAssetsAssetMetadata } from '@polkadot/types/lookup';

import { concatMap, delay, from, Observable, ObservableInput, of, Subscription } from 'rxjs';

import { ApiPromise } from '@polkadot/api';
import { all } from '@polkadot/api-derive/assets/all';
import { DeriveAsset } from '@polkadot/api-derive/assets/types';
import { createApiWithAugmentations } from '@polkadot/api-derive/test/helpers';
import { StorageKey } from '@polkadot/types';
import { BN } from '@polkadot/util';

export const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
export const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

const FIRST_ASSET_ID = 15;
const SECOND_ASSET_ID = 24;
const THIRD_ASSET_ID = 100;

const FIRST_BLOCK_HASH = '0x6443a0b46e0412e626363028115a9f2cf963eeed526b8b33e5316f08b50d0dc3';
const SECOND_BLOCK_HASH = '0x05bdcc454f60a08d427d05e7f19f240fdc391f570ab76fcb96ecca0b5823d3bf';

describe('assets derive', () => {
  let api: ApiPromise;
  let mockedApi: DeriveApi;
  let assets: DeriveAsset[] = [];
  let sub: Subscription;

  const createAssetStorageKey = (id: number): StorageKey<[AssetId]> => {
    const assetId = api.createType('AssetId', id);
    const key = new StorageKey<[AssetId]>(api.registry, api.query.assets.asset.key(assetId));

    key.setMeta(api.query.assets.asset.creator.meta);

    return key;
  };

  beforeAll(() => {
    api = createApiWithAugmentations();
    mockedApi = {
      query: {
        assets: {
          asset: {
            entriesAt: (hash: Hash) => valueAt(hash, {
              [FIRST_BLOCK_HASH]: [
                [createAssetStorageKey(FIRST_ASSET_ID), api.createType('Option<AssetDetails>', {
                  isSome: () => true,
                  isSufficient: undefined,
                  owner: api.createType('AccountId', BOB),
                  unwrap: () => ({})
                })],
                [createAssetStorageKey(SECOND_ASSET_ID), api.createType('Option<AssetDetails>', {
                  isSome: () => true,
                  isSufficient: true,
                  owner: api.createType('AccountId', ALICE),
                  unwrap: () => ({})
                })],
                [createAssetStorageKey(THIRD_ASSET_ID), api.createType('Option<AssetDetails>', {
                  isSome: () => true,
                  owner: api.createType('AccountId', BOB),
                  unwrap: () => ({})
                })]
              ],
              [SECOND_BLOCK_HASH]: [
                [createAssetStorageKey(FIRST_ASSET_ID), api.createType('Option<AssetDetails>', {
                  isSome: () => true,
                  isSufficient: undefined,
                  owner: api.createType('AccountId', BOB),
                  unwrap: () => ({})
                })],
                [createAssetStorageKey(THIRD_ASSET_ID), api.createType('Option<AssetDetails>', {
                  isSome: () => true,
                  owner: api.createType('AccountId', BOB),
                  unwrap: () => ({})
                })]
              ]
            }),
            keysAt: (hash: Hash) => valueAt(hash, {
              [FIRST_BLOCK_HASH]: [
                createAssetStorageKey(FIRST_ASSET_ID),
                createAssetStorageKey(SECOND_ASSET_ID),
                createAssetStorageKey(THIRD_ASSET_ID)
              ],
              [SECOND_BLOCK_HASH]: [
                createAssetStorageKey(FIRST_ASSET_ID),
                createAssetStorageKey(THIRD_ASSET_ID)
              ]
            })
          },
          metadata: {
            entriesAt: (hash: Hash) => valueAt(hash, {
              [FIRST_BLOCK_HASH]: [
                [createAssetStorageKey(FIRST_ASSET_ID), api.createType('AssetMetadata', {
                  decimals: 8,
                  name: 'TestToken',
                  symbol: 'TT'
                }) as PalletAssetsAssetMetadata],
                [createAssetStorageKey(SECOND_ASSET_ID), api.createType('AssetMetadata', {
                  decimals: 10,
                  name: 'TestTokenExtra',
                  symbol: 'TTx'
                }) as PalletAssetsAssetMetadata],
                [createAssetStorageKey(THIRD_ASSET_ID), api.createType('AssetMetadata', {
                  decimals: 12,
                  name: 'Kusama😻',
                  symbol: 'KSM🤪'
                }) as PalletAssetsAssetMetadata]
              ],
              [SECOND_BLOCK_HASH]: [
                [createAssetStorageKey(FIRST_ASSET_ID), api.createType('AssetMetadata', {
                  decimals: 8,
                  name: 'TestToken',
                  symbol: 'TT'
                }) as PalletAssetsAssetMetadata],
                [createAssetStorageKey(THIRD_ASSET_ID), api.createType('AssetMetadata', {
                  decimals: 12,
                  name: 'Kusama😻',
                  symbol: 'KSM🤪'
                }) as PalletAssetsAssetMetadata]
              ]
            })
          }
        },
        system: {
          events: () => from<ObservableInput<Vec<EventRecord>>>([
            [] as unknown as Vec<EventRecord>,
            Object.assign([{
              event: {
                data: [{ module: { error: 9, index: 34 } }, {
                  class: 'Normal',
                  paysFee: 'Yes',
                  weight: 397453000
                }] as unknown as GenericEventData,
                index: api.createType('EventId', '0x0001'),
                method: 'Destroyed',
                section: 'assets'
              },
              phase: { ApplyExtrinsic: 1 },
              topics: [] as unknown as Vec<Hash>
            } as unknown as EventRecord] as unknown as Vec<EventRecord>, { createdAtHash: api.createType('Header', { number: new BN(2) }).hash })
          ]).pipe(concatMap((val) => of(val).pipe(delay(100))))
        }
      },
      rpc: {
        chain: {
          subscribeNewHeads: () => from<ObservableInput<Header>>([
            api.createType('Header', { number: new BN(1) })
          ])
        }
      }
    } as unknown as DeriveApi;
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    assets = [];
    sub.unsubscribe();
  });

  it('gets current assets list', () => {
    sub = all(mockedApi).subscribe((value) => { assets = value; });

    expect(assets).toHaveLength(3);
    expect(assets[0].id.args[0].toNumber()).toBe(FIRST_ASSET_ID);
    expect(assets[1].id.args[0].toNumber()).toBe(SECOND_ASSET_ID);
    expect(assets[2].id.args[0].toNumber()).toBe(THIRD_ASSET_ID);

    expect(assets[0].name.toUtf8()).toBe('TestToken');
    expect(assets[1].name.toUtf8()).toBe('TestTokenExtra');
    expect(assets[2].name.toUtf8()).toBe('Kusama😻');
  });

  it('updates assets list after an asset event', () => {
    sub = all(mockedApi).subscribe((value) => { assets = value; });

    expect(assets).toHaveLength(3);

    jest.advanceTimersByTime(200);

    expect(assets).toHaveLength(2);
    expect(assets[0].id.args[0].toNumber()).toBe(FIRST_ASSET_ID);
    expect(assets[1].id.args[0].toNumber()).toBe(THIRD_ASSET_ID);

    expect(assets[0].name.toUtf8()).toBe('TestToken');
    expect(assets[1].name.toUtf8()).toBe('Kusama😻');
  });

  it('does not update assets list for a non asset event', () => {
    const mockedApiWithNonAssetEvent: DeriveApi = {
      ...mockedApi,
      query: {
        ...mockedApi.query,
        system: {
          events: () => from<ObservableInput<Vec<EventRecord>>>([
            [] as unknown as Vec<EventRecord>,
            Object.assign([{
              event: {
                data: [{ module: { index: 34 } }, {
                  class: 'Normal',
                  paysFee: 'Yes',
                  weight: 397453000
                }] as unknown as GenericEventData,
                index: api.createType('EventId', '0x0001'),
                method: 'IdentitySet',
                section: 'identity'
              },
              phase: { ApplyExtrinsic: 1 },
              topics: [] as unknown as Vec<Hash>
            } as unknown as EventRecord] as unknown as Vec<EventRecord>, { createdAtHash: api.createType('Header', { number: new BN(2) }).hash })
          ]).pipe(concatMap((val) => of(val).pipe(delay(100))))
        }
      }
    } as unknown as DeriveApi;

    sub = all(mockedApiWithNonAssetEvent).subscribe((value) => { assets = value; });

    expect(assets).toHaveLength(3);

    jest.advanceTimersByTime(200);

    expect(assets).toHaveLength(3);
  });
});

function valueAt <T> (hash: Hash, value: Record<string, T>): Observable<T> {
  return of(value[hash.toHex()]);
}
