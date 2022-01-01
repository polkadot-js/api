// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { u8aToHex } from '@polkadot/util';

import { TypeRegistry } from '../../../create';
import { Metadata } from '../../Metadata';
import { createFunction } from './createFunction';

describe('createFunction', (): void => {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, {
    magicNumber: 1635018093,
    metadata: {
      v14: {
        lookup: {
          types: [
            {
              id: 0,
              type: {
                def: { HistoricMetaCompat: 'AccountId' }
              }
            },
            {
              id: 1,
              type: {
                def: { HistoricMetaCompat: 'Bytes' }
              }
            },
            {
              id: 2,
              type: {
                def: { HistoricMetaCompat: 'SessionKey5' }
              }
            },
            {
              id: 3,
              type: {
                def: { Tuple: [1, 0] }
              }
            },
            {
              id: 4,
              type: {
                def: { Tuple: [1, 0, 0] }
              }
            }
          ]
        }
      }
    }
  });

  registry.setMetadata(metadata);

  it('allows creating a known 1 Map key', (): void => {
    const storageFn = createFunction(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asMap: {
            hashers: [
              registry.createType('StorageHasher', 'Blake2_128Concat')
            ],
            key: 0,
            value: 4
          },
          isMap: true
        }
      } as any,
      method: 'Account',
      prefix: 'System',
      section: 'system'
    }, {});

    expect(
      u8aToHex(
        storageFn(
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4'
        )
      )
    ).toEqual(
      '0x' +
      '4101' +
      '26aa394eea5630e07c48ae0c9558cef7' + // twox 128
      'b99d880ec681799c0cf30e8886371da9' + // twox 128
      '79c598d130209ab0dea15637a5b16be7' + // blake 128
      '1a7938fede32e1275281b3eee5708706d88444a6dc898a4dec463f1eb298463f' // AccountId
    );
  });

  it('allows creating of known 2 Map keys (with Bytes)', (): void => {
    const storageFn = createFunction(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asMap: {
            hashers: [
              registry.createType('StorageHasher', 'Twox64Concat'),
              registry.createType('StorageHasher', 'Blake2_256')
            ],
            key: 3,
            value: 4
          },
          isMap: true
        }
      } as any,
      method: 'NextKeys',
      prefix: 'Session',
      section: 'session'
    }, {});

    expect(
      u8aToHex(
        storageFn(
          // hex, without length prefix
          '0x3a73657373696f6e3a6b657973',
          // address
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4'
        )
      )
    ).toEqual(
      '0x' +
      '5901' + // length
      'cec5070d609dd3497f72bde07fc96ba0' + // twox 128
      '4c014e6bf8b8c2c011e7290b85696bb3' + // twox 128
      '9fe6329cc0b39e09' + // twox 64
      '343a73657373696f6e3a6b657973' + // twox 64 (concat, with length)
      '5eb36b60f0fc4b9177116eba3e5cd57fea6289a57f5f5b9ffeb0475c66e7a521' // blake2
    );
  });

  it('allows creating of 3 Map keys (with Bytes)', (): void => {
    const storageFn = createFunction(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asMap: {
            hashers: [
              registry.createType('StorageHasher', 'Twox64Concat'),
              registry.createType('StorageHasher', 'Blake2_256'),
              registry.createType('StorageHasher', 'Blake2_256')
            ],
            key: 4,
            value: 2
          },
          isMap: true
        }
      } as any,
      method: 'NextKeys',
      prefix: 'Session',
      section: 'session'
    }, {});

    expect(
      u8aToHex(
        storageFn(
          // hex, without length prefix
          '0x3a73657373696f6e3a6b657973',
          // addresses
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4',
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4'
        )
      )
    ).toEqual(
      '0x' +
      'd901' + // length
      'cec5070d609dd3497f72bde07fc96ba0' + // twox 128
      '4c014e6bf8b8c2c011e7290b85696bb3' + // twox 128
      '9fe6329cc0b39e09' + // twox 64
      '343a73657373696f6e3a6b657973' + // twox 64 (concat, with length)
      '5eb36b60f0fc4b9177116eba3e5cd57fea6289a57f5f5b9ffeb0475c66e7a521' + // blake2
      '5eb36b60f0fc4b9177116eba3e5cd57fea6289a57f5f5b9ffeb0475c66e7a521' // blake2
    );
  });
});
