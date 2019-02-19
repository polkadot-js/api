// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U64 from '../primitive/U64';

/**
 * @name Nonce
 * @description
 * The Nonce or number of transactions sent by a specific account. Generally used
 * with extrinsics to determine the order of execution. implemented as a Substrate
 * [[U64]]
 */
export default class Nonce extends U64 {
}
