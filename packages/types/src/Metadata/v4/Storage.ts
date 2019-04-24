// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../../types';

import Enum from '../../codec/Enum';
import EnumType from '../../codec/EnumType';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bool from '../../primitive/Bool';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';
import {
  PlainType,
  StorageFunctionModifier
} from '../v3/Storage';

// Re-export classes that haven't changed between V3 and V4
export {
  PlainType,
  StorageFunctionModifier
};

export class StorageHasher extends Enum {
  constructor (value?: any) {
    super(['Blake2_128', 'Blake2_256', 'Twox128', 'Twox256', 'Twox128Concat'], value);
  }

  /**
   * @description Is the enum Blake2_128?
   */
  get isBlake2128 (): boolean {
    return this.toNumber() === 0;
  }

  /**
   * @description Is the enum Blake2_256?
   */
  get isBlake2256 (): boolean {
    return this.toNumber() === 1;
  }

  /**
   * @description Is the enum Twox128?
   */
  get isTwox128 (): boolean {
    return this.toNumber() === 2;
  }

  /**
   * @description Is the enum Twox256?
   */
  get isTwox256 (): boolean {
    return this.toNumber() === 3;
  }

  /**
   * @description Is the enum isTwox128Concat?
   */
  get isTwox128Concat (): boolean {
    return this.toNumber() === 4;
  }

  toJSON (): any {
    // This looks prettier in the generated JSON
    return this.toString();
  }
}

export class MapType extends Struct {
  constructor (value?: any) {
    super({
      hasher: StorageHasher,
      key: Type,
      value: Type,
      isLinked: Bool
    }, value);
  }

  /**
   * @description The hash algorithm used to hash keys, as [[StorageHasher]]
   */
  get hasher (): StorageHasher {
    return this.get('hasher') as StorageHasher;
  }

  /**
   * @description Is this an enumerable linked map
   */
  get isLinked (): boolean {
    return (this.get('isLinked') as Bool).valueOf();
  }

  /**
   * @description The mapped key as [[Type]]
   */
  get key (): Type {
    return this.get('key') as Type;
  }

  /**
   * @description The mapped value as [[Type]]
   */
  get value (): Type {
    return this.get('value') as Type;
  }
}

export class DoubleMapType extends Struct {
  constructor (value?: any) {
    super({
      hasher: StorageHasher,
      key1: Text,
      key2: Text,
      value: Text,
      key2Hasher: Text
    }, value);
  }

  /**
   * @description The hashing algorithm used to hash keys, as [[Text]]
   */
  get hasher (): Text {
    return this.get('hasher') as Text;
  }

  /**
   * @description The mapped key as [[Text]]
   */
  get key1 (): Text {
    return this.get('key1') as Text;
  }

  /**
   * @description The mapped key as [[Text]]
   */
  get key2 (): Text {
    return this.get('key2') as Text;
  }

  /**
   * @description The hashing algorithm used to hash key2, as [[Text]]
   */
  get key2Hasher (): Text {
    return this.get('key2Hasher') as Text;
  }

  /**
   * @description The mapped key as [[Text]]
   */
  get value (): Text {
    return this.get('value') as Text;
  }
}

export class StorageFunctionType extends EnumType<PlainType | MapType | DoubleMapType> {
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
    return this.value as DoubleMapType;
  }

  /**
   * @description The value as a mapped value
   */
  get asMap (): MapType {
    return this.value as MapType;
  }

  /**
   * @description The value as a [[Type]] value
   */
  get asType (): PlainType {
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
   * @description Returns the string representation of the value
   */
  toString (): string {
    if (this.isDoubleMap) {
      return this.asDoubleMap.toString();
    }

    return this.isMap
      ? this.asMap.value.toString()
      : this.asType.toString();
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
