// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';

import { OuterDispatchCall } from '../v0/Calls';
import { EventMetadata } from '../v0/Events';
import { CallMetadata, StorageMetadata } from '../v0/Modules';

class RuntimeModuleMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(StorageMetadata),
      call: CallMetadata,
      outerDispatch: Option.with(OuterDispatchCall),
      event: Vector.with(EventMetadata)
    }, value);
  }

  /**
   * @description the module call
   */
  get call (): CallMetadata {
    return this.get('call') as CallMetadata;
  }

  /**
   * @description the module events
   */
  get event (): Vector<EventMetadata> {
    return this.get('event') as Vector<EventMetadata>;
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
export default class MetadataV1 extends Struct {
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
}
