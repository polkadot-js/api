// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from '../../codec/EnumType';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bool from '../../primitive/Bool';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';
import { MetadataStorageModifier } from '../v1/Storage';
import { PlainType } from '../v2/Storage';
import { DoubleMapType } from '../v3/Storage';

export class MapType extends Struct {
  constructor (value?: any) {
    super({
      isLinked: Bool,
      key: Type,
      keyHasher: Text,
      value: Type
    }, value);
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
   * @description The hash algorithm used to hash keys, as [[Text]]
   */
  get keyHasher (): Text {
    return this.get('keyHasher') as Text;
  }

  /**
   * @description The mapped value as [[Type]]
   */
  get value (): Type {
    return this.get('value') as Type;
  }
}

export class MetadataStorageType extends EnumType<PlainType | MapType | DoubleMapType> {
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
export class MetadataStorage extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      modifier: MetadataStorageModifier,
      type: MetadataStorageType,
      fallback: Bytes,
      docs: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[Text]] documentation
   */
  get docs (): Vector<Text> {
    return this.get('docs') as Vector<Text>;
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
  get modifier (): MetadataStorageModifier {
    return this.get('modifier') as MetadataStorageModifier;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[MetadataStorageType]]
   */
  get type (): MetadataStorageType {
    return this.get('type') as MetadataStorageType;
  }
}
