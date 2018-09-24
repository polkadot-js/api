// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecArray from './base/Array';
import CodecBase from './base/Base';
import CodecEnum from './base/Enum';
import CodecEnumType from './base/EnumType';
import CodecOption from './base/Option';
import CodecStruct from './base/Struct';
import String from './String';
import Type from './Type';
import U16 from './U16';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call.
export default class RuntimeMetadata extends CodecStruct {
  constructor (value?: any) {
    super({
      outerEvent: OuterEventMetadata,
      modules: CodecArray.with(RuntimeModuleMetadata)
    }, value);
  }

  // FIXME Really not crazy about having to manually add all the getters. Preferably it should
  // be done automagically in the actual CodecStruct - however what is really important here
  // here is that we should nbot lose the autocompletion and checking that TS gives us. So if
  // we have to choose between the 2, manual defs it would have to be.

  get events (): CodecArray<OuterEventMetadataEvent> {
    return (this.raw.outerEvent as OuterEventMetadata).events;
  }

  get modules (): CodecArray<RuntimeModuleMetadata> {
    return this.raw.modules as CodecArray<RuntimeModuleMetadata>;
  }
}

class EventMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      arguments: CodecArray.with(String),
      documentation: CodecArray.with(String)
    });
  }

  get arguments (): CodecArray<String> {
    return this.raw.arguments as CodecArray<String>;
  }

  get documentation (): CodecArray<String> {
    return this.raw.documentation as CodecArray<String>;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class OuterEventMetadataEvent extends CodecStruct {
  constructor () {
    super({
      name: String,
      events: CodecArray.with(EventMetadata)
    });
  }

  get events (): CodecArray<EventMetadata> {
    return this.raw.events as CodecArray<EventMetadata>;
  }

  get name (): String {
    return this.raw.name as String;
  }
}

class OuterEventMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      events: CodecArray.with(OuterEventMetadataEvent)
    });
  }

  get events (): CodecArray<OuterEventMetadataEvent> {
    return this.raw.events as CodecArray<OuterEventMetadataEvent>;
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
      arguments: CodecArray.with(FunctionArgumentMetadata),
      documentation: CodecArray.with(String)
    });
  }

  get arguments (): CodecArray<FunctionArgumentMetadata> {
    return this.raw.arguments as CodecArray<FunctionArgumentMetadata>;
  }

  get documentation (): CodecArray<String> {
    return this.raw.documentation as CodecArray<String>;
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
      functions: CodecArray.with(FunctionMetadata)
    });
  }

  get functions (): CodecArray<FunctionMetadata> {
    return this.raw.functions as CodecArray<FunctionMetadata>;
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
      documentation: CodecArray.with(String)
    });
  }

  get documentation (): CodecArray<String> {
    return this.raw.documentation as CodecArray<String>;
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
      functions: CodecArray.with(StorageFunctionMetadata)
    });
  }

  get functions (): CodecArray<StorageFunctionMetadata> {
    return this.raw.functions as CodecArray<StorageFunctionMetadata>;
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
