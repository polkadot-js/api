// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import { flattenUniq, validateTypes } from '../util';

import { MetadataCall } from '../v1/Calls';
import { MetadataEvent } from '../v1/Events';
import { StorageFunctionMetadata } from './Storage';

/**
 * @name MetadataModule
 * @description
 * The definition of a module in the system
 */
export class MetadataModule extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(Vector.with(StorageFunctionMetadata)),
      calls: Option.with(Vector.with(MetadataCall)),
      events: Option.with(Vector.with(MetadataEvent))
    }, value);
  }

  /**
   * @description the module calls
   */
  get calls (): Option<Vector<MetadataCall>> {
    return this.get('calls') as Option<Vector<MetadataCall>>;
  }

  /**
   * @description the module events
   */
  get events (): Option<Vector<MetadataEvent>> {
    return this.get('events') as Option<Vector<MetadataEvent>>;
  }

  /**
   * @description the module name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the module prefix
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description the associated module storage
   */
  get storage (): Option<Vector<StorageFunctionMetadata>> {
    return this.get('storage') as Option<Vector<StorageFunctionMetadata>>;
  }
}

/**
 * @name MetadataV4
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV4 extends Struct implements MetadataInterface {
  constructor (value?: any) {
    super({
      modules: Vector.with(MetadataModule)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  get modules (): Vector<MetadataModule> {
    return this.get('modules') as Vector<MetadataModule>;
  }

  private get callNames () {
    return this.modules.map((mod) =>
      mod.calls.isNone
        ? []
        : mod.calls.unwrap().map((fn) =>
          fn.args.map((arg) => arg.type.toString())
        )
    );
  }

  private get eventNames () {
    return this.modules.map((mod) =>
      mod.events.isNone
        ? []
        : mod.events.unwrap().map((event) =>
          event.args.map((arg) => arg.toString())
        )
    );
  }

  private get storageNames () {
    return this.modules.map((mod) =>
      mod.storage.isNone
        ? []
        : mod.storage.unwrap().map((fn) => {
          if (fn.type.isMap) {
            return [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()];
          } else if (fn.type.isDoubleMap) {
            return [fn.type.asDoubleMap.key1.toString(), fn.type.asDoubleMap.key2.toString(), fn.type.asDoubleMap.value.toString()];
          } else {
            return [fn.type.asType.toString()];
          }
        })
    );
  }

  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes (throwError: boolean): Array<string> {
    const types = flattenUniq([this.callNames, this.eventNames, this.storageNames]);

    validateTypes(types, throwError);

    return types;
  }
}
