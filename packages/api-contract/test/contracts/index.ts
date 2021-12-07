// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import ink from './ink';
import solang from './solang';
import user from './user';

const all: Record<string, Record<string, unknown>> = {};

function addExport (type: string, abis: Record<string, Record<string, unknown>>): void {
  Object.keys(abis).forEach((key): void => {
    all[`${type}_${key}`] = abis[key];
  });
}

addExport('ink', ink);
addExport('solang', solang);
addExport('user', user);

export default all;
