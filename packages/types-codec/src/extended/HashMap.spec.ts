// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { HashMap, Struct, Text, U32 } from '@polkadot/types-codec';
import { stringToU8a } from '@polkadot/util';

const registry = new TypeRegistry();

describe('HashMap', (): void => {
  it('generates sane toRawTypes', (): void => {
    expect(new (HashMap.with(Text, U32))(registry).toRawType()).toBe('HashMap<Text,u32>');
    expect(new (HashMap.with(Text, Text))(registry).toRawType()).toBe('HashMap<Text,Text>');
    expect(new (HashMap.with(Text, Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('HashMap<Text,{"a":"u32","b":"Text"}>');
  });

  it('has a sane inspect', (): void => {
    expect(
      new (HashMap.with(Text, Text))(registry, new Map([
        [new Text(registry, '1'), new Text(registry, 'foo')],
        [new Text(registry, '2'), new Text(registry, 'bar')]
      ])).inspect()
    ).toEqual({
      inner: [
        { outer: [new Uint8Array([1 << 2]), stringToU8a('1')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('foo')] },
        { outer: [new Uint8Array([1 << 2]), stringToU8a('2')] },
        { outer: [new Uint8Array([3 << 2]), stringToU8a('bar')] }
      ],
      outer: [new Uint8Array([2 << 2])]
    });
  });
});
