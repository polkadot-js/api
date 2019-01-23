// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from './EnumType';
import Null from '../Null';
import Text from '../Text';
import U32 from '../U32';

describe('Struct', () => {
  it('provides a clean toString() (value)', () => {
    expect(
      new EnumType(
        { Text, U32 },
        new Uint8Array([0, 2 << 2, 49, 50])
      ).value.toString()
    ).toEqual('12');
  });

  it('provides a clean toString() (enum)', () => {
    expect(
      new EnumType(
        { Text, U32 },
        new Uint8Array([1, 2 << 2, 49, 50])
      ).toString()
    ).toEqual('U32');
  });

  it('decodes from a JSON input (lowercase)', () => {
    expect(
      new EnumType(
        { Text, U32 },
        { 'text': 'some text value' }
      ).value.toString()
    ).toEqual('some text value');
  });

  it('decodes from hex', () => {
    expect(
      new EnumType(
        { Text, U32 },
        '0x0134120000'
      ).value.toString()
    ).toEqual('4660'); // 0x1234 in decimal
  });

  it('decodes from a JSON input (mixed case)', () => {
    expect(
      new EnumType(
        { Text, U32 },
        { 'U32': 42 }
      ).value.toString()
    ).toEqual('42');
  });

  it('decodes from JSON string', () => {
    expect(
      new EnumType(
        { Null, U32 },
        'null'
      ).type
    ).toEqual('Null');
  });

  // We are currently not using this approach, none of the types in Substrate currently
  // have any overrides. Insteda of trying to support it (just-in-case), rather have it
  // removed to simplyfy the code - it can be pulled-back if needed
  it.skip('allows checking against defined indexes', () => {
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
      { Text, U32 },
      { Text: text }
    );

    expect(enumType.type).toBe('Text');
    expect(enumType.value).toEqual(text);
  });

  describe('utils', () => {
    const eqtest = new EnumType(
      { U32, Text },
      new Uint8Array([1, 3 << 2, 88, 89, 90])
    );

    it('compares against index', () => {
      expect(
        eqtest.eq(1)
      ).toBe(true);
    });

    it('compares against values', () => {
      expect(
        eqtest.eq('XYZ')
      ).toBe(true);
    });
  });
});
