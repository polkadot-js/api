// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import sanitize from '../codec/create/sanitize';
import Text from './Text';

/**
 * @name Type
 * @description
 * This is a extended version of String, specifically to handle types. Here we rely fully
 * on what string provides us, however we also adjust the types received from the runtime,
 * i.e. we remove the `T::` prefixes found in some types for consistency accross implementation.
 */
export default class Type extends Text {
  private _originalLength: number;

  public constructor (value: Text | Uint8Array | string = '') {
    // First decode it with Text
    const textValue = new Text(value);

    // Then cleanup the textValue to get the @polkadot/types type, and pass the
    // sanitized value to constructor
    super(
      sanitize(
        textValue.toString()
      )
    );

    this._originalLength = textValue.encodedLength;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    // NOTE Length is used in the decoding calculations, so return the original (pre-cleanup)
    // length of the data. Since toU8a is disabled, this does not affect encoding, but rather
    // only the decoding leg, allowing the decoders to work with original pointers
    return this._originalLength;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Type';
  }
}
