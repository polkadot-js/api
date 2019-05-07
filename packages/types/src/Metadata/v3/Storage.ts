// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../../types';

import EnumType from '../../codec/EnumType';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import {
  MapType,
  PlainType,
  StorageFunctionModifier
} from '../v2/Storage';

// Re-export classes that haven't changed between V2 and V3
export {
  MapType,
  PlainType,
  StorageFunctionModifier
};

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
