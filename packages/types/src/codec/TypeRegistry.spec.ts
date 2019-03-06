// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { setDefaultRegistry } from '../codec/typeRegistry';
import { Metadata, AccountId } from '../index';
import json from '../Metadata/v2/static';
import * as PrimitiveTypes from '../primitive';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';
import * as RpcTypes from '../rpc';
import { Phase } from '../type/EventRecord';
import Gas from '../type/Gas';
import Schedule from '../type/Schedule';
import { TypeRegistry } from './typeRegistry';
import U8a from './U8a';

// Use the pre-generated metadata
const metadata = new Metadata(json);

describe('TypeRegistry', () => {
  let registry: TypeRegistry;

  beforeEach(() => {
    registry = new TypeRegistry();
  });

  it('handles non exist type', () => {
    expect(registry.get('non-exist')).toBeUndefined();
  });

  it('can throw error if the type is not found', () => {
    expect(() =>
      registry.getOrThrow('non-exist')
    ).toThrow(/type non-exist not found/);
  });

  it('can throw error with customized message if the type is not found', () => {
    expect(() =>
      registry.getOrThrow('non-exist', 'customized-message')
    ).toThrow(/customized-message/);
  });

  it('can register single type', () => {
    registry.register(Text);
    expect(registry.get('Text')).toBe(Text);
  });

  it('can register type with a different name', () => {
    registry.register('TextRenamed', Text);
    expect(registry.get('TextRenamed')).toBe(Text);
  });

  it('can overwrite exist type', () => {
    registry.register({ 'TypeName': U32 });
    registry.register({ 'TypeName': Text });
    expect(registry.get('TypeName')).toBe(Text);
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

  describe('metadata registration', () => {
    beforeEach(() => {
      // Set default registry to avoid read data from defaultTypes when get registry
      setDefaultRegistry(registry);
      // Register some types for preparing to register types from metadata
      registry.register({ Metadata, ...PrimitiveTypes, ...RpcTypes });
      registry.register(metadata.asV2.typeRegistry);
    });

    it('can register struct type with unnamed field', () => {
      const name = 'sr_primitives#AccountId';
      const AccountIdFromRegistry = registry.getOrThrow(name);
      const value = new U8a([
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]);
      expect(new AccountIdFromRegistry(value).toHex()).toEqual(new AccountId(value).toHex());
    });

    it('can register struct type with named field', () => {
      const name = 'srml_contract#Schedule<u64>';
      const TypeFromRegistry = registry.getOrThrow(name);
      const u32 = new U8a([
        1, 2, 3, 4
      ]);
      const u64 = new U8a([
        1, 2, 3, 4, 5, 6, 7, 8
      ]);
      const value = {
        version: u32,
        putCodePerByteCost: new Gas(u64),
        growMemCost: new Gas(u64),
        regularOpCost: new Gas(u64),
        returnDataPerByteCost: new Gas(u64),
        sandboxDataReadCost: new Gas(u64),
        sandboxDataWriteCost: new Gas(u64),
        maxStackHeight: u32,
        maxMemoryPages: u32
      };

      expect(new TypeFromRegistry(value).toHex()).toEqual(new Schedule(value).toHex());
    });

    it('can register enum type', () => {
      const name = 'srml_system#Phase';
      const PhaseFromRegistry = registry.getOrThrow(name);
      const value = new U8a([
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ]);
      const index = 0;
      expect(new PhaseFromRegistry(value, index).toHex()).toEqual(new Phase(value, index).toHex());
    });

    it('can not register primitive type', () => {
      const name = 'srml_indices::address#Address';
      expect(() =>
        registry.getOrThrow(name)
      ).toThrow(/type srml_indices::address#Address not found/);
    });
  });

  it('metadata registration should not overwrite exist type', () => {
    const name = 'sr_primitives#AccountId';
    // register 'sr_primitives#AccountId'
    registry.register(name, Text);

    // register 'sr_primitives#AccountId' again from metadata.asV2.typeRegistry
    setDefaultRegistry(registry); // Set default registry to avoid read data from defaultTypes when get registry
    registry.register({ Metadata, ...PrimitiveTypes, ...RpcTypes }); // Register some types for preparing to register types from metadata
    registry.register(metadata.asV2.typeRegistry); // metadata.asV2.typeRegistry has a type named 'sr_primitives#AccountId'

    expect(registry.get(name)).toBe(Text);
  });
});
