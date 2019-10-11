// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DoubleMapTypeV4, MapTypeV4, PlainTypeV4, StorageFunctionModifierV4 } from '@polkadot/types/interfaces/metadata';
import { AnyNumber } from '@polkadot/types/types';

import { assert } from '@polkadot/util';

import Enum from '@polkadot/types/codec/Enum';
import Struct from '@polkadot/types/codec/Struct';
import Vec from '@polkadot/types/codec/Vec';
import Bytes from '@polkadot/types/primitive/Bytes';
import Text from '@polkadot/types/primitive/Text';

export class StorageFunctionType extends Enum {
  public constructor (value?: any, index?: number) {
    super({
      Type: 'PlainTypeV4',
      Map: 'MapTypeV4',
      DoubleMap: 'DoubleMapTypeV4'
    }, value, index);
  }

  /**
   * @description The value as a mapped value
   */
  public get asDoubleMap (): DoubleMapTypeV4 {
    assert(this.isDoubleMap, `Cannot convert '${this.type}' via asDoubleMap`);

    return this.value as DoubleMapTypeV4;
  }

  /**
   * @description The value as a mapped value
   */
  public get asMap (): MapTypeV4 {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapTypeV4;
  }

  /**
   * @description The value as a [[Type]] value
   */
  public get asType (): PlainTypeV4 {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainTypeV4;
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
      if (this.asMap.linked.isTrue) {
        return `(${this.asMap.value.toString()}, Linkage<${this.asMap.key.toString()}>)`;
      }

      return this.asMap.value.toString();
    }

    return this.asType.toString();
  }
}

export interface StorageFunctionMetadataValue {
  name: string | Text;
  modifier: StorageFunctionModifierV4 | AnyNumber;
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
      modifier: 'StorageFunctionModifierV4',
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
  public get modifier (): StorageFunctionModifierV4 {
    return this.get('modifier') as StorageFunctionModifierV4;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  public get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}
