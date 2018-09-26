// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

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
  constructor () {
    super({
      name: Text,
      arguments: Vector.with(Type),
      documentation: Vector.with(Text)
    });
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
  constructor () {
    super({
      name: Text,
      events: Vector.with(EventMetadata)
    });
  }

  get events (): Vector<EventMetadata> {
    return this.raw.events as Vector<EventMetadata>;
  }

  get name (): Text {
    return this.raw.name as Text;
  }
}

export class OuterEventMetadata extends Struct {
  constructor () {
    super({
      name: Text,
      events: Vector.with(OuterEventMetadataEvent)
    });
  }

  get events (): Vector<OuterEventMetadataEvent> {
    return this.raw.events as Vector<OuterEventMetadataEvent>;
  }

  get name (): Text {
    return this.raw.name as Text;
  }
}

export class FunctionArgumentMetadata extends Struct {
  constructor () {
    super({
      name: Text,
      type: Type
    });
  }

  get name (): Text {
    return this.raw.name as Text;
  }

  get type (): Type {
    return this.raw.type as Type;
  }
}

export class FunctionMetadata extends Struct {
  constructor () {
    super({
      id: U16,
      name: Text,
      arguments: Vector.with(FunctionArgumentMetadata),
      documentation: Vector.with(Text)
    });
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
  constructor () {
    super({
      name: Text,
      functions: Vector.with(FunctionMetadata)
    });
  }

  get functions (): Vector<FunctionMetadata> {
    return this.raw.functions as Vector<FunctionMetadata>;
  }

  get name (): Text {
    return this.raw.name as Text;
  }
}

export class ModuleMetadata extends Struct {
  constructor () {
    super({
      name: Text,
      call: CallMetadata
    });
  }

  get call (): CallMetadata {
    return this.raw.call as CallMetadata;
  }

  get name (): Text {
    return this.raw.name as Text;
  }
}

export class StorageFunctionModifier extends Enum {
  constructor () {
    super(['None', 'Default', 'Required']);
  }
}

export class StorageFunctionType$Map extends Struct {
  constructor () {
    super({
      key: Type,
      value: Type
    });
  }

  get key (): Type {
    return this.raw.type as Type;
  }

  get value (): Type {
    return this.raw.value as Type;
  }
}

export class StorageFunctionType extends EnumType<Type | StorageFunctionType$Map> {
  // NOTE Since this is called dynamically, we may have empty values here
  constructor (index?: number, value?: any) {
    super([
      Type,
      StorageFunctionType$Map
    ], ['Plain', 'Map']);

    this.setValue(index, value);
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
}

export class StorageFunctionMetadata extends Struct {
  constructor () {
    super({
      name: Text,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      documentation: Vector.with(Text)
    });
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
  constructor () {
    super({
      prefix: Text,
      functions: Vector.with(StorageFunctionMetadata)
    });
  }

  get functions (): Vector<StorageFunctionMetadata> {
    return this.raw.functions as Vector<StorageFunctionMetadata>;
  }

  get prefix (): Text {
    return this.raw.prefix as Text;
  }
}

export class RuntimeModuleMetadata extends Struct {
  constructor () {
    super({
      prefix: Text,
      module: ModuleMetadata,
      storage: Option.with(StorageMetadata)
    });
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

  // We receive this a an Array<number> in the JSON output from the Node. Convert
  // to u8a and use the fromU8a to do the actual parsing
  //
  // FIXME Currently toJSON creates a struct, so it is not a one-to-one mapping
  // with what is actually found on the RPC layer. This needs to be adjusted to
  // match. (However for now, it is useful in debugging)
  fromJSON (input: Array<number>): RuntimeMetadata {
    return this.fromU8a(
      Uint8Array.from(input)
    ) as RuntimeMetadata;
  }

  // FIXME Really not crazy about having to manually add all the getters. Preferably it should
  // be done automagically in the actual Struct - however what is really important here
  // here is that we should nbot lose the autocompletion and checking that TS gives us. So if
  // we have to choose between the 2, manual defs it would have to be.

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
