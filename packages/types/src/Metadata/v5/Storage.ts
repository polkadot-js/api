// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DoubleMapTypeV5, PlainTypeV5, StorageFunctionModifierV5 } from '../../interfaces/metadata';
import { AnyNumber } from '../../types';

import { assert } from '@polkadot/util';

import Enum from '../../codec/Enum';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import { MapType } from '../v4/Storage';

// Re-export classes that haven't changed between V4 and V5
export { MapType };

export class StorageFunctionType extends Enum {
  public constructor (value?: any, index?: number) {
    super({
      Type: 'PlainTypeV5',
      Map: MapType,
      DoubleMap: 'DoubleMapTypeV5'
    }, value, index);
  }

  /**
   * @description The value as a mapped value
   */
  public get asDoubleMap (): DoubleMapTypeV5 {
    assert(this.isDoubleMap, `Cannot convert '${this.type}' via asDoubleMap`);

    return this.value as DoubleMapTypeV5;
  }

  /**
   * @description The value as a mapped value
   */
  public get asMap (): MapType {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapType;
  }

  /**
   * @description The value as a [[Type]] value
   */
  public get asType (): PlainTypeV5 {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainTypeV5;
  }

  /**
   * @description `true` if the storage entry is a doublemap
   */
  public get isDoubleMap (): boolean {
    return this.toNumber() === 2;
  }

  /**
   * @description `true` if the storage entry is a map
   */
  public get isMap (): boolean {
    return this.toNumber() === 1;
  }

  /**
   * @description `true` if the storage entry is a plain type
   */
  public get isPlainType (): boolean {
    return this.toNumber() === 0;
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
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

export interface StorageFunctionMetadataValue {
  name: string | Text;
  modifier: StorageFunctionModifierV5 | AnyNumber;
  type: StorageFunctionType;
  fallback: Bytes;
  documentation: Vec<Text> | string[];
}

/**
 * @name StorageFunctionMetadata
 * @description
 * The definition of a storage function
 */
export class StorageFunctionMetadata extends Struct {
  public constructor (value?: StorageFunctionMetadataValue | Uint8Array) {
    super({
      name: 'Text',
      modifier: 'StorageFunctionModifierV5',
      type: StorageFunctionType,
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    }, value);
  }

  /**
   * @description The default value of the storage function
   */
  public get fallback (): Bytes {
    return this.get('fallback') as Bytes;
  }

  /**
   * @description The [[Text]] documentation
   */
  public get documentation (): Vec<Text> {
    return this.get('documentation') as Vec<Text>;
  }

  /**
   * @description The key name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The modifier
   */
  public get modifier (): StorageFunctionModifierV5 {
    return this.get('modifier') as StorageFunctionModifierV5;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  public get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}
