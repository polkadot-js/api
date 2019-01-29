// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from '../types';

import EnumType from '../../codec/EnumType';
import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../Bytes';
import Null from '../../Null';
import Text from '../../Text';
import Type from '../../Type';
import u16 from '../../u16';
import { flattenUniq, validateTypes } from '../util';

class MetadataCallArg extends Struct {
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

/**
 * @name MetadataCall
 * @description
 * The definition of a call
 */
export class MetadataCall extends Struct {
  constructor (value?: any) {
    super({
      id: u16,
      name: Text,
      arguments: Vector.with(MetadataCallArg),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[MetadataCallArg]] for arguments
   */
  get arguments (): Vector<MetadataCallArg> {
    return this.get('arguments') as Vector<MetadataCallArg>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The call function id
   */
  get id (): u16 {
    return this.get('id') as u16;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

/**
 * @name MetadataEvent
 * @description
 * The definition of an event
 */
export class MetadataEvent extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      arguments: Vector.with(Type),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[Type]] for arguments
   */
  get arguments (): Vector<Type> {
    return this.get('arguments') as Vector<Type>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

class Default extends Null {}

class Optional extends Null {}

class MetadataStorageModifier extends EnumType<Optional | Default> {
  constructor (value?: any, index?: number) {
    super({
      Optional,
      Default
    }, value, index);
  }

  /**
   * @description `true` if the storage entry is optional
   */
  get isOptional (): boolean {
    return this.toNumber() === 0;
  }

  toJSON (): any {
    return this.toString();
  }
}

class MapType extends Struct {
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

class PlainType extends Type {
}

class MetadataStorageType extends EnumType<PlainType | MapType> {
  constructor (value?: any, index?: number) {
    super({
      PlainType,
      MapType
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
   * @description Returns the string representation of the value
   */
  toString (): string {
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
      default: Bytes,
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[Bytes]] default
   */
  get default (): Bytes {
    return this.get('default') as Bytes;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
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
}

/**
 * @name MetadataModule
 * @description
 * The definition of a module in the system
 */
export class MetadataModule extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(Vector.with(MetadataStorage)),
      calls: Option.with(Vector.with(MetadataCall)),
      events: Option.with(Vector.with(MetadataEvent))
    }, value);
  }

  /**
   * @description the module calls
   */
  get calls (): Option<Vector<MetadataCall>> {
    return this.get('calls') as Option<Vector<MetadataCall>>;
  }

  /**
   * @description the module events
   */
  get events (): Option<Vector<MetadataEvent>> {
    return this.get('events') as Option<Vector<MetadataEvent>>;
  }

  /**
   * @description the module name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the module prefix
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description the associated module storage
   */
  get storage (): Option<Vector<MetadataStorage>> {
    return this.get('storage') as Option<Vector<MetadataStorage>>;
  }
}

/**
 * @name MetadataV1
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV1 extends Struct implements MetadataInterface {
  constructor (value?: any) {
    super({
      modules: Vector.with(MetadataModule)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  get modules (): Vector<MetadataModule> {
    return this.get('modules') as Vector<MetadataModule>;
  }

  private get callNames () {
    return this.modules.map((mod) =>
      mod.calls.isNone
        ? []
        : mod.calls.unwrap().map((fn) =>
          fn.arguments.map((arg) => arg.type.toString())
        )
    );
  }

  private get eventNames () {
    return this.modules.map((mod) =>
      mod.events.isNone
        ? []
        : mod.events.unwrap().map((event) =>
          event.arguments.map((arg) => arg.toString())
        )
    );
  }

  private get storageNames () {
    return this.modules.map((mod) =>
      mod.storage.isNone
        ? []
        : mod.storage.unwrap().map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
            : [fn.type.asType.toString()]
        )
    );
  }

  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes (): Array<string> {
    const types = flattenUniq([this.callNames, this.eventNames, this.storageNames]);

    validateTypes(types);

    return types;
  }
}
