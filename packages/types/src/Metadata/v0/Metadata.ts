// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OuterDispatchMetadataV0, OuterDispatchCallV0 } from '../../interfaces/metadata';
import { MetadataInterface } from '../types';

import { hexToU8a, isHex, isU8a } from '@polkadot/util';

import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import { OuterEventMetadata, OuterEventEventMetadata } from './Events';
import { RuntimeModuleMetadataV0 } from './Modules';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call.

/**
 * @name MetadataV0
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV0 extends Struct implements MetadataInterface<RuntimeModuleMetadataV0> {
  public constructor (value?: any) {
    super({
      outerEvent: OuterEventMetadata,
      modules: Vec.with(RuntimeModuleMetadataV0),
      outerDispatch: 'OuterDispatchMetadataV0'
    }, MetadataV0.decodeMetadata(value));
  }

  public static decodeMetadata (value: string | Uint8Array | object): object | Uint8Array {
    if (isHex(value)) {
      // We receive this as an hex in the JSON output from the Node.
      // Convert to u8a and use the U8a version to do the actual parsing.
      return MetadataV0.decodeMetadata(hexToU8a(value));
    } else if (isU8a(value)) {
      // HACK 13 Oct 2018 - For current running BBQ nodes, Metadata is not properly
      // encoded, it does not have a length prefix. For latest substrate master, it
      // is properly encoded. Here we pull the prefix, check it agianst the length -
      // if matches, then we have the length, otherwise we assume it is an older node
      // and use the whole buffer
      const [offset, length] = Compact.decodeU8a(value);

      return value.length === (offset + length.toNumber())
        ? value.subarray(offset)
        : value;
    }

    // Decode as normal struct
    return value;
  }

  /**
   * @description Wrapped [[OuterDispatchCall]]
   */
  public get calls (): Vec<OuterDispatchCallV0> {
    return (this.get('outerDispatch') as OuterDispatchMetadataV0).calls;
  }

  /**
   * @description Wrapped [[OuterEventEventMetadata]]
   */
  public get events (): Vec<OuterEventEventMetadata> {
    return (this.get('outerEvent') as OuterEventMetadata).events;
  }

  /**
   * @description Wrapped [[RuntimeModuleMetadata]]
   */
  public get modules (): Vec<RuntimeModuleMetadataV0> {
    return this.get('modules') as Vec<RuntimeModuleMetadataV0>;
  }
}
