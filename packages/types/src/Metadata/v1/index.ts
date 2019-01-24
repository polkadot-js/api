// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';

class EventMetadata extends Struct {
  constructor (value?: any) {
    super({
      // TODO
    }, value);
  }
}

class OuterDispatchCall extends Struct {
  constructor (value?: any) {
    super({
      // TODO
    }, value);
  }
}

class CallMetadata extends Struct {
  constructor (value?: any) {
    super({
      // TODO
    }, value);
  }
}

class StorageMetadata extends Struct {
  constructor (value?: any) {
    super({
      // TODO
    }, value);
  }
}
/*
  pub name: DecodeDifferentStr,
	pub prefix: DecodeDifferentStr,
	pub storage: Option<DFn<StorageMetadata>>,
	pub call: DFn<CallMetadata>,
	pub outer_dispatch: DecodeDifferent<FnEncodeModule<Option<OuterDispatchCall>>, Option<OuterDispatchCall>>,
  pub event: DecodeDifferent<FnEncodeModule<FnEncode<&'static [EventMetadata]>>, Vec<EventMetadata>>,
*/
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
