// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import EnumType from './EnumType';
import Text from '../Text';
import U32 from '../U32';

describe('Struct', () => {
  it('provides a clean toString() (raw)', () => {
    expect(
      new EnumType(
        [Text, U32],
        new Uint8Array([0, 2 << 2, 49, 50])
      ).raw.toString()
    ).toEqual('12');
  });

  it('provides a clean toString() (enum)', () => {
    expect(
      new EnumType(
        [Text, U32],
        new Uint8Array([1, 2 << 2, 49, 50])
      ).toString()
    ).toEqual('U32');
  });

  it('allows checking against defined indexes', () => {
    expect(
      new EnumType(
        { 1: Text, 5: U32 },
        new Uint8Array([1, 2 << 2, 49, 50])
      ).toString()
    ).toEqual('Text');
  });

  it('allows accessing the type and value', () => {
    const text = new Text('foo');
    const enumType = new EnumType(
      [Text, U32],
      { Text: text }
    );

    expect(enumType.type).toBe('Text');
    expect(enumType.value).toEqual(text);
  });
});
