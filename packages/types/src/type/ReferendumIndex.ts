// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../primitive/U32';

/**
 * @name ReferendumIndex
 * @description
 * An increasing number that represents a specific referendum in the system. It
 * is unique per chain. Implemented as [[U32]]
 */
export default class ReferendumIndex extends U32 {
}
