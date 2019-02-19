// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from './typeRegistry';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';

describe('TypeRegistry', () => {
  let registry: TypeRegistry;

  beforeEach(() => {
    registry = new TypeRegistry();
  });

  it('handles non exist type', () => {
    expect(registry.get('non-exist')).toBeUndefined();
  });

  it('can register single type', () => {
    registry.register(Text);
    expect(registry.get('Text')).toBe(Text);
  });

  it('can register type with a different name', () => {
    registry.register('TextRenamed', Text);
    expect(registry.get('TextRenamed')).toBe(Text);
  });

  describe('object registration', () => {
    it('can register multiple types', () => {
      registry.register({
        Text,
        'U32Renamed': U32
      });
      expect(registry.get('Text')).toBe(Text);
      expect(registry.get('U32Renamed')).toBe(U32);
    });

    it('can create types from string', () => {
      registry.register({
        'U32Renamed': 'u32'
      });
      expect(registry.get('U32Renamed')).toBe(U32);
    });

    it('can create structs via definition', () => {
      registry.register({
        'SomeStruct': {
          'foo': 'u32',
          'bar': 'Text'
        }
      });

      const SomeStruct: any = registry.get('SomeStruct');
      const struct: any = new SomeStruct({
        foo: 42,
        bar: 'testing'
      });

      expect(SomeStruct.name).toBe('Struct');
      expect(struct.get('foo').toNumber()).toEqual(42);
      expect(struct.get('bar').toString()).toEqual('testing');
    });
  });
});
