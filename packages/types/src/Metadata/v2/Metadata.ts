// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventMetadataV2, FunctionMetadataV2 } from '../../interfaces/metadata';
import { Constructor } from '../../types';
import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';

import { StorageFunctionMetadata } from './Storage';

/**
 * @name ModuleMetadataV2
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadataV2 extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(Vec.with(StorageFunctionMetadata)),
      calls: Option.with(Vec.with('FunctionMetadataV2')),
      events: Option.with(Vec.with('EventMetadataV2'))
    }, value);
  }

  /**
   * @description the module calls
   */
  public get calls (): Option<Vec<FunctionMetadataV2>> {
    return this.get('calls') as Option<Vec<FunctionMetadataV2>>;
  }

  /**
   * @description the module events
   */
  public get events (): Option<Vec<EventMetadataV2>> {
    return this.get('events') as Option<Vec<EventMetadataV2>>;
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

// @ts-ignore We can ignore the properties, added via Struct.with
const _MetadataV2: Constructor<MetadataInterface<ModuleMetadataV2>> = Struct.with({
  modules: Vec.with(ModuleMetadataV2)
});

/**
 * @name MetadataV2
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV2 extends _MetadataV2 {}
