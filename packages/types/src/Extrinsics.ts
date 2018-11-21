// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vector from './codec/Vector';
import Extrinsic from './Extrinsic';

// A list of extrinsics
export default class Extrinsics extends Vector.with(Extrinsic) {
}
