// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV6, FunctionMetadataV6, ModuleConstantMetadataV6 } from '../../interfaces/metadata';
import { Constructor } from '../../types';
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
      name: Text,
      prefix: Text,
      storage: Option.with(Vec.with(StorageEntryMetadata)),
      calls: Option.with(Vec.with('FunctionMetadataV6')),
      events: Option.with(Vec.with('EventMetadataV6')),
      constants: Vec.with('ModuleConstantMetadataV6')
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

// @ts-ignore We can ignore the properties, added via Struct.with
const _MetadataV6: Constructor<MetadataInterface<ModuleMetadataV6>> = Struct.with({
  modules: Vec.with(ModuleMetadataV6)
});

/**
 * @name MetadataV6
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV6 extends _MetadataV6 {}
