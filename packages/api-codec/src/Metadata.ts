// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Vector from './codec/Vector';
import CodecBase from './codec/Base';
import CodecEnum from './codec/Enum';
import CodecEnumType from './codec/EnumType';
import CodecOption from './codec/Option';
import CodecStruct from './codec/Struct';
import String from './Text';
import Type from './Type';
import U16 from './U16';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call. This
// file is probably best understood from the bottom-up, i.e. start reading right at the
// end and work up. (Just so we don't use before definition)

class EventMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      arguments: Vector.with(Type),
      documentation: Vector.with(String)
    });
  }

  get arguments (): Vector<Type> {
    return this.raw.arguments as Vector<Type>;
  }

  get documentation (): Vector<String> {
    return this.raw.documentation as Vector<String>;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class OuterEventMetadataEvent extends CodecStruct {
  constructor () {
    super({
      name: String,
      events: Vector.with(EventMetadata)
    });
  }

  get events (): Vector<EventMetadata> {
    return this.raw.events as Vector<EventMetadata>;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class OuterEventMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      events: Vector.with(OuterEventMetadataEvent)
    });
  }

  get events (): Vector<OuterEventMetadataEvent> {
    return this.raw.events as Vector<OuterEventMetadataEvent>;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class FunctionArgumentMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      type: Type
    });
  }

  get name (): String {
    return this.raw.name as String;
  }

  get type (): Type {
    return this.raw.type as Type;
  }
}

class FunctionMetadata extends CodecStruct {
  constructor () {
    super({
      id: U16,
      name: String,
      arguments: Vector.with(FunctionArgumentMetadata),
      documentation: Vector.with(String)
    });
  }

  get arguments (): Vector<FunctionArgumentMetadata> {
    return this.raw.arguments as Vector<FunctionArgumentMetadata>;
  }

  get documentation (): Vector<String> {
    return this.raw.documentation as Vector<String>;
  }

  get id (): U16 {
    return this.raw.id as U16;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class CallMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      functions: Vector.with(FunctionMetadata)
    });
  }

  get functions (): Vector<FunctionMetadata> {
    return this.raw.functions as Vector<FunctionMetadata>;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class ModuleMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      call: CallMetadata
    });
  }

  get call (): CallMetadata {
    return this.raw.call as CallMetadata;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class StorageFunctionModifier extends CodecEnum {
  constructor () {
    super(['None', 'Default', 'Required']);
  }
}

class StorageFunctionType$Map extends CodecStruct {
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

class StorageFunctionType extends CodecEnumType<Type | StorageFunctionType$Map> {
  constructor () {
    super([
      Type,
      StorageFunctionType$Map
    ], ['Plain', 'Map']);
  }

  get isMap (): boolean {
    return this.toNumber() === 1;
  }

  get asMap (): StorageFunctionType$Map {
    return (this.raw as CodecBase<StorageFunctionType$Map>).raw;
  }

  get asType (): Type {
    return (this.raw as CodecBase<Type>).raw;
  }
}

class StorageFunctionMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      documentation: Vector.with(String)
    });
  }

  get documentation (): Vector<String> {
    return this.raw.documentation as Vector<String>;
  }

  get name (): String {
    return this.raw.name as String;
  }

  get modifier (): StorageFunctionModifier {
    return this.raw.modifier as StorageFunctionModifier;
  }

  get type (): StorageFunctionType {
    return this.raw.type as StorageFunctionType;
  }
}

class StorageMetadata extends CodecStruct {
  constructor () {
    super({
      prefix: String,
      functions: Vector.with(StorageFunctionMetadata)
    });
  }

  get functions (): Vector<StorageFunctionMetadata> {
    return this.raw.functions as Vector<StorageFunctionMetadata>;
  }

  get prefix (): String {
    return this.raw.prefix as String;
  }
}

class RuntimeModuleMetadata extends CodecStruct {
  constructor () {
    super({
      prefix: String,
      module: ModuleMetadata,
      storage: CodecOption.with(StorageMetadata)
    });
  }

  get module (): ModuleMetadata {
    return this.raw.module as ModuleMetadata;
  }

  get prefix (): String {
    return this.raw.prefix as String;
  }

  get storage (): StorageMetadata | undefined {
    return (this.raw.storage as CodecOption<StorageMetadata>).value;
  }
}

export default class RuntimeMetadata extends CodecStruct {
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
  // be done automagically in the actual CodecStruct - however what is really important here
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
