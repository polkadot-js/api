// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Text } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types/create';
import { u8aToHex } from '@polkadot/util';

import { createFunction } from './createFunction';

describe('createFunction', (): void => {
  const registry = new TypeRegistry();

  it('allows creating of known DoubleMap keys (with Bytes)', (): void => {
    const storageFn = createFunction(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asDoubleMap: {
            hasher: registry.createType('StorageHasher', 'Twox64Concat'),
            key1: new Text(registry, 'Bytes'),
            key2: new Text(registry, 'AccountId'),
            key2Hasher: registry.createType('StorageHasher', 'Blake2_256'),
            value: new Text(registry, 'SessionKeys5')
          },
          isDoubleMap: true
        }
      } as any,
      method: 'NextKeys',
      prefix: 'Session',
      section: 'session'
    }, {});

    expect(
      u8aToHex(
        storageFn([
          // hex, without length prefix
          '0x3a73657373696f6e3a6b657973',
          // address
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4'
        ])
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

  it('allows creating of NMap keys (with Bytes)', (): void => {
    const storageFn = createFunction(registry, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      meta: {
        type: {
          asNMap: {
            hashers: [
              registry.createType('StorageHasher', 'Twox64Concat'),
              registry.createType('StorageHasher', 'Blake2_256'),
              registry.createType('StorageHasher', 'Blake2_256')
            ],
            keyVec: [
              new Text(registry, 'Bytes'),
              new Text(registry, 'AccountId'),
              new Text(registry, 'AccountId')
            ],
            value: new Text(registry, 'SessionKeys5')
          },
          isNMap: true
        }
      } as any,
      method: 'NextKeys',
      prefix: 'Session',
      section: 'session'
    }, {});

    expect(
      u8aToHex(
        storageFn([
          // hex, without length prefix
          '0x3a73657373696f6e3a6b657973',
          // addresses
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4',
          'DB2mp5nNhbFN86J9hxoAog8JALMhDXgwvWMxrRMLNUFMEY4'
        ])
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
