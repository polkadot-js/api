// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataV1 } from '../../interfaces/metadata';
import { MetadataInterface } from '../types';

import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';

/**
 * @name MetadataV1
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV1 extends Struct implements MetadataInterface<ModuleMetadataV1> {
  public constructor (value?: any) {
    super({
      modules: 'Vec<ModuleMetadataV1>'
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  public get modules (): Vec<ModuleMetadataV1> {
    return this.get('modules') as Vec<ModuleMetadataV1>;
  }
}
