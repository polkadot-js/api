// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecArray from './base/Array';
import CodecEnum from './base/Enum';
import CodecEnumType from './base/EnumType';
import CodecOption from './base/Option';
import CodecStruct from './base/Struct';
import String from './String';
import Type from './Type';
import U16 from './U16';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call.
export default class RuntimeMetadata extends CodecStruct<{
  outerEvent: OuterEventMetadata,
  modules: CodecArray<RuntimeModuleMetadata>
}> {
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
    return this.raw.outerEvent.events;
  }

  get modules (): CodecArray<RuntimeModuleMetadata> {
    return this.raw.modules;
  }
}

class EventMetadata extends CodecStruct<{
  name: String,
  arguments: CodecArray<String>,
  documentation: CodecArray<String>
}> {
  constructor () {
    super({
      name: String,
      arguments: CodecArray.with(String),
      documentation: CodecArray.with(String)
    });
  }

  get arguments (): CodecArray<String> {
    return this.raw.arguments;
  }

  get documentation (): CodecArray<String> {
    return this.raw.documentation;
  }

  get name (): String {
    return this.raw.name;
  }
}

class OuterEventMetadataEvent extends CodecStruct<{
  name: String,
  events: CodecArray<EventMetadata>
}> {
  constructor () {
    super({
      name: String,
      events: CodecArray.with(EventMetadata)
    });
  }

  get events (): CodecArray<EventMetadata> {
    return this.raw.events;
  }

  get name (): String {
    return this.raw.name;
  }
}

class OuterEventMetadata extends CodecStruct<{
  name: String,
  events: CodecArray<OuterEventMetadataEvent>
}> {
  constructor () {
    super({
      name: String,
      events: CodecArray.with(OuterEventMetadataEvent)
    });
  }

  get events (): CodecArray<OuterEventMetadataEvent> {
    return this.raw.events;
  }

  get name (): String {
    return this.raw.name;
  }
}

class FunctionArgumentMetadata extends CodecStruct<{
  name: String,
  type: Type
}> {
  constructor () {
    super({
      name: String,
      type: Type
    });
  }

  get name (): String {
    return this.raw.name;
  }

  get type (): String {
    return this.raw.type;
  }
}

class FunctionMetadata extends CodecStruct<{
  id: U16,
  name: String,
  arguments: CodecArray<FunctionArgumentMetadata>,
  documentation: CodecArray<String>
}> {
  constructor () {
    super({
      id: U16,
      name: String,
      arguments: CodecArray.with(FunctionArgumentMetadata),
      documentation: CodecArray.with(String)
    });
  }

  get arguments (): CodecArray<FunctionArgumentMetadata> {
    return this.raw.arguments;
  }

  get documentation (): CodecArray<String> {
    return this.raw.documentation;
  }

  get id (): U16 {
    return this.raw.id;
  }

  get name (): String {
    return this.raw.name;
  }
}

class CallMetadata extends CodecStruct<{
  name: String,
  functions: CodecArray<FunctionMetadata>
}> {
  constructor () {
    super({
      name: String,
      functions: CodecArray.with(FunctionMetadata)
    });
  }

  get functions (): CodecArray<FunctionMetadata> {
    return this.raw.functions;
  }

  get name (): String {
    return this.raw.name;
  }
}

class ModuleMetadata extends CodecStruct<{
  name: String,
  call: CallMetadata
}> {
  constructor () {
    super({
      name: String,
      call: CallMetadata
    });
  }

  get call (): CallMetadata {
    return this.raw.call;
  }

  get name (): String {
    return this.raw.name;
  }
}

class StorageFunctionModifier extends CodecEnum {
  constructor () {
    super(['None', 'Default', 'Required']);
  }
}

class StorageFunctionType extends CodecEnumType<Type | CodecStruct> {
  constructor () {
    super([
      Type,
      CodecStruct.with({
        key: Type,
        value: Type
      })
    ], ['Plain', 'KeyValue']);
  }
}

class StorageFunctionMetadata extends CodecStruct<{
  name: String,
  modifier: StorageFunctionModifier,
  type: StorageFunctionType,
  documentation: CodecArray<String>
}> {
  constructor () {
    super({
      name: String,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      documentation: CodecArray.with(String)
    });
  }

  get documentation (): CodecArray<String> {
    return this.raw.documentation;
  }

  get name (): String {
    return this.raw.name;
  }

  get modifier (): StorageFunctionModifier {
    return this.raw.modifier;
  }

  get type (): StorageFunctionType {
    return this.raw.type;
  }
}

class StorageMetadata extends CodecStruct<{
  prefix: String,
  functions: CodecArray<StorageFunctionMetadata>
}> {
  constructor () {
    super({
      prefix: String,
      functions: CodecArray.with(StorageFunctionMetadata)
    });
  }

  get functions (): CodecArray<StorageFunctionMetadata> {
    return this.raw.functions;
  }

  get prefix (): String {
    return this.raw.prefix;
  }
}

class RuntimeModuleMetadata extends CodecStruct<{
  prefix: String,
  module: ModuleMetadata,
  storage: CodecOption<StorageMetadata>
}> {
  constructor () {
    super({
      prefix: String,
      module: ModuleMetadata,
      storage: CodecOption.with(StorageMetadata)
    });
  }

  get module (): ModuleMetadata {
    return this.raw.module;
  }

  get prefix (): String {
    return this.raw.prefix;
  }

  get storage (): StorageMetadata | undefined {
    return this.raw.storage.value;
  }
}
