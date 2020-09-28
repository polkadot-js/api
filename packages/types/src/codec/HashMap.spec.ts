// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import Struct from './Struct';

import HashMap from './HashMap';

const registry = new TypeRegistry();

describe('HashMap', (): void => {
  it('generates sane toRawTypes', (): void => {
    expect(new (HashMap.with(Text, U32))(registry).toRawType()).toBe('HashMap<Text,u32>');
    expect(new (HashMap.with(Text, Text))(registry).toRawType()).toBe('HashMap<Text,Text>');
    expect(new (HashMap.with(Text, Struct.with({ a: U32, b: Text })))(registry).toRawType())
      .toBe('HashMap<Text,{"a":"u32","b":"Text"}>');
  });
});
