// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import Struct from './Struct';

import BTreeMap from './BTreeMap';

const registry = new TypeRegistry();

const mockU32TextMap = new Map<Text, U32>();

mockU32TextMap.set(new Text(registry, 'bazzing'), new U32(registry, 69));

describe('BTreeMap', (): void => {
  it('decodes null', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32)
      )(registry, null).toString()
    ).toEqual('{}');
  });

  it('decodes within more complicated types', (): void => {
    const s = new Struct(registry, {
      placeholder: U32,
      value: 'BTreeMap<Text, U32>' as any
    });
    s.set('value', new (BTreeMap.with(Text, U32))(registry, mockU32TextMap));
    expect(s.toString()).toBe('{"placeholder":0,"value":{"bazzing":69}}');
  });

  it('throws when it cannot decode', (): void => {
    expect(
      (): BTreeMap<Text, U32> => new (
        BTreeMap.with(Text, U32)
      )(registry, 'ABC')
    ).toThrowError(/Map: cannot decode type/);
  });

  it('correctly encodes length', (): void => {
    expect(
      new (
        BTreeMap.with(Text, U32))(registry, mockU32TextMap).encodedLength
    ).toEqual(13);
  });

  it('generates sane toRawTypes', (): void => {
    expect(new (BTreeMap.with(Text, U32))(registry).toRawType()).toBe('BTreeMap<Text,u32>');
    expect(new (BTreeMap.with(Text, Text))(registry).toRawType()).toBe('BTreeMap<Text,Text>');
    expect(new (BTreeMap.with(Text, Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('BTreeMap<Text,{"a":"u32","b":"Text"}>');
  });
});
