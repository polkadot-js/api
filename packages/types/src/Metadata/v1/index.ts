// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';

import { flattenUniq, validateTypes } from '../util';
import { StorageMetadata } from '../v0/Modules';
import { CallsMetadata } from './calls';
import { EventsMetadata } from './events';

class RuntimeModuleMetadata extends Struct {
  constructor (value?: any) {
    super({
      prefix: Text,
      storage: Option.with(StorageMetadata),
      calls: Option.with(CallsMetadata),
      events: Option.with(EventsMetadata)
    }, value);
  }

  /**
   * @description the module calls
   */
  get calls (): Option<CallsMetadata> {
    return this.get('calls') as Option<CallsMetadata>;
  }

  /**
   * @description the module events
   */
  get events (): Option<EventsMetadata> {
    return this.get('events') as Option<EventsMetadata>;
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
    return this.modules.map((mod) =>
      mod.calls.isNone
        ? []
        : mod.calls.unwrap().functions.map((fn) =>
          fn.arguments.map((argument) => argument.type.toString())
        )
    );
  }

  private get eventNames () {
    return this.modules.map((mod) =>
      mod.events.isNone
        ? []
        : mod.events.unwrap().map((event) =>
          event.arguments.map((arg) => arg.toString())
        )
    );
  }

  private get storageNames () {
    return this.modules.map((mod) =>
      mod.storage.isNone
        ? []
        : mod.storage.unwrap().functions.map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
            : [fn.type.asType.toString()]
        )
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
