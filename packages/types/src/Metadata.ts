// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from './types';

import { assert, hexToU8a, isHex, isU8a, isUndefined } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo } from './codec/createType';
import Compact from './codec/Compact';
import Enum from './codec/Enum';
import EnumType from './codec/EnumType';
import Option from './codec/Option';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import Text from './Text';
import Type from './Type';
import U16 from './U16';
import * as allTypes from './index';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call. This
// file is probably best understood from the bottom-up, i.e. start reading right at the
// end and work up. (Just so we don't use before definition)

// Quick and dirty flatten (.flat() not available)
function flattenUniq (list: Array<any>): Array<any> {
  const flat = list.reduce((result, entry) => {
    return result.concat(
      Array.isArray(entry)
        ? flattenUniq(entry)
        : entry
    );
  }, []);

  return [...new Set(flat)]
    .filter((value: any) => value)
    .sort();
}

export class OuterDispatchCall extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      index: U16
    }, value);
  }

  /**
   * @description The [[U16]] index for the call
   */
  get index (): U16 {
    return this.get('index') as U16;
  }

  /**
   * @description The name for the call
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The call prefix (or section)
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }
}

export class OuterDispatchMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      calls: Vector.with(OuterDispatchCall)
    }, value);
  }

  /**
   * @description The [[OuterDispathCall]] wrapped
   */
  get calls (): Vector<OuterDispatchCall> {
    return this.get('calls') as Vector<OuterDispatchCall>;
  }

  /**
   * @description The name for the dispatch
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

export class EventMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      arguments: Vector.with(Type),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The arguments of [[Type]]
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
   * @description The name for the event
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

export class OuterEventMetadataEvent extends Tuple {
  constructor (value?: any) {
    super([
      Text,
      Vector.with(EventMetadata)
    ], value);
  }

  /**
   * @description The [[EventMetadata]]
   */
  get events (): Vector<EventMetadata> {
    return this[1] as Vector<EventMetadata>;
  }

  /**
   * @description The name of the section
   */
  get name (): Text {
    return this[0] as Text;
  }
}

export class OuterEventMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      events: Vector.with(OuterEventMetadataEvent)
    }, value);
  }

  /**
   * @description The [[OuterEventMetadataEvent]]
   */
  get events (): Vector<OuterEventMetadataEvent> {
    return this.get('events') as Vector<OuterEventMetadataEvent>;
  }

  /**
   * @description The name of the event
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

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
    super([
      Type,
      StorageFunctionType$Map
    ], value, index);
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
  name?: string | Text,
  modifier?: StorageFunctionModifier | AnyNumber,
  type?: StorageFunctionType,
  documentation?: Vector<Text> | Array<string>
};

export class StorageFunctionMetadata extends Struct {
  constructor (value?: StorageFunctionMetadataValue) {
    super({
      name: Text,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      documentation: Vector.with(Text)
    }, value);
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

/**
 * @name Metadata
 * @description
 * The runtime metadata as a decoded structure
 */
export default class RuntimeMetadata extends Struct {
  constructor (value?: any) {
    super({
      outerEvent: OuterEventMetadata,
      modules: Vector.with(RuntimeModuleMetadata),
      outerDispatch: OuterDispatchMetadata
    }, RuntimeMetadata.decodeMetadata(value));
  }

  static decodeMetadata (value: string | Uint8Array | object): object | Uint8Array {
    if (isHex(value)) {
      // We receive this as an hex in the JSON output from the Node.
      // Convert to u8a and use the U8a version to do the actual parsing.
      return RuntimeMetadata.decodeMetadata(hexToU8a(value));
    } else if (isU8a(value)) {
      // HACK 13 Oct 2018 - For current running BBQ nodes, Metadata is not properly
      // encoded, it does not have a length prefix. For latest substrate master, it
      // is properly encoded. Here we pull the prefix, check it agianst the length -
      // if matches, then we have the length, otherwise we assume it is an older node
      // and use the whole buffer
      const [offset, length] = Compact.decodeU8a(value);

      return value.length === (offset + length.toNumber())
        ? value.subarray(offset)
        : value;
    }

    // Decode as normal struct
    return value;
  }

  /**
   * @description Wrapped [[OuterDispatchCall]]
   */
  get calls (): Vector<OuterDispatchCall> {
    return (this.get('outerDispatch') as OuterDispatchMetadata).calls;
  }

  /**
   * @description Wrapped [[OuterEventMetadataEvent]]
   */
  get events (): Vector<OuterEventMetadataEvent> {
    return (this.get('outerEvent') as OuterEventMetadata).events;
  }

  /**
   * @description Wrapped [[RuntimeModuleMetadata]]
   */
  get modules (): Vector<RuntimeModuleMetadata> {
    return this.get('modules') as Vector<RuntimeModuleMetadata>;
  }

  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes (): Array<string> {
    const events = this.events.map((module) =>
      module.events.map((event) =>
        event.arguments.map((argument) =>
          argument.toString()
        )
      )
    );

    const storages = this.modules.map((module) =>
      module.storage.isSome
        ? module.storage.unwrap().functions.map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
            : [fn.type.asType.toString()]
        )
        : []
    );

    const args = this.modules.map((module) =>
      module.module.call.functions.map((fn) =>
        fn.arguments.map((argument) =>
          argument.type.toString()
        )
      )
    );

    const types = flattenUniq([events, storages, args]);

    this.validateTypes(types);

    return types;
  }

  private validateTypes (types: Array<string>): void {
    const extractTypes = (types: Array<string>): Array<any> => {
      return types.map((type) => {
        const decoded = getTypeDef(type);

        switch (decoded.info) {
          case TypeDefInfo.Plain:
            return decoded.type;

          case TypeDefInfo.Compact:
          case TypeDefInfo.Vector:
            return extractTypes([(decoded.sub as TypeDef).type]);

          case TypeDefInfo.Tuple:
            return extractTypes(
              (decoded.sub as Array<TypeDef>).map((sub) => sub.type)
            );

          default:
            throw new Error('Unreachable');
        }
      });
    };

    const missing = flattenUniq(extractTypes(types)).filter((type) =>
      isUndefined((allTypes as any)[type])
    );

    assert(missing.length === 0, `Unknown types found, no types for ${missing}`);
  }
}
