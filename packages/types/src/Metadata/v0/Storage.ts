// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../../types';

import { assert } from '@polkadot/util';

import Enum from '../../codec/Enum';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';

export class StorageFunctionModifier extends Enum {
  constructor (value?: any) {
    super(['Optional', 'Default', 'Required'], value);
  }

  /**
   * @description `true` if the storage entry is optional
   */
  get isOptional (): boolean {
    return this.toNumber() === 0;
  }

  toJSON (): string {
    // This looks prettier in the generated JSON
    return this.toString();
  }
}

export class MapType extends Struct {
  private _isLinked = false;

  constructor (value?: any) {
    super({
      key: Type,
      value: Type
    }, value);

    if (value && value.isLinked) {
      this._isLinked = true;
    }
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
    return this._isLinked;
  }
}

export class PlainType extends Type {
}

export class StorageFunctionType extends Enum {
  constructor (value?: any, index?: number) {
    super({
      PlainType,
      MapType
    }, value, index);
  }

  /**
   * @description The value as a mapped value
   */
  get asMap (): MapType {
    assert(this.isMap, `Cannot convert '${this.type}' via asMap`);

    return this.value as MapType;
  }

  /**
   * @description The value as a [[Type]] value
   */
  get asType (): PlainType {
    assert(this.isPlainType, `Cannot convert '${this.type}' via asType`);

    return this.value as PlainType;
  }

  /**
   * @description `true` if the storage entry is a map
   */
  get isMap (): boolean {
    return this.toNumber() === 1;
  }

  /**
   * @description `true` if the storage entry is a plain type
   */
  get isPlainType (): boolean {
    return this.toNumber() === 0;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
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
   * @description The default value of the storage function
   */
  get fallback (): Bytes {
    return this.get('fallback') as Bytes;
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
   * @description The key name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The modifier
   */
  get modifier (): StorageFunctionModifier {
    return this.get('modifier') as StorageFunctionModifier;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  get type (): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}

export class StorageMetadata extends Struct {
  constructor (value?: any) {
    super({
      prefix: Text,
      functions: Vector.with(StorageFunctionMetadata)
    }, value);
  }

  /**
   * @description The [[StorageFunctionMetadata]] for the section
   */
  get functions (): Vector<StorageFunctionMetadata> {
    return this.get('functions') as Vector<StorageFunctionMetadata>;
  }

  /**
   * @description The section prefix
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }
}
