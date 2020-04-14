// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../types';

import { isChildClass } from '@polkadot/util';

import Struct from '../codec/Struct';
import DoNotConstruct from '../primitive/DoNotConstruct';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import { TypeRegistry } from './registry';

describe('TypeRegistry', (): void => {
  const registry = new TypeRegistry();

  it('handles non exist type', (): void => {
    expect(registry.get('non-exist')).toBeUndefined();
  });

  it('throws on non-existent via getOrThrow', (): void => {
    expect((): Constructor<Codec> => registry.getOrThrow('non-exist')).toThrow('type non-exist not found');
    expect((): Constructor<Codec> => registry.getOrThrow('non-exist', 'foo bar blah')).toThrow('foo bar blah');
  });

  it('handles non exist type as Unknown (via getOrUnknown)', (): void => {
    const Type = registry.getOrUnknown('non-exist');

    expect(Type).toBeDefined();
    // eslint-disable-next-line no-prototype-builtins
    expect(isChildClass(DoNotConstruct, Type));
  });

  it('can register single type', (): void => {
    registry.register(Text);
    expect(registry.get('Text')).toBe(Text);
  });

  it('can register type with a different name', (): void => {
    registry.register('TextRenamed', Text);
    expect(isChildClass(Text, registry.get('TextRenamed'))).toBe(true);
  });

  describe('object registration', (): void => {
    it('can register multiple types', (): void => {
      registry.register({
        Text,
        U32Renamed: U32
      });
      expect(isChildClass(Text, registry.get('Text'))).toBe(true);
      expect(isChildClass(U32, registry.get('U32Renamed'))).toBe(true);
    });

    it('can register recursive types', (): void => {
      registry.register({
        Recursive: {
          next: 'Option<Recursive>'
        }
      });

      expect(registry.hasDef('Recursive')).toBe(true);
      expect(registry.hasClass('Recursive')).toBe(false);

      const Recursive = registry.getOrThrow('Recursive');

      expect(registry.hasClass('Recursive')).toBe(true);

      const last = new Recursive(registry, { next: null });
      const first = new Recursive(registry, { next: last });

      expect((first as any).next.isSome).toBe(true);
      expect((first as any).next.unwrap().next.isSome).toBe(false);
    });

    it('can register cross-referencing types ()', (): void => {
      registry.register({
        A: {
          next: 'B'
        },
        B: {
          _enum: {
            End: null,
            Other: 'A'
          }
        }
      });

      const A = registry.getOrThrow('A');
      const B = registry.getOrThrow('B');

      expect(registry.hasClass('Recursive')).toBe(true);

      const last = new B(registry, { End: null });
      const first = new B(registry, { Other: new A(registry, { next: last }) });

      expect((first as any).isOther).toBe(true);
    });

    it('can create types from string', (): void => {
      registry.register({
        U32Renamed: 'u32'
      });

      const Type = registry.getOrThrow('U32Renamed');

      expect(new Type(registry) instanceof U32).toBe(true);
    });

    it('can create structs via definition', (): void => {
      registry.register({
        SomeStruct: {
          bar: 'Text',
          foo: 'u32'
        }
      });

      const SomeStruct = registry.getOrThrow('SomeStruct');
      const struct: any = new SomeStruct(registry, {
        bar: 'testing',
        foo: 42
      });

      expect(struct instanceof Struct).toBe(true);
      expect(struct.foo.toNumber()).toEqual(42);
      expect(struct.bar.toString()).toEqual('testing');
    });
  });
});
