// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';
import u8aFromString from '@polkadot/util/u8a/fromString';
import param from '@polkadot/params/param';

import key from './index';

describe('key', () => {
  it('concats the values', () => {
    expect(
      key({
        key: 'sys:old:',
        params: [
          param('first', 'Bytes')
        ]
      })(
        hexToU8a('0x0100000000000000')
      )
    ).toEqual(
      hexToU8a('0x3117ecd3eaa7a8c27cb8d04eb597a1ef')
    );
  });

  it('concats the values (Array<Uint8Array>)', () => {
    expect(
      key({
        key: 'sys:old:',
        params: [
          param('first', 'Bytes'),
          param('second', 'Bytes')
        ]
      })(
        hexToU8a('0x01000000'),
        hexToU8a('0x00000000')
      )
    ).toEqual(
      hexToU8a('0x3117ecd3eaa7a8c27cb8d04eb597a1ef')
    );
  });

  it('concats with empty key', () => {
    expect(
      key({ key: 'ses:llc' })()
    ).toEqual(
      hexToU8a('0xe14daa763fce793346d4b7e131240849')
    );
  });

  it('does not hash when not required', () => {
    expect(
      key({ key: ':code', isUnhashed: true })()
    ).toEqual(
      u8aFromString(':code')
    );
  });
});
