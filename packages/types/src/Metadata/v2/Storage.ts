// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import EnumType from '../../codec/EnumType';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bool from '../../primitive/Bool';
import Bytes from '../../primitive/Bytes';
import Null from '../../primitive/Null';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';
import { MetadataStorageModifier } from '../v1/Storage';

export class Default extends Null {}

export class Optional extends Null {}

export class MapType extends Struct {
  constructor (value?: any) {
    super({
      key: Type,
      value: Type,
      isLinked: Bool
    }, value);
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

  /**
   * @description Is this an enumerable linked map
   */
  get isLinked (): boolean {
    return (this.get('isLinked') as Bool).valueOf();
  }
}

export class PlainType extends Type {
}

export class MetadataStorageType extends EnumType<PlainType | MapType> {
  constructor (value?: any, index?: number) {
    super({
      PlainType,
      MapType
    }, value, index);
  }

  /**
   * @description `true` if the storage entry is a map
   */
  get isMap (): boolean {
    return this.toNumber() === 1;
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
   * @description Returns the string representation of the value
   */
  toString (): string {
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
