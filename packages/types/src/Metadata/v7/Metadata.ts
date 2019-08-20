// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV7, FunctionMetadataV7, ModuleConstantMetadataV7 } from '../../interfaces/metadata';
import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import { StorageMetadata } from './Storage';

/**
 * @name ModuleMetadataV7
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadataV7 extends Struct {
  public constructor (value?: any) {
    super({
      name: 'Text',
      storage: Option.with(StorageMetadata),
      calls: Option.with('Vec<FunctionMetadataV7>'),
      events: Option.with('Vec<EventMetadataV7>'),
      constants: 'Vec<ModuleConstantMetadataV7>'
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadataV7>> {
    return this.get('calls') as Option<Vec<FunctionMetadataV7>>;
  }

  /**
   * @description the module constants
   */
  public get constants (): Vec<ModuleConstantMetadataV7> {
    return this.get('constants') as Vec<ModuleConstantMetadataV7>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadataV7>> {
    return this.get('events') as Option<Vec<EventMetadataV7>>;
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
  public get storage (): Option<StorageMetadata> {
    return this.get('storage') as Option<StorageMetadata>;
  }
}

/**
 * @name MetadataV7
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV7 extends Struct implements MetadataInterface<ModuleMetadataV7> {
  public constructor (value?: any) {
    super({
      modules: Vec.with(ModuleMetadataV7)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadataV7> {
    return this.get('modules') as Vec<ModuleMetadataV7>;
  }
}
