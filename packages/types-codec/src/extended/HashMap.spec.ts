// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { HashMap, Struct, Text, U32 } from '@polkadot/types-codec';

const registry = new TypeRegistry();

describe('HashMap', (): void => {
  it('generates sane toRawTypes', (): void => {
    expect(new (HashMap.with(Text, U32))(registry).toRawType()).toBe('HashMap<Text,u32>');
    expect(new (HashMap.with(Text, Text))(registry).toRawType()).toBe('HashMap<Text,Text>');
    expect(new (HashMap.with(Text, Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('HashMap<Text,{"a":"u32","b":"Text"}>');
  });
});
