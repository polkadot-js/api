// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as ink from './ink';
import * as solang from './solang';
import * as user from './user';

const all: Record<string, any> = {};

function addExport (type: string, abis: Record<string, any>): void {
  Object.keys(abis).forEach((key): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    all[`${type}_${key}`] = abis[key];
  });
}

addExport('ink', ink);
addExport('solang', solang);
addExport('user', user);

export default all;
