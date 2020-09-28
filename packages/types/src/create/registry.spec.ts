// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Codec, Constructor } from '../types';

import { isChildClass, u8aToU8a } from '@polkadot/util';
import { keccakAsU8a } from '@polkadot/util-crypto';

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      expect((first as any).next.unwrap().next.isSome).toBe(false);
    });

    it('can register non-embedded recursive types', (): void => {
      registry.register({
        Operation: {
          data: 'OperationData'
        },
        OperationData: {
          ops: 'Vec<Operation>'
        },
        Rule: {
          data: 'RuleData'
        },
        RuleData: {
          ops: 'Vec<Operation>'
        }
      });

      expect(registry.hasDef('Rule')).toBe(true);
      expect(registry.hasClass('Rule')).toBe(false);

      const Rule = registry.getOrThrow('Rule');

      expect(registry.hasClass('Rule')).toBe(true);

      const instance = new Rule(registry);

      expect(instance.toRawType()).toEqual('{"data":"RuleData"}');
    });

    it('can register cross-referencing types', (): void => {
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      expect(struct.foo.toNumber()).toEqual(42);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      expect(struct.bar.toString()).toEqual('testing');
    });
  });

  it('hashes via blake2 by default', (): void => {
    expect(
      registry.hash(u8aToU8a('abc'))
    ).toEqual(
      new Uint8Array([189, 221, 129, 60, 99, 66, 57, 114, 49, 113, 239, 63, 238, 152, 87, 155, 148, 150, 78, 59, 177, 203, 62, 66, 114, 98, 200, 192, 104, 213, 35, 25])
    );
  });

  it('hashes via override hasher', (): void => {
    registry.setHasher(keccakAsU8a);

    expect(
      registry.hash(u8aToU8a('test value'))
    ).toEqual(
      u8aToU8a('0x2d07364b5c231c56ce63d49430e085ea3033c750688ba532b24029124c26ca5e')
    );

    registry.setHasher();

    expect(
      registry.hash(u8aToU8a('abc'))
    ).toEqual(
      new Uint8Array([189, 221, 129, 60, 99, 66, 57, 114, 49, 113, 239, 63, 238, 152, 87, 155, 148, 150, 78, 59, 177, 203, 62, 66, 114, 98, 200, 192, 104, 213, 35, 25])
    );
  });
});
