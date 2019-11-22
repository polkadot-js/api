// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DoubleMapTypeV5, MapTypeV5, PlainTypeV5, StorageFunctionModifierV5 } from '@polkadot/types/interfaces/metadata';
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
      Plain: 'PlainTypeV5',
      Map: 'MapTypeV5',
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
  public get asMap (): MapTypeV5 {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapTypeV5;
  }

  /**
   * @description The value as a [[Type]] value
   */
  public get asPlain (): PlainTypeV5 {
    assert(this.isPlain, `Cannot convert '${this.type}' via asPlain`);

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
  public get isPlain (): boolean {
    return this.toNumber() === 0;
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
  constructor (registry: Registry, value?: StorageFunctionMetadataValue | Uint8Array) {
    super(registry, {
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
