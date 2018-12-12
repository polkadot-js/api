// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import U32 from './U32';

/**
 * @name InherentOfflineReport
 * @description
 * Describes the offline-reporting extrinsic
 */
export default class InherentOfflineReport extends Vector.with(Tuple.with([U32, Vector.with(U32)])) {
}
