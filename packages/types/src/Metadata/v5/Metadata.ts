// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV5, FunctionMetadataV5 } from '../../interfaces/metadata';
import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import { StorageFunctionMetadata } from './Storage';

/**
 * @name ModuleMetadataV5
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadataV5 extends Struct {
  public constructor (value?: any) {
    super({
      name: 'Text',
      prefix: 'Text',
      storage: Option.with(Vec.with(StorageFunctionMetadata)),
      calls: Option.with('Vec<FunctionMetadataV5>'),
      events: Option.with('Vec<EventMetadataV5>')
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadataV5>> {
    return this.get('calls') as Option<Vec<FunctionMetadataV5>>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadataV5>> {
    return this.get('events') as Option<Vec<EventMetadataV5>>;
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
 * @name MetadataV5
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV5 extends Struct implements MetadataInterface<ModuleMetadataV5> {
  public constructor (value?: any) {
    super({
      modules: Vec.with(ModuleMetadataV5)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadataV5> {
    return this.get('modules') as Vec<ModuleMetadataV5>;
  }
}
