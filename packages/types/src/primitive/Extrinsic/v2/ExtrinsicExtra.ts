// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../../../types';

import Struct from '../../../codec/Struct';
import Address from '../../Address';
import BalanceCompact from '../../BalanceCompact';
import ExtrinsicEra from '../ExtrinsicEra';
import NonceCompact from '../../../type/NonceCompact';

interface ExtrinsicExtraValueV2 {
  era?: Uint8Array;
  nonce?: AnyNumber;
  tip?: AnyNumber;
}

export const extraDefinition = {
  era: ExtrinsicEra,
  nonce: NonceCompact,
  tip: BalanceCompact
};

/**
 * @name ExtrinsicExtraV2
 * @description
 * A container for the extra information in an extrinsic
 */
export default class ExtrinsicExtraV2 extends Struct {
  public constructor (value?: ExtrinsicExtraValueV2 | Uint8Array) {
    super(extraDefinition, value);
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[NonceCompact]] for the signature
   */
  public get nonce (): NonceCompact {
    return this.get('nonce') as NonceCompact;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.get('signer') as Address;
  }

  /**
   * @description The [[BalanceCompact]] tip
   */
  public get tip (): BalanceCompact {
    return this.get('tip') as BalanceCompact;
  }
}
