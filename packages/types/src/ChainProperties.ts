// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from './types';
import { compareMap } from './codec/utils';

/**
 * @name ChainProperties
 * @description
 * Wraps the properties retrieved from the chain via the `system.properties` RPC call. It extends
 * the standard JS Map with de-facto values exposed as getters. While it implements a Codec, it is
 * limited in that it can only be used with input objects via RPC, i.e. no hex decoding. Unlike a
 * struct, this wrasp a JSON object with unknown keys and any values for those
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
   * @description The token decimals, if defined (de-facto standard only)
   */
  get tokenDecimals (): number | undefined {
    return this.get('tokenDecimals');
  }

  /**
   * @description The token system, if defined (de-facto standard only)
   */
  get tokenSymbol (): number | undefined {
    return this.get('tokenSymbol');
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    return compareMap(this, other);
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
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = value;

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
