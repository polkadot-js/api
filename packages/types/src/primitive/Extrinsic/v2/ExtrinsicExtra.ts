// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../../codec/Struct';
import Address from '../../Address';
import Balance from '../../Balance';
import ExtrinsicEra from '../ExtrinsicEra';
import Nonce from '../../../type/NonceCompact';

export const extraDefinition = {
  era: ExtrinsicEra,
  nonce: Nonce,
  tip: Balance
};

/**
 * @name ExtrinsicExtraV2
 * @description
 * A container for the extra information in an extrinsic
 */
export default class ExtrinsicExtraV2 extends Struct {
  public constructor (value?: Uint8Array) {
    super(extraDefinition, value);
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public set era (era: ExtrinsicEra) {
    this.set('era', era);
  }

  /**
   * @description The [[Nonce]] for the signature
   */
  public get nonce (): Nonce {
    return this.get('nonce') as Nonce;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.get('signer') as Address;
  }

  /**
   * @description The [[Balance]] tip
   */
  public get tip (): Balance {
    return this.get('tip') as Balance;
  }
}
