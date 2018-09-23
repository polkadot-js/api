// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecArray from './base/Array';
import CodecEnum from './base/Enum';
import CodecEnumType from './base/EnumType';
import CodecOption from './base/Option';
import CodecStruct from './base/Struct';
import String from './String';
import U16 from './U16';

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
}

class FunctionArgumentMetadata extends CodecStruct<{
  name: String,
  type: String
}> {
  constructor () {
    super({
      name: String,
      type: String
    });
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
}

class StorageFunctionModifier extends CodecEnum {
  constructor () {
    super(['None', 'Default', 'Required']);
  }
}

class StorageFunctionType extends CodecEnumType<String | CodecStruct> {
  constructor () {
    super([
      String,
      CodecStruct.with({
        key: String,
        value: String
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
}

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

  get modules (): CodecArray<RuntimeModuleMetadata> {
    return this._raw.modules;
  }
}
