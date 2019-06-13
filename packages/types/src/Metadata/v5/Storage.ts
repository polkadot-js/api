// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../../types';

import { assert } from '@polkadot/util';

import Enum from '../../codec/Enum';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import StorageHasher from '../../primitive/StorageHasher';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';
import { MapType, PlainType, StorageFunctionModifier } from '../v4/Storage';

// Re-export classes that haven't changed between V4 and V5
export {
  MapType,
  PlainType,
  StorageFunctionModifier
};

export class DoubleMapType extends Struct {
  constructor (value?: any) {
    super({
      hasher: StorageHasher,
      key1: Type,
      key2: Type,
      value: Type,
      key2Hasher: StorageHasher
    }, value);
  }

  /**
   * @description The hashing algorithm used to hash keys, as [[StorageHasher]]
   */
  get hasher (): StorageHasher {
    return this.get('hasher') as StorageHasher;
  }

  /**
   * @description The mapped key as [[Type]]
   */
  get key1 (): Type {
    return this.get('key1') as Type;
  }

  /**
   * @description The mapped key as [[Type]]
   */
  get key2 (): Type {
    return this.get('key2') as Type;
  }

  /**
   * @description The hashing algorithm used to hash key2, as [[StorageHasher]]
   */
  get key2Hasher (): StorageHasher {
    return this.get('key2Hasher') as StorageHasher;
  }

  /**
   * @description The mapped key as [[Type]]
   */
  get value (): Type {
    return this.get('value') as Type;
  }
}

export class StorageFunctionType extends Enum {
  constructor (value?: any, index?: number) {
    super({
      PlainType,
      MapType,
      DoubleMapType
    }, value, index);
  }

  /**
   * @description The value as a mapped value
   */
  get asDoubleMap (): DoubleMapType {
    assert(this.isDoubleMap, `Cannot convert '${this.type}' via asDoubleMap`);

    return this.value as DoubleMapType;
  }

  /**
   * @description The value as a mapped value
   */
  get asMap (): MapType {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapType;
  }

  /**
   * @description The value as a [[Type]] value
   */
  get asType (): PlainType {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainType;
  }

  /**
   * @description `true` if the storage entry is a doublemap
   */
  get isDoubleMap (): boolean {
    return this.toNumber() === 2;
  }

  /**
   * @description `true` if the storage entry is a map
   */
  get isMap (): boolean {
    return this.toNumber() === 1;
  }

  /**
   * @description `true` if the storage entry is a plain type
   */
  get isPlainType (): boolean {
    return this.toNumber() === 0;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    if (this.isDoubleMap) {
      return `DoubleMap<${this.asDoubleMap.value.toString()}>`;
    }

    if (this.isMap) {
      if (this.asMap.isLinked) {
        return `(${this.asMap.value.toString()}, Linkage<${this.asMap.key.toString()}>)`;
      }

      return this.asMap.value.toString();
    }

    return this.asType.toString();
  }
}

export type StorageFunctionMetadataValue = {
  name: string | Text,
  modifier: StorageFunctionModifier | AnyNumber,
  type: StorageFunctionType,
  fallback: Bytes,
  documentation: Vector<Text> | Array<string>
};

/**
 * @name StorageFunctionMetadata
 * @description
 * The definition of a storage function
 */
export class StorageFunctionMetadata extends Struct {
  constructor (value?: StorageFunctionMetadataValue | Uint8Array) {
    super({
      name: Text,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      fallback: Bytes,
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The default value of the storage function
   * @deprecated Use `.fallback` instead.
   */
  get default (): Bytes {
    return this.fallback;
  }

  /**
   * @description The default value of the storage function
   */
  get fallback (): Bytes {
    return this.get('fallback') as Bytes;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The [[Text]] documentation
   * @deprecated Use `.documentation` instead.
   */
  get docs (): Vector<Text> {
    return this.documentation;
  }

  /**
   * @description The key name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The modifier
   */
  get modifier (): StorageFunctionModifier {
    return this.get('modifier') as StorageFunctionModifier;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}
