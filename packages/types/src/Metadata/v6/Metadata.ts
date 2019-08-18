// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV6, FunctionMetadataV6, ModuleConstantMetadataV6 } from '../../interfaces/metadata';
import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import { StorageEntryMetadata } from './Storage';

/**
 * @name ModuleMetadataV6
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadataV6 extends Struct {
  public constructor (value?: any) {
    super({
      name: 'Text',
      prefix: 'Text',
      storage: Option.with(Vec.with(StorageEntryMetadata)),
      calls: Option.with('Vec<FunctionMetadataV6>'),
      events: Option.with('Vec<EventMetadataV6>'),
      constants: 'Vec<ModuleConstantMetadataV6>'
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadataV6>> {
    return this.get('calls') as Option<Vec<FunctionMetadataV6>>;
  }

  /**
   * @description the module constants
   */
  public get constants (): Vec<ModuleConstantMetadataV6> {
    return this.get('constants') as Vec<ModuleConstantMetadataV6>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadataV6>> {
    return this.get('events') as Option<Vec<EventMetadataV6>>;
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
  public get storage (): Option<Vec<StorageEntryMetadata>> {
    return this.get('storage') as Option<Vec<StorageEntryMetadata>>;
  }
}

/**
 * @name MetadataV6
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV6 extends Struct implements MetadataInterface<ModuleMetadataV6> {
  public constructor (value?: any) {
    super({
      modules: Vec.with(ModuleMetadataV6)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadataV6> {
    return this.get('modules') as Vec<ModuleMetadataV6>;
  }
}
