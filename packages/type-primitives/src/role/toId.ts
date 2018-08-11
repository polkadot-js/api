// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Role } from './index';

import all from './all';

export default function rolesToId (roles: Array<Role>): number {
  return roles.reduce((encoded, role) => {
    return encoded | all[role];
  }, 0);
}
