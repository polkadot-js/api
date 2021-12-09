// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import ink from './ink';
import solang from './solang';
import user from './user';

const all: Record<string, Record<string, unknown>> = {};

Object.entries({ ink, solang, user }).forEach(([type, abis]) =>
  Object.entries(abis).forEach(([name, abi]): void => {
    all[`${type}_${name}`] = abi;
  })
);

export default all;
