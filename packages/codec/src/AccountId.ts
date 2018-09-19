// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import H256 from './H256';

// FIXME This needs to be a proper AccountId, not just a Vec<u8; 32>
export default class AccountId extends H256 {
}
