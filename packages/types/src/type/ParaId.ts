// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../primitive/U32';

/**
 * @name ParaId
 * @description
 * Identifier for a deployed parachain implemented as a [[U32]]
 */
export default class ParaId extends U32 {
}

/**
 * @name ParaIdOf
 * @description
 * Identifier for a deployed parachain implemented as a [[U32]]
 */
export class ParaIdOf extends ParaId {
}
