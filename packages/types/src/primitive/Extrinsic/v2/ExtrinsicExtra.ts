// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, Index } from '../../../interfaces/runtime';
import { ExtrinsicExtraValue } from '../types';

import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import Address from '../../Generic/Address';
import ExtrinsicEra from '../ExtrinsicEra';

/**
 * @name ExtrinsicExtraV2
 * @description
 * A container for the extra information in an extrinsic
 */
export default class ExtrinsicExtraV2 extends Struct {
  public constructor (value?: ExtrinsicExtraValue | Uint8Array) {
    super({
      era: ExtrinsicEra,
      nonce: 'Compact<Index>',
      tip: 'Compact<Balance>'
    }, value);
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Index]] for the signature
   */
  public get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
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
  public get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }
}
