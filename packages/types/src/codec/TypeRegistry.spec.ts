// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../injector';

import { TypeRegistry } from './typeRegistry';
import Struct from '../codec/Struct';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';

describe('TypeRegistry', (): void => {
  let registry: TypeRegistry;

  beforeEach((): void => {
    registry = new TypeRegistry();
  });

  it('handles non exist type', (): void => {
    expect(registry.get('non-exist')).toBeUndefined();
  });

  it('can register single type', (): void => {
    registry.register(Text);
    expect(registry.get('Text')).toBe(Text);
  });

  it('can register type with a different name', (): void => {
    registry.register('TextRenamed', Text);
    expect(registry.get('TextRenamed')).toBe(Text);
  });

  describe('object registration', (): void => {
    it('can register multiple types', (): void => {
      registry.register({
        Text,
        U32Renamed: U32
      });
      expect(registry.get('Text')).toBe(Text);
      expect(registry.get('U32Renamed')).toBe(U32);
    });

    it('can create types from string', (): void => {
      registry.register({
        U32Renamed: 'u32'
      });

      const Type = registry.getOrThrow('U32Renamed');

      expect(new Type() instanceof U32).toBe(true);
    });

    it('can create structs via definition', (): void => {
      registry.register({
        SomeStruct: {
          foo: 'u32',
          bar: 'Text'
        }
      });

      const SomeStruct: any = registry.get('SomeStruct');
      const struct: any = new SomeStruct({
        foo: 42,
        bar: 'testing'
      });

      expect(struct instanceof Struct).toBe(true);
      expect(struct.foo.toNumber()).toEqual(42);
      expect(struct.bar.toString()).toEqual('testing');
    });
  });
});
