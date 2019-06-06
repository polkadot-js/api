// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../primitive/U32';

/**
 * @name MemberCount
 * @description
 * A number of council members as a [[U32]]. This also serves as a number of voting members, and since for motions, each council member may vote exactly once, therefore also the number of votes for any given motion.v
 */
export default class MemberCount extends U32 {
}
