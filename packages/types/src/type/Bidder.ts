// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import AccountId from '../primitive/AccountId';
import ParaId from './ParaId';
import SubId from './SubId';

/**
 * @name NewBidder
 * @description
 * A bidder identifier, which is just the combination of an account ID and a sub-bidder ID. This is called `NewBidder` in order to distinguish between bidders that would deploy a *new* parachain and pre-existing parachains bidding to renew themselves.
 */
export class NewBidder extends Struct {
  constructor (value?: any) {
    super({
      who: AccountId,
      sub: SubId
    }, value);
  }
}

/**
 * @name Bidder
 * @description
 * The desired target of a bidder in an auction
 */
export default class Bidder extends Enum {
  constructor (value?: any) {
    super({
      New: NewBidder,
      Existing: ParaId
    }, value);
  }
}
