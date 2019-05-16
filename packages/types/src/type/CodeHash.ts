// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Hash from '../primitive/Hash';

/**
 * @name CodeHash
 * @description
 * The default contract code hash that is used accross the system. It is a
 * wrapper around [[Hash]], representing a 32-byte blake2b (Substrate) value
 */
export default class CodeHash extends Hash {
}
