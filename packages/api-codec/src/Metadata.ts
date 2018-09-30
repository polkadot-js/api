// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from './types';

import toU8a from '@polkadot/util/u8a/toU8a';

import Vector from './codec/Vector';
import Base from './codec/Base';
import Enum from './codec/Enum';
import EnumType from './codec/EnumType';
import Option from './codec/Option';
import Struct from './codec/Struct';
import Text from './Text';
import Type from './Type';
import U16 from './U16';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call. This
// file is probably best understood from the bottom-up, i.e. start reading right at the
// end and work up. (Just so we don't use before definition)

export class EventMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      arguments: Vector.with(Type),
      documentation: Vector.with(Text)
    }, value);
  }

  get arguments (): Vector<Type> {
    return this.raw.arguments as Vector<Type>;
  }

  get documentation (): Vector<Text> {
    return this.raw.documentation as Vector<Text>;
  }

  get name (): Text {
    return this.raw.name as Text;
  }
}

export class OuterEventMetadataEvent extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      events: Vector.with(EventMetadata)
    }, value);
  }

  get events (): Vector<EventMetadata> {
    return this.raw.events as Vector<EventMetadata>;
  }

  get name (): Text {
    return this.raw.name as Text;
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
    return this.raw.events as Vector<OuterEventMetadataEvent>;
  }

  get name (): Text {
    return this.raw.name as Text;
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
    return this.raw.name as Text;
  }

  get type (): Type {
    return this.raw.type as Type;
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
    return this.raw.arguments as Vector<FunctionArgumentMetadata>;
  }

  get documentation (): Vector<Text> {
    return this.raw.documentation as Vector<Text>;
  }

  get id (): U16 {
    return this.raw.id as U16;
  }

  get name (): Text {
    return this.raw.name as Text;
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
    return this.raw.functions as Vector<FunctionMetadata>;
  }

  get name (): Text {
    return this.raw.name as Text;
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
    return this.raw.call as CallMetadata;
  }

  get name (): Text {
    return this.raw.name as Text;
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
    return this.raw.type as Type;
  }

  get value (): Type {
    return this.raw.value as Type;
  }
}

export class StorageFunctionType extends EnumType<Type | StorageFunctionType$Map> {
  constructor (index?: number, value?: any) {
    super([
      Type,
      StorageFunctionType$Map
    ], index, value);
  }

  get isMap (): boolean {
    return this.toNumber() === 1;
  }

  get asMap (): StorageFunctionType$Map {
    return (this.raw as Base<StorageFunctionType$Map>).raw;
  }

  get asType (): Type {
    return (this.raw as Base<Type>).raw;
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
    return this.raw.documentation as Vector<Text>;
  }

  get name (): Text {
    return this.raw.name as Text;
  }

  get modifier (): StorageFunctionModifier {
    return this.raw.modifier as StorageFunctionModifier;
  }

  get type (): StorageFunctionType {
    return this.raw.type as StorageFunctionType;
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
    return this.raw.functions as Vector<StorageFunctionMetadata>;
  }

  get prefix (): Text {
    return this.raw.prefix as Text;
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
    return this.raw.module as ModuleMetadata;
  }

  get prefix (): Text {
    return this.raw.prefix as Text;
  }

  get storage (): StorageMetadata | undefined {
    return (this.raw.storage as Option<StorageMetadata>).value;
  }
}

export default class RuntimeMetadata extends Struct {
  constructor (value?: any) {
    super({
      outerEvent: OuterEventMetadata,
      modules: Vector.with(RuntimeModuleMetadata)
    }, value);
  }

  // We receive this as an Array<number> in the JSON output from the Node. Convert
  // to u8a and use the fromU8a to do the actual parsing
  fromJSON (input: Uint8Array | string | Array<number>): RuntimeMetadata {
    return this.fromU8a(
      toU8a(input)
    ) as RuntimeMetadata;
  }

  // FIXME Currently toJSON creates a struct, so it is not a one-to-one mapping
  // with what is actually found on the RPC layer. This needs to be adjusted to
  // match fromJSON. (However for now, it is useful in debugging)
  toJSON (): any {
    return super.toJSON();
  }

  get events (): Vector<OuterEventMetadataEvent> {
    return (this.raw.outerEvent as OuterEventMetadata).events;
  }

  get modules (): Vector<RuntimeModuleMetadata> {
    return this.raw.modules as Vector<RuntimeModuleMetadata>;
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
          argument.raw
        )
      )
    );
    const storages = this.modules.map((module) =>
      module.storage
        ? module.storage.functions.map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.raw, fn.type.asMap.value.raw]
            : [fn.type.asType.raw]
        )
        : []
    );
    const args = this.modules.map((module) =>
      module.module.call.functions.map((fn) =>
        fn.arguments.map((argument) =>
          argument.type.raw
        )
      )
    );

    return [...new Set(
      flatten([events, storages, args]).filter((value) => value)
    )].sort();
  }
}
