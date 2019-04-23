// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../../codec/Enum';
import EnumType from '../../codec/EnumType';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import { StorageFunctionModifier } from '../v1/Storage';
import { MapType, PlainType } from '../v2/Storage';

export class StorageHasher extends Enum {
  constructor (value?: any) {
    super(['Blake2_128', 'Blake2_256', 'Twox128', 'Twox256', 'Twox128Concat'], value);
  }
}

export class DoubleMapType extends Struct {
  constructor (value?: any) {
    super({
      key1: Text,
      key2: Text,
      value: Text,
      key2Hasher: Text
    }, value);
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

/**
 * @name MetadataModule
 * @description
 * The definition of a storage function
 */
export class StorageFunctionMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      fallback: Bytes,
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[Text]] documentation
   */
  get docs (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The [[Bytes]] fallback default
   */
  get fallback (): Bytes {
    return this.get('fallback') as Bytes;
  }

  /**
   * @description The [[MetadataArgument]] for arguments
   */
  get modifier (): StorageFunctionModifier {
    return this.get('modifier') as StorageFunctionModifier;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}
