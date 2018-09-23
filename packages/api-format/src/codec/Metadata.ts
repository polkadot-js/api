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

class EventMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      arguments: class extends CodecArray<String> {
        constructor () {
          super(String);
        }
      },
      documentation: class extends CodecArray<String> {
        constructor () {
          super(String);
        }
      }
    });
  }
}

class OuterEventMetadataEvent extends CodecStruct {
  constructor () {
    super({
      name: String,
      events: class extends CodecArray<EventMetadata> {
        constructor () {
          super(EventMetadata);
        }
      }
    });
  }
}

class OuterEventMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      events: class OuterEventMetadata$Events extends CodecArray<OuterEventMetadataEvent> {
        constructor () {
          super(OuterEventMetadataEvent);
        }
      }
    });
  }
}

class FunctionArgumentMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      type: String
    });
  }
}

class FunctionMetadata extends CodecStruct {
  constructor () {
    super({
      id: U16,
      name: String,
      arguments: class extends CodecArray<FunctionArgumentMetadata> {
        constructor () {
          super(FunctionArgumentMetadata);
        }
      },
      documentation: class extends CodecArray<String> {
        constructor () {
          super(String);
        }
      }
    });
  }
}

class CallMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      functions: class extends CodecArray<FunctionMetadata> {
        constructor () {
          super(FunctionMetadata);
        }
      }
    });
  }
}

class ModuleMetadata extends CodecStruct {
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

class StorageFunctionType extends CodecEnumType {
  constructor () {
    super([
      String,
      class extends CodecStruct {
        constructor () {
          super({
            key: String,
            value: String
          });
        }
      }
    ], ['Plain', 'KeyValue']);
  }
}

class StorageFunctionMetadata extends CodecStruct {
  constructor () {
    super({
      name: String,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      documentation: class extends CodecArray<String> {
        constructor () {
          super(String);
        }
      }
    });
  }
}

class StorageMetadata extends CodecStruct {
  constructor () {
    super({
      prefix: String,
      functions: class extends CodecArray<StorageFunctionMetadata> {
        constructor () {
          super(StorageFunctionMetadata);
        }
      }
    });
  }
}

class RuntimeModuleMetadata extends CodecStruct {
  constructor () {
    super({
      prefix: String,
      module: ModuleMetadata,
      storage: class extends CodecOption {
        constructor () {
          super(StorageMetadata);
        }
      }
    });
  }
}

export default class RuntimeMetadata extends CodecStruct {
  constructor (value?: any) {
    super({
      outerEvent: OuterEventMetadata,
      modules: class extends CodecArray<RuntimeModuleMetadata> {
        constructor () {
          super(RuntimeModuleMetadata);
        }
      }
    }, value);
  }

  get modules (): RuntimeModuleMetadata {
    return this.raw.modules;
  }
}
