// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';
import Struct from '../codec/Struct';
import Bytes from '../primitive/Bytes';
import Hash from '../primitive/Hash';
import { NewBidder } from './Bidder';

/**
 * @name IncomingParachain
 * @description
 * Information regarding a parachain that will be deployed.
 */
export default class Bidder extends Enum {
  constructor (value?: any) {
    super({
      Unset: NewBidder,
      Fixed: Struct.with({ codeHash: Hash, initialHeadData: Bytes }),
      Deploy: Struct.with({ code: Bytes, initialHeadData: Bytes })
    }, value);
  }
}
