// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { IHash } from '../types';

import H256 from './H256';

/**
 * @name Hash
 * @description
 * The default hash that is used accross the system. It is basically just a thin
 * wrapper around [[H256]], representing a 32-byte blake2b (Substrate) value
 */
export default class Hash extends H256 implements IHash {
}
