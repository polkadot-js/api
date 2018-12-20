// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Codec } from '../types';

import Bytes from '../Bytes';
import Enum from '../codec/Enum';
import EnumType from '../codec/EnumType';
import Option from '../codec/Option';
import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import Text from '../Text';
import Type from '../Type';
import U16 from '../U16';
// import { getTypeDef, getTypeClass } from '../codec/createType';

export class FunctionArgumentMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      type: Type
    }, value);
  }

  /**
   * @description The argument name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[Type]]
   */
  get type (): Type {
    return this.get('type') as Type;
  }
}

export class FunctionMetadata extends Struct {
  constructor (value?: any) {
    super({
      id: U16,
      name: Text,
      arguments: Vector.with(FunctionArgumentMetadata),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[FunctionArgumentMetadata]] for arguments
   */
  get arguments (): Vector<FunctionArgumentMetadata> {
    return this.get('arguments') as Vector<FunctionArgumentMetadata>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The `[sectionIndex, methodIndex]` call id
   */
  get id (): U16 {
    return this.get('id') as U16;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

export class CallMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      functions: Vector.with(FunctionMetadata)
    }, value);
  }

  /**
   * @description The functions available as [[FunctionMetadata]]
   */
  get functions (): Vector<FunctionMetadata> {
    return this.get('functions') as Vector<FunctionMetadata>;
  }

  /**
   * @description The section name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

export class ModuleMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      call: CallMetadata
    }, value);
  }

  /**
   * @description The calls as [[CallMetadata]]
   */
  get call (): CallMetadata {
    return this.get('call') as CallMetadata;
  }

  /**
   * @description The name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

export class StorageFunctionModifier extends Enum {
  constructor (value?: any) {
    super(['None', 'Default', 'Required'], value);
  }
}

export class StorageFunctionType$Map extends Struct {
  constructor (value?: any) {
    super({
      key: Type,
      value: Type
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
}

export class StorageFunctionType extends EnumType<Type | StorageFunctionType$Map> {
  constructor (value?: any, index?: number) {
    super({
      Type,
      StorageFunctionType$Map
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
  get asMap (): StorageFunctionType$Map {
    return this.value as StorageFunctionType$Map;
  }

  /**
   * @description The value as a [[Type]] value
   */
  get asType (): Type {
    return this.value as Type;
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

type StorageFunctionMetadataValue = {
  name: string | Text,
  modifier: StorageFunctionModifier | AnyNumber,
  type: StorageFunctionType,
  default: Codec, // More precisely, it's a `type`
  documentation: Vector<Text> | Array<string>
};

export class StorageFunctionMetadata<T extends Codec = Codec> extends Struct {
  // private _originalLength: number;

  constructor (value?: StorageFunctionMetadataValue | Uint8Array) {
    // We try to figure out the type of the storage function (default to Bytes)
    // const Type = value && (value as StorageFunctionMetadataValue).type
    //   ? getTypeClass(getTypeDef((value as StorageFunctionMetadataValue).type.toString())) as Constructor<T>
    //   : Bytes;

    super({
      name: Text,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      default: Bytes,
      documentation: Vector.with(Text)
    }, value);

    // this._originalLength = super.encodedLength;

    // If, after construction, we "learned" (i.e. decoded) the type, then we
    // decode the `default` Bytes with the new type.
    // FIXME But for now, we don't do this, just leave the hex value as-is.
    // if (
    //   this.get('default') instanceof Bytes &&
    //   this.get('type')!.toString() !== 'Bytes'
    // ) {
    //   const NewType = getTypeClass(getTypeDef(this.get('type')!.toString()));
    //   this.set('default', new NewType(this.get('default')) as T);
    // }
  }

  // /**
  //  * @description The length of the value when encoded as a Uint8Array
  //  */
  // get encodedLength (): number {
  //   // NOTE Length is used in the decoding calculations, so return the original (pre-cleanup)
  //   // length of the data. Since toU8a is disabled, this does not affect encoding, but rather
  //   // only the decoding leg, allowing the decoders to work with original pointers
  //   return this._originalLength;
  // }

  /**
   * @description The default value of the storage function
   */
  get default (): T {
    return this.get('default') as T;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
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

export class RuntimeModuleMetadata extends Struct {
  constructor (value?: any) {
    super({
      prefix: Text,
      module: ModuleMetadata,
      storage: Option.with(StorageMetadata)
    }, value);
  }

  /**
   * @description The [[ModuleMetadata]]
   */
  get module (): ModuleMetadata {
    return this.get('module') as ModuleMetadata;
  }

  /**
   * @description The prefix
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description The optional [[StorageMetadata]]
   */
  get storage (): Option<StorageMetadata> {
    return this.get('storage') as Option<StorageMetadata>;
  }
}
