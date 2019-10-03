// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ErrorMetadataV8, EventMetadataV8, FunctionMetadataV8, ModuleConstantMetadataV8 } from '../../interfaces/metadata';
import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import { StorageMetadata } from '../V7/Storage';

/**
 * @name ModuleMetadataV8
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadataV8 extends Struct {
  public constructor (value?: any) {
    super({
      name: 'Text',
      storage: Option.with(StorageMetadata),
      calls: Option.with('Vec<FunctionMetadataV8>'),
      events: Option.with('Vec<EventMetadataV8>'),
      constants: 'Vec<ModuleConstantMetadataV8>',
      errors: 'Vec<ErrorMetadataV8>'
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadataV8>> {
    return this.get('calls') as Option<Vec<FunctionMetadataV8>>;
  }

  /**
   * @description the module constants
   */
  public get constants (): Vec<ModuleConstantMetadataV8> {
    return this.get('constants') as Vec<ModuleConstantMetadataV8>;
  }

  /**
   * @description the module errors
   */
  public get errors (): Vec<ErrorMetadataV8> {
    return this.get('errors') as Vec<ErrorMetadataV8>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadataV8>> {
    return this.get('events') as Option<Vec<EventMetadataV8>>;
  }

  /**
   * @description the module name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the associated module storage
   */
  public get storage (): Option<StorageMetadata> {
    return this.get('storage') as Option<StorageMetadata>;
  }
}

/**
 * @name MetadataV8
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV8 extends Struct implements MetadataInterface<ModuleMetadataV8> {
  public constructor (value?: any) {
    super({
      modules: Vec.with(ModuleMetadataV8)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadataV8> {
    return this.get('modules') as Vec<ModuleMetadataV8>;
  }
}
