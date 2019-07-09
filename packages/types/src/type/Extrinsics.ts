// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Extrinsic from './Extrinsic';
import Vector from '../codec/Vector';

/**
 * @name Extrinsics
 * @description
 * A [[Vector]] of [[Extrinsic]]
 */
export default class Extrinsics extends Vector.with(Extrinsic) {
}
