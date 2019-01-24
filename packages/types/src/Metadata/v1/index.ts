// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';

import { flattenUniq, validateTypes } from '../util';
import { OuterDispatchCall } from '../v0/Calls';
import { EventMetadata } from '../v0/Events';
import { CallMetadata, StorageMetadata } from '../v0/Modules';

class RuntimeModuleMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(StorageMetadata),
      calls: CallMetadata,
      outerDispatch: Option.with(OuterDispatchCall),
      events: Vector.with(EventMetadata)
    }, value);
  }

  /**
   * @description the module call
   */
  get calls (): CallMetadata {
    return this.get('calls') as CallMetadata;
  }

  /**
   * @description the module events
   */
  get events (): Vector<EventMetadata> {
    return this.get('events') as Vector<EventMetadata>;
  }

  /**
   * @description the module name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the outer dispatch
   */
  get outerDispatch (): Option<OuterDispatchCall> {
    return this.get('outerDispatch') as Option<OuterDispatchCall>;
  }

  /**
   * @description the module name
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description the associated module storage
   */
  get storage (): Option<StorageMetadata> {
    return this.get('storage') as Option<StorageMetadata>;
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
      modules: Vector.with(RuntimeModuleMetadata)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  get modules (): Vector<RuntimeModuleMetadata> {
    return this.get('modules') as Vector<RuntimeModuleMetadata>;
  }

  private get callNames () {
    return this.modules.map((module) =>
      module.calls.functions.map((fn) =>
        fn.arguments.map((argument) => argument.type.toString())
      )
    );
  }

  private get eventNames () {
    return this.modules.map((module) =>
      module.events.map((event) =>
        event.arguments.map((argument) => argument.toString())
      )
    );
  }

  private get storageNames () {
    return this.modules.map((module) =>
      module.storage.isSome
        ? module.storage.unwrap().functions.map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
            : [fn.type.asType.toString()]
        )
        : []
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
