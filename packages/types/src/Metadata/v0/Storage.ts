// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MapTypeV0, PlainTypeV0, StorageFunctionModifierV0 } from '../../interfaces/metadata';
import { AnyNumber } from '../../types';

import { assert } from '@polkadot/util';

import Enum from '../../codec/Enum';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';

export class StorageFunctionType extends Enum {
  public constructor (value?: any, index?: number) {
    super({
      PlainType: 'PlainTypeV0',
      MapType: 'MapTypeV0'
    }, value, index);
  }

  /**
   * @description The value as a mapped value
   */
  public get asMap (): MapTypeV0 {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapTypeV0;
  }

  /**
   * @description The value as a [[Type]] value
   */
  public get asType (): PlainTypeV0 {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainTypeV0;
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
      return this.asMap.value.toString();
    }

    return this.asType.toString();
  }
}

export interface StorageFunctionMetadataValue {
  name: string | Text;
  modifier: StorageFunctionModifierV0 | AnyNumber;
  type: StorageFunctionType;
  fallback: Bytes;
  documentation: Vec<Text> | string[];
}

export class StorageFunctionMetadata extends Struct {
  public constructor (value?: StorageFunctionMetadataValue | Uint8Array) {
    super({
      name: 'Text',
      modifier: 'StorageFunctionModifierV0',
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
  public get modifier (): StorageFunctionModifierV0 {
    return this.get('modifier') as StorageFunctionModifierV0;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  public get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}

export class StorageMetadataV0 extends Struct {
  public constructor (value?: any) {
    super({
      prefix: 'Text',
      functions: Vec.with(StorageFunctionMetadata)
    }, value);
  }

  /**
   * @description The [[StorageFunctionMetadata]] for the section
   */
  public get functions (): Vec<StorageFunctionMetadata> {
    return this.get('functions') as Vec<StorageFunctionMetadata>;
  }

  /**
   * @description The section prefix
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }
}
