// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from './types';

import { hexToU8a, isHex, isU8a } from '@polkadot/util';

import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
import Enum from './codec/Enum';
import EnumType from './codec/EnumType';
import Option from './codec/Option';
import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import Text from './Text';
import Type from './Type';
import U16 from './U16';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call. This
// file is probably best understood from the bottom-up, i.e. start reading right at the
// end and work up. (Just so we don't use before definition)

export class OuterDispatchCall extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      index: U16
    }, value);
  }

  get index (): U16 {
    return this.get('index') as U16;
  }

  get name (): Text {
    return this.get('name') as Text;
  }

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

  get calls (): Vector<OuterDispatchCall> {
    return this.get('calls') as Vector<OuterDispatchCall>;
  }

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

  get arguments (): Vector<Type> {
    return this.get('arguments') as Vector<Type>;
  }

  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  get name (): Text {
    return this.get('name') as Text;
  }
}

export class OuterEventMetadataEvent extends Tuple {
  constructor (value?: any) {
    super({
      name: Text,
      events: Vector.with(EventMetadata)
    }, value);
  }

  get events (): Vector<EventMetadata> {
    return this.getAtIndex(1) as Vector<EventMetadata>;
  }

  get name (): Text {
    return this.getAtIndex(0) as Text;
  }
}

export class OuterEventMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      events: Vector.with(OuterEventMetadataEvent)
    }, value);
  }

  get events (): Vector<OuterEventMetadataEvent> {
    return this.get('events') as Vector<OuterEventMetadataEvent>;
  }

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

  get name (): Text {
    return this.get('name') as Text;
  }

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

  get arguments (): Vector<FunctionArgumentMetadata> {
    return this.get('arguments') as Vector<FunctionArgumentMetadata>;
  }

  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  get id (): U16 {
    return this.get('id') as U16;
  }

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

  get functions (): Vector<FunctionMetadata> {
    return this.get('functions') as Vector<FunctionMetadata>;
  }

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

  get call (): CallMetadata {
    return this.get('call') as CallMetadata;
  }

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

  get key (): Type {
    return this.get('key') as Type;
  }

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

  get isMap (): boolean {
    return this.toNumber() === 1;
  }

  get asMap (): StorageFunctionType$Map {
    return this.value as StorageFunctionType$Map;
  }

  get asType (): Type {
    return this.value as Type;
  }

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

  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  get name (): Text {
    return this.get('name') as Text;
  }

  get modifier (): StorageFunctionModifier {
    return this.get('modifier') as StorageFunctionModifier;
  }

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

  get functions (): Vector<StorageFunctionMetadata> {
    return this.get('functions') as Vector<StorageFunctionMetadata>;
  }

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

  get module (): ModuleMetadata {
    return this.get('module') as ModuleMetadata;
  }

  get prefix (): Text {
    return this.get('prefix') as Text;
  }

  get storage (): Option<StorageMetadata> {
    return (this.get('storage') as Option<StorageMetadata>);
  }
}

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
      const [offset, length] = Compact.decodeU8a(value, DEFAULT_LENGTH_BITS);

      return value.length === (offset + length.toNumber())
        ? value.subarray(offset)
        : value;
    }

    // Decode as normal struct
    return value;
  }

  // FIXME Currently toJSON creates a struct, so it is not a one-to-one mapping
  // with what is actually found on the RPC layer. This needs to be adjusted to
  // match the constructor with JSON. (However for now, it is useful in
  // debugging).
  toJSON (): any {
    return super.toJSON();
  }

  get calls (): Vector<OuterDispatchCall> {
    return (this.get('outerDispatch') as OuterDispatchMetadata).calls;
  }

  get events (): Vector<OuterEventMetadataEvent> {
    return (this.get('outerEvent') as OuterEventMetadata).events;
  }

  get modules (): Vector<RuntimeModuleMetadata> {
    return this.get('modules') as Vector<RuntimeModuleMetadata>;
  }

  // Helper to retrieve a list of all type that are found, sorted and de-deuplicated
  getUniqTypes (): Array<string> {
    // Quick and dirty flatten (.flat() not available)
    const flatten = (list: Array<any>): Array<any> =>
      list.reduce((result, entry) => {
        return result.concat(
          Array.isArray(entry)
            ? flatten(entry)
            : entry
        );
      }, []);

    const events = this.events.map((module) =>
      module.events.map((event) =>
        event.arguments.map((argument) =>
          argument.toString()
        )
      )
    );

    const storages = this.modules.map((module) => {
      return module.storage.isSome
        ? (module.storage.value as StorageMetadata).functions.map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
            : [fn.type.asType.toString()]
        )
        : [];
    }

    );
    const args = this.modules.map((module) =>
      module.module.call.functions.map((fn) =>
        fn.arguments.map((argument) =>
          argument.type.toString()
        )
      )
    );

    return [...new Set(
      flatten([events, storages, args]).filter((value) => value)
    )].sort();
  }
}
