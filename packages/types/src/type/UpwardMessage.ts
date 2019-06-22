// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import Bytes from '../primitive/Bytes';

export class ParachainDispatchOrigin extends Enum {
  constructor (value?: any) {
    super([
      // As a simple `Origin::Signed`, using `ParaId::account_id` as its value. This is good when
      // interacting with standard modules such as `balances`.
      'Signed',
      // As the special `Origin::Parachain(ParaId)`. This is good when interacting with parachain-
      // aware modules which need to succinctly verify that the origin is a parachain.
      'Parachain'
    ], value);
  }
}

/**
 * @name UpwardMessage
 * @description
 * A message from a parachain to its Relay Chain
 */
export default class UpwardMessage extends Struct {
  constructor (value?: any) {
    super({
      origin: ParachainDispatchOrigin,
      data: Bytes
    }, value);
  }

  /**
   * @description The total balance backing this validator
   */
  get data (): Bytes {
    return this.get('data') as Bytes;
  }

  /**
   * @description The validator's own stash that is exposed
   */
  get origin (): ParachainDispatchOrigin {
    return this.get('origin') as ParachainDispatchOrigin;
  }
}
