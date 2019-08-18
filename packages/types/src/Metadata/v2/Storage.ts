// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { PlainTypeV2, StorageFunctionModifierV2 } from '../../interfaces/metadata';
import { AnyNumber } from '../../types';

import { assert } from '@polkadot/util';

import Enum from '../../codec/Enum';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Bool from '../../primitive/Bool';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';

export class MapType extends Struct {
  public constructor (value?: any) {
    super({
      key: 'Type',
      value: 'Type',
      isLinked: 'bool'
    }, value);
  }

  /**
   * @description The mapped key as [[Type]]
   */
  public get key (): Type {
    return this.get('key') as Type;
  }

  /**
   * @description The mapped value as [[Type]]
   */
  public get value (): Type {
    return this.get('value') as Type;
  }

  /**
   * @description Is this an enumerable linked map
   */
  public get isLinked (): boolean {
    return (this.get('isLinked') as Bool).valueOf();
  }
}

export class StorageFunctionType extends Enum {
  public constructor (value?: any, index?: number) {
    super({
      Type: 'PlainTypeV2',
      Map: MapType
    }, value, index);
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
  public get asType (): PlainTypeV2 {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainTypeV2;
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
  modifier: StorageFunctionModifierV2 | AnyNumber;
  type: StorageFunctionType;
  fallback: Bytes;
  documentation: Vec<Text> | string[];
}

/**
 * @name ModuleMetadata
 * @description
 * The definition of a storage function
 */
export class StorageFunctionMetadata extends Struct {
  public constructor (value?: StorageFunctionMetadataValue | Uint8Array) {
    super({
      name: 'Text',
      modifier: 'StorageFunctionModifierV2',
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
   * @description The [[StorageFunctionModifierV2]] for arguments
   */
  public get modifier (): StorageFunctionModifierV2 {
    return this.get('modifier') as StorageFunctionModifierV2;
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
