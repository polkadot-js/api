// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from './types';

// TODO Expose known properties as they become known, currently we have `tokenSymbol` (e.g. BBQ)

/**
 * @name ChainProperties
 * @description
 * Wraps the properties retrieved from the chain via the `system.properties` RPC call. It extends
 * the standard JS Map with known values exposed as a getter. While it implements a Codec, it is
 * limited ain that it can only be used with input objects, i.e. no hex decoding.
 * @noInheritDoc
 */
export default class ChainProperties extends Map<string, any> implements Codec {
  constructor (value?: { [index: string]: any } | null) {
    super(ChainProperties.decodeChainProperties(value));
  }

  private static decodeChainProperties (value?: { [index: string]: any } | null): Array<[string, any]> {
    return Object.entries(value || {});
  }

  /**
   * @description Always 0, never encodes as a Uint8Array
   */
  get encodedLength (): number {
    return 0;
  }

  /**
   * @description Returns a specific names entry in the structure
   * @param name The name of the entry to retrieve
   */
  get (name: string): any | undefined {
    return super.get(name);
  }

  /**
   * @description Unimplemented, will throw
   */
  toHex (): string {
    throw new Error('Unimplemented');
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return [...this.keys()].reduce((json, key) => {
      json[key] = this.get(key);

      return json;
    }, {} as any);
  }

  /**
   * @description Returns the string representation of the value
   */
  toString () {
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Unimplemented, will throw
   */
  toU8a (isBare?: boolean): Uint8Array {
    throw new Error('Unimplemented');
  }
}
