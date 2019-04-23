// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { getTypeDef } from '../../codec/createType';
import EnumType from '../../codec/EnumType';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import { IStorageFunctionMetadata, IStorageFunctionType } from '../../primitive/StorageKey';
import Text from '../../primitive/Text';
import { PlainType } from '../v0/Modules';
import { MetadataStorageModifier } from '../v1/Storage';
import { MapType } from '../v2/Storage';

export class DoubleMapType extends Struct {
  constructor (value?: any) {
    super({
      key1: Text,
      key2: Text,
      value: Text,
      keyHasher: Text
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
   * @description The mapped key as [[Text]]
   */
  get keyHasher (): Text {
    return this.get('keyHasher') as Text;
  }

  /**
   * @description The mapped key as [[Text]]
   */
  get value (): Text {
    return this.get('value') as Text;
  }

  toInterface (module: string): IStorageFunctionType {
    return {
      isDoubleMap: true,
      isLinked: false,
      isMap: false,
      asMap: () => { throw new Error(); },
      asDoubleMap: () => ({
        key1: getTypeDef(this.key1, module),
        key2: getTypeDef(this.key2, module),
        value: getTypeDef(this.value, module),
        keyHasher: this.keyHasher.toString()
      }),
      asType: () => { throw new Error(); }
    };
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

  toInterface (module: string): IStorageFunctionMetadata {
    let type;
    if (this.type.isMap) {
      type = this.type.asMap.toInterface(module);
    } else if (this.type.isDoubleMap) {
      type = this.type.asDoubleMap.toInterface(module);
    } else {
      type = this.type.asType.toInterface(module);
    }
    return {
      name: this.name.toString(),
      modifier: this.modifier.index,
      type,
      fallback: this.fallback,
      documentation: this.docs.map(line => line.toString())
    };
  }
}
