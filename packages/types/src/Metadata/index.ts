// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, hexToU8a, isHex, isU8a, isUndefined } from '@polkadot/util';

import { getTypeDef, TypeDef, TypeDefInfo } from '../codec/createType';
import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Vector from '../codec/Vector';
import { OuterDispatchMetadata, OuterDispatchCall } from './Calls';
import { OuterEventMetadata, OuterEventMetadataEvent } from './Events';
import { RuntimeModuleMetadata } from './Modules';

// Decodes the runtime metadata as passed through from the `state_getMetadata` call. This
// file is probably best understood from the bottom-up, i.e. start reading right at the
// end and work up. (Just so we don't use before definition)

// Quick and dirty flatten (.flat() not available)
function flattenUniq (list: Array<any>): Array<any> {
  const flat = list.reduce((result, entry) => {
    return result.concat(
      Array.isArray(entry)
        ? flattenUniq(entry)
        : entry
    );
  }, []);

  return [...new Set(flat)]
    .filter((value: any) => value)
    .sort();
}

/**
 * @name Metadata
 * @description
 * The runtime metadata as a decoded structure
 */
export default class Metadata extends Struct {
  constructor (value?: any) {
    super({
      outerEvent: OuterEventMetadata,
      modules: Vector.with(RuntimeModuleMetadata),
      outerDispatch: OuterDispatchMetadata
    }, Metadata.decodeMetadata(value));
  }

  static decodeMetadata (value: string | Uint8Array | object): object | Uint8Array {
    if (isHex(value)) {
      // We receive this as an hex in the JSON output from the Node.
      // Convert to u8a and use the U8a version to do the actual parsing.
      return Metadata.decodeMetadata(hexToU8a(value));
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
  get calls (): Vector<OuterDispatchCall> {
    return (this.get('outerDispatch') as OuterDispatchMetadata).calls;
  }

  /**
   * @description Wrapped [[OuterEventMetadataEvent]]
   */
  get events (): Vector<OuterEventMetadataEvent> {
    return (this.get('outerEvent') as OuterEventMetadata).events;
  }

  /**
   * @description Wrapped [[RuntimeModuleMetadata]]
   */
  get modules (): Vector<RuntimeModuleMetadata> {
    return this.get('modules') as Vector<RuntimeModuleMetadata>;
  }

  private get argNames () {
    return this.modules.map((module) =>
      module.module.call.functions.map((fn) =>
        fn.arguments.map((argument) => argument.type.toString())
      )
    );
  }

  private get eventNames () {
    return this.events.map((module) =>
      module.events.map((event) =>
        event.arguments.map((argument) => argument.toString())
      )
    );
  }

  private get storageNames () {
    return this.modules.map((module) =>
      module.storage.isSome
        ? module.storage.unwrap().functions.map((fn) =>
          fn.type.isMap
            ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
            : [fn.type.asType.toString()]
        )
        : []
    );
  }

  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes (): Array<string> {
    const types = flattenUniq([this.argNames, this.eventNames, this.storageNames]);

    this.validateTypes(types);

    return types;
  }

  private validateTypes (types: Array<string>): void {
    const extractTypes = (types: Array<string>): Array<any> => {
      return types.map((type) => {
        const decoded = getTypeDef(type);

        switch (decoded.info) {
          case TypeDefInfo.Plain:
            return decoded.type;

          case TypeDefInfo.Compact:
          case TypeDefInfo.Option:
          case TypeDefInfo.Vector:
            return extractTypes([(decoded.sub as TypeDef).type]);

          case TypeDefInfo.Tuple:
            return extractTypes(
              (decoded.sub as Array<TypeDef>).map((sub) => sub.type)
            );

          default:
            throw new Error('Unreachable');
        }
      });
    };

    const allTypes = require('../index');
    const missing = flattenUniq(extractTypes(types)).filter((type) =>
      isUndefined(allTypes[type])
    );

    assert(missing.length === 0, `Unknown types found, no types for ${missing}`);
  }
}
