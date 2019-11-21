// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DoubleMapTypeV3, MapTypeV3, PlainTypeV3, StorageFunctionModifierV3 } from '@polkadot/types/interfaces/metadata';
import { AnyNumber, Registry } from '@polkadot/types/types';

import { assert } from '@polkadot/util';

import Enum from '@polkadot/types/codec/Enum';
import Struct from '@polkadot/types/codec/Struct';
import Vec from '@polkadot/types/codec/Vec';
import Bytes from '@polkadot/types/primitive/Bytes';
import Text from '@polkadot/types/primitive/Text';

export class StorageFunctionType extends Enum {
  constructor (registry: Registry, value?: any, index?: number) {
    super(registry, {
      Type: 'PlainTypeV3',
      Map: 'MapTypeV3',
      DoubleMap: 'DoubleMapTypeV3'
    }, value, index);
  }

  /**
   * @description The value as a mapped value
   */
  public get asDoubleMap (): DoubleMapTypeV3 {
    assert(this.isDoubleMap, `Cannot convert '${this.type}' via asDoubleMap`);

    return this.value as DoubleMapTypeV3;
  }

  /**
   * @description The value as a mapped value
   */
  public get asMap (): MapTypeV3 {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapTypeV3;
  }

  /**
   * @description The value as a [[Type]] value
   */
  public get asType (): PlainTypeV3 {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainTypeV3;
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
      return `DoubleMap<${this.asDoubleMap.toString()}>`;
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
  modifier: StorageFunctionModifierV3 | AnyNumber;
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
  constructor (registry: Registry, value?: StorageFunctionMetadataValue | Uint8Array) {
    super(registry, {
      name: 'Text',
      modifier: 'StorageFunctionModifierV3',
      type: StorageFunctionType,
      fallback: 'Bytes',
      documentation: 'Vec<Text>'
    }, value);
  }

  /**
   * @description The [[Text]] documentation
   */
  public get documentation (): Vec<Text> {
    return this.get('documentation') as Vec<Text>;
  }

  /**
   * @description The [[Bytes]] fallback default
   */
  public get fallback (): Bytes {
    return this.get('fallback') as Bytes;
  }

  /**
   * @description The [[StorageFunctionModifierV3]] for arguments
   */
  public get modifier (): StorageFunctionModifierV3 {
    return this.get('modifier') as StorageFunctionModifierV3;
  }

  /**
   * @description The call name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  public get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}
