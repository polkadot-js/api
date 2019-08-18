// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV1, FunctionMetadataV1 } from '../../interfaces/metadata/types';
import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';

import { StorageFunctionMetadata } from './Storage';

/**
 * @name ModuleMetadataV1
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadataV1 extends Struct {
  public constructor (value?: any) {
    super({
      name: 'Text',
      prefix: 'Text',
      storage: Option.with(Vec.with(StorageFunctionMetadata)),
      calls: Option.with('Vec<FunctionMetadataV1>'),
      events: Option.with('Vec<EventMetadataV1>')
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadataV1>> {
    return this.get('calls') as Option<Vec<FunctionMetadataV1>>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadataV1>> {
    return this.get('events') as Option<Vec<EventMetadataV1>>;
  }

  /**
   * @description the module name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the module prefix
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description the associated module storage
   */
  public get storage (): Option<Vec<StorageFunctionMetadata>> {
    return this.get('storage') as Option<Vec<StorageFunctionMetadata>>;
  }
}

/**
 * @name MetadataV1
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV1 extends Struct implements MetadataInterface<ModuleMetadataV1> {
  public constructor (value?: any) {
    super({
      modules: Vec.with(ModuleMetadataV1)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadataV1> {
    return this.get('modules') as Vec<ModuleMetadataV1>;
  }
}
