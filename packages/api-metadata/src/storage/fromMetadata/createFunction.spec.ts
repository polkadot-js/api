// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageHasher, Text } from '@polkadot/types';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { stringToU8a, u8aConcat, u8aToHex } from '@polkadot/util';

import createFunction from './createFunction';

describe('createFunction', (): void => {
  it('should create timestamp.now correctly', (): void => {
    expect(
      createFunction({
        prefix: 'Timestamp',
        section: 'timestamp',
        method: 'Now',
        meta: { type: {} } as any
      })()
    ).toEqual(
      Uint8Array.from([64, 14, 73, 68, 207, 217, 141, 111, 76, 195, 116, 209, 111, 90, 78, 63, 156]) // Length-prefixed
    );
  });

  it('allows overrides on key (keeping name)', (): void => {
    expect(
      createFunction(
        {
          prefix: 'Substrate',
          section: 'substrate',
          method: 'authorityCount',
          meta: { type: {} } as any
        },
        {
          key: ':auth:len',
          skipHashing: true
        }
      ).method
    ).toEqual('authorityCount');
  });

  it('allows overrides on key (unhashed)', (): void => {
    const key = ':auth:len';

    expect(
      createFunction(
        {
          prefix: 'Substrate',
          section: 'substrate',
          method: 'authorityCount',
          meta: { type: {} } as any
        },
        {
          key,
          skipHashing: true
        }
      )()
    ).toEqual(
      u8aConcat(
        Uint8Array.from([key.length << 2]),
        stringToU8a(':auth:len')
      )
    );
  });

  describe('the created double map function', (): void => {
    let storageFn: StorageEntry;

    beforeAll((): void => {
      storageFn = createFunction({
        prefix: 'GenericAsset',
        section: 'genericAsset',
        method: 'FreeBalance',
        meta: {
          name: 'metaName',
          type: {
            isDoubleMap: true,
            asDoubleMap: {
              hasher: new StorageHasher('Blake2_256'),
              key1: new Text('AccountId'),
              key2: new Text('AccountId'),
              value: new Text('Balance'),
              key2Hasher: new Text('twox_128')
            }
          }
        } as any
      });
    });

    it('should return correct key', (): void => {
      const result = storageFn(['5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP', '5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP']);
      expect(u8aToHex(result)).toEqual('0xc000fa40e72d7173e69ee54b980345ea01cb81e64258502e0247af4303dee91ec0aec2ecd3a60ab080cff7b52a8f6d543b');
    });

    it('needs two arguments', (): void => {
      expect(
        (): Uint8Array => storageFn(['5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP'])
      ).toThrow(/metaName expects two arguments/);
    });
  });

  it('allows creates double map function with a Null type key', (): void => {
    const storageFn = createFunction({
      prefix: 'System',
      section: 'system',
      method: 'EventTopics',
      meta: {
        type: {
          isDoubleMap: true,
          asDoubleMap: {
            hasher: new StorageHasher('Blake2_256'),
            key1: new Text('Null'),
            key2: new Text('Hash'),
            value: new Text('Vec<(BlockNumber,EventIndex)>'),
            key2Hasher: new Text('blake2_256')
          }
        }
      } as any
    });

    // the value of the Null type key does not effect the result
    expect(u8aToHex(storageFn(['any', [1, 2, 3]]))).toEqual(u8aToHex(storageFn([[1, 2, 3], [1, 2, 3]])));
    // the value of the not Null type key does effect the result
    expect(u8aToHex(storageFn(['any', [1, 2, 3]]))).not.toEqual(u8aToHex(storageFn(['any', [1, 2, 3, 4]])));
  });
});
